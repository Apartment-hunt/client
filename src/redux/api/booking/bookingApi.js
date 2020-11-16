import axios from 'axios';

const url = 'http://localhost:5000/booking/';


export const fetchBookings = () => {axios.get(url)}

export const createBooking = (newBooking) => axios.post(url,newBooking);