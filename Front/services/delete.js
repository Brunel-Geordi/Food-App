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
      console.log(error);
    }
  };
  