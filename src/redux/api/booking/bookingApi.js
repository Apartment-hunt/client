import axios from 'axios';

export const fetchBookings = () => {
    const bookings =  axios.get('/booking/');
    return bookings;
}

export const createBooking = (newBooking) => axios.post('/booking/',newBooking);