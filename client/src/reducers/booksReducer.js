export default (books = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_BOOKS':
            return action.payload;
        default: 
            return books;
    }
}