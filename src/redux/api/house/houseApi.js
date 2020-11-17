import axios from 'axios';

export const fetchHouses = () => {
  return axios.get('/house/')
};

export const createHouses = (newHouse) => axios.post('/house/',newHouse, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then(res => console.log(res))
  ;