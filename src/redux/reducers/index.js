import { combineReducers } from 'redux';

import bookingReducers from './bookingReducers.js'
import houseReducers from './houseReducers.js'

export default combineReducers({ 
    BookingState : bookingReducers,
    HouseState : houseReducers
});