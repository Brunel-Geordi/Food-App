import { apiUrl } from "./api";
export const detetePanier = async(point) => {
    try {
      const selection = await fetch(`${apiUrl}${point}`);
      const data = await selection.json();
      const newOptions = data.map((product) => ({
        label: product.name,
        value: product.image,
      }));
      return newOptions;
    } catch (error) {
    }
  };

  export const clearPanier = async (id_users) => {
    try {
      const response = await fetch(`${apiUrl}commande?&id_users=${id_users}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        return response;
      } else {
        throw new Error("Impossible de supprimer le panier");
      }
    } catch (error) {
      return
    }
  };
  