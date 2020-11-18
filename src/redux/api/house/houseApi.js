import axios from "axios";

export const fetchHouses = () => {
  return axios.get("https://quiet-spire-34698.herokuapp.com/house");
};

export const createHouses = (newHouse) =>
  axios
    .post("https://quiet-spire-34698.herokuapp.com/house", newHouse, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => console.log(res));
