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
import {
    userLoginReducer
} from './reducers/userReducers'

const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    gameList: gameListReducer,
    gameDetails: gameDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
})

// Pull data from the local storage, parse it to turn back into a js object and load it into initial state
const cartItemsLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : []



const initalState = {
    cart: { cartItems: cartItemsLocalStorage },
    userLogin: { userInfo: userInfoLocalStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// Implementing store to actual applicaton
export default store