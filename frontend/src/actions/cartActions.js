import axios from 'axios'
import {
    CART_ADD_GAME,
    CART_REMOVE_GAME,
} from '../constants/cartConstants'

// getState lets get any part of this state. I can get a single game, it allows to access this.
// It's necessary when we're updating local storage and loading data into browser
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/game/${id}`)

    dispatch({
        type: CART_ADD_GAME,
        payload: {
            game: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            сountInStock: data.countInStock,
            quantity
        }
    })

    // Load data into local storage, cause this data will stay even user leave the page
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) // key-value pair
}

export const removeCartItem = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_GAME,
        payload: id,
    })
    // update local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}