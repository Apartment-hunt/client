import *as api from '../../api/booking/bookingApi.js';

export const getBookings = () => async(dispatch) => {
    try{
        const {data} = await api.fetchBookings();
        dispatch({type : 'FETCH_ALL',payload:data});
    }catch(error){
        console.log(error.message);
    }
}