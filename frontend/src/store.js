import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { postListReducer } from './reducers/postReducers'
import { gameListReducer } from './reducers/gameReducers'

const reducer = combineReducers({
    postList: postListReducer,
    gameList: gameListReducer,
})

const initalState = {}

const middleware = [thunk]

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// Implementing store to actual applicaton
export default store