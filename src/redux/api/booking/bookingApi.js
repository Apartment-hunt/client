import axios from 'axios';

const url = 'http://localhost:5000/booking/';


export const fetchBookings = () => {
    const bookings =  axios.get(url);
    return bookings;
}

export const createBooking = (newBooking) => axios.post(url,newBooking);