import {getProduct } from "./get";
import { apiUrl } from "./api";
import { getUser } from "../components/context";
export const setPanier = async (name: string, qte: number, boisson: string, snack: string, montant: string, image: string, id_user: number ) => {
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

  export const postUsers = async (name: string, mail: string, pass: string, connected: any) => {
  try {
    const queryString = `name=${name}&mail=${mail}&password=${pass}`;
    const response = await fetch(`${apiUrl}signup?${queryString}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getUser(mail, pass, connected);
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};