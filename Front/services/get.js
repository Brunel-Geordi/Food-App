import { apiUrl } from "./api";

export const getProduct = async (source) => {
  try {
    const response = await fetch(`${apiUrl}${source}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getList = async (id_users) => {
  const user = `&id_users=${id_users}`
  try {
    const response = await fetch(`${apiUrl}commande?${user}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const dropSelction = async (point) => {
  try {
    const selection = await fetch(`${apiUrl}${point}`);
    const data = await selection.json();
    const newOptions = data.map((product) => ({
      label: product.name,
      value: product.image,
    }));
    return newOptions;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (mail, pass) => {
  try {
    const response = await fetch(
      `${apiUrl}login?&mail=${mail}&password=${pass}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
