import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    postDetailsReducer,
    postListReducer
} from './reducers/postReducers'
import {
    gameDetailsReducer,
    gameListReducer
} from './reducers/gameReducers'
import {
    cartReducer
} from './reducers/cartReducers'

const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    gameList: gameListReducer,
    gameDetails: gameDetailsReducer,
    cart: cartReducer,
})

// Pull data from the local storage, parse it to turn back into a js object and load it into initial state
const cartItemsLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initalState = {
    cart: { cartItems: cartItemsLocalStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// Implementing store to actual applicaton
export default store