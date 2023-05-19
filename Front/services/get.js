export const apiUrl = "http://192.168.179.67:5000/";
export const imageUrl = "http://192.168.179.67:5000/image/";

export const getProduct = async (source) => {
  try {
    const response = await fetch(`${apiUrl}${source}`);
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
