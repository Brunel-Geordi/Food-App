import { apiUrl } from "./api";
export const setPanier = async (name, qte, boisson, snack, montant, image, id_user ) => {
    const queryString = `name=${name}&qte=${qte}&boisson=${boisson}&snack=${snack}&montant=${montant}&image=${image}&id_users=${id_user}`;
    const response = await fetch(
      `${apiUrl}panier?${queryString}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.json();
    return result;
  };

export const setList = async (name, qte, boisson, snack, montant, id_user ) => {
    const queryString = `name=${name}&qte=${qte}&boisson=${boisson}&snack=${snack}&montant=${montant}&id_users=${id_user}`;
    const response = await fetch(
      `${apiUrl}commande?${queryString}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.json();
    return result;
  };

  export const postUsers = async (name, mail, pass, connected) => {
  try {
    const queryString = `name=${name}&mail=${mail}&password=${pass}`;
    const response = await fetch(`${apiUrl}signup?${queryString}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    connected.getUser(mail, pass);
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (image, nom, endpoint) => {
  const query = `point=${endpoint}`
  const formData = new FormData();
  formData.append('image', {
    uri: image,
    name: `${nom}.png`,
    type: 'image/png',
  });

  try {
    const response = await fetch(`${apiUrl}upload?${query}`, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = response.json()
    if(!data){
      return
    }
    return response;
  } catch (error) {
    console.log(error);
  } 
};

export const newProduct = async (type, name, price, image) => {
  const queryString = `type=${type}&name=${name}&price=${price}&image=${image}`;
  const response = await fetch(
    `${apiUrl}${type}?${queryString}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const result = response.json();
  return result;
};