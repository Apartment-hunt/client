import *as api from '../../api/house/houseApi.js';

export const getHouses = () => async(dispatch) => {
    try{
        const response = await api.fetchHouses();
        // console.log(response.data);
        dispatch({type : 'FETCH_ALL',payload:response.data});
    }catch(error){
        console.log(error.message);
    }
}
export const postHouse = (newHouse) => async(dispatch) => {
    try{
        const {data} = await api.createHouses(newHouse);
        dispatch({type : 'CREATE',payload:data});
    }catch(error){
        console.log(error.message);
    }
}