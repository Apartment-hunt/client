// eslint-disable-next-line
export default (houses = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return { houses: action.payload }
        case 'CREATE':
            return { houses: [...houses, action.payload] }
        default:
            return houses;
    }
}