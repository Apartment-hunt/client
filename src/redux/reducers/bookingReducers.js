// eslint-disable-next-line
export default (bookings = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return { bookings: action.payload }
        case 'CREATE':
            return { bookings: [...bookings, action.payload] }
        default:
            return bookings;
    }
}