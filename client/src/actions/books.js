import * as api from '../api';

// Action Creators

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks();
        dispatch({type: 'FETCH_ALL_BOOKS', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createBook = (newBook) => async (dispatch) => {
    try {
        console.log('dispatch')
        const {data} = await api.createBook(newBook);

        console.log(data)

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}