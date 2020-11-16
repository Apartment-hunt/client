import { combineReducers } from 'redux';

import bookingReducers from './bookingReducers.js'

export default combineReducers({ BookingState : bookingReducers });