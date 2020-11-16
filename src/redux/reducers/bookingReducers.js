export default (bookings = [] ,action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...bookings,action.payload];
        default:
            return bookings;
    }
}