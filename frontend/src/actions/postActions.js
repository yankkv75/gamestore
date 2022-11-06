import axios from 'axios'

import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
} from '../constants/postContstants'

// listPosts is going to be in charge of replacing the API call that i made in blog screen
export const listPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: POST_LIST_REQUEST
        })
        const { data } = await axios.get('/api/posts/')

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}