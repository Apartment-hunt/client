import *as api from '../../api/house/houseApi.js';

export const getHouses = () => async(dispatch) => {
    try{
        const {data} = await api.fetchHouses();
        dispatch({type : 'FETCH_ALL',payload:data});
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