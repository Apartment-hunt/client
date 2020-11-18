import axios from "axios";

export const fetchBookings = () => {
  const bookings = axios.get("https://quiet-spire-34698.herokuapp.com/booking");
  return bookings;
};

export const createBooking = (newBooking) => axios.post("https://quiet-spire-34698.herokuapp.com/booking", newBooking);
