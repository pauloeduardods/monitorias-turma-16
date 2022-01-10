const URL = 'https://api.biscoint.io/v1/ticker';

export const getPrice1 = () => {
  return fetch(URL)
    .then(response => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    }
  );
}

const getPrice = async() => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getPrice;
// Nesta pasta vemos duas maneiras de fazer uma requisição assíncrona.
// Esse arquivo vai ser usado na action do thunk.