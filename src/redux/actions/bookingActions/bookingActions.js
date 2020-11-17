import *as api from '../../api/booking/bookingApi.js';

export const getBookings = () => async(dispatch) => {
    try{
        const {data} = await api.fetchBookings();
        dispatch({type : 'FETCH_ALL',payload:data});
    }catch(error){
        console.log(error.message);
    }
}
export const postBooking = (newBooking) => async(dispatch) => {
    try{
        const {data} = await api.createBooking(newBooking);
        dispatch({type : 'CREATE',payload:data});
    }catch(error){
        console.log(error.message);
    }
}