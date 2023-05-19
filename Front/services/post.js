import { apiUrl } from "./get";
export const setPanier = async (name, qte, boisson, snack, datetime, montant, image, id_user ) => {
    const queryString = `name=${name}&qte=${qte}&boisson=${boisson}&snack=${snack}&datetime=${datetime}&montant=${montant}&image=${image}&id_users=${id_user}`;
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