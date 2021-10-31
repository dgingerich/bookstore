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