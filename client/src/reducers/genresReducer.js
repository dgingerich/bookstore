export default (genres = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_GENRES':
            return action.payload;
        default: 
            return genres;
    }
}