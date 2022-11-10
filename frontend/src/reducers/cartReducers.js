import {
    CART_ADD_GAME,
    CART_REMOVE_GAME
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_GAME:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.game === item.game)

            if (existItem) {
                return {
                    ...state,
                    // If game matches the extist item, then i replace it with a new item
                    // If it's not the product that i need to update, then i'll return back to the original game, so array will stay the same
                    // If it doesn't, so i find new game that i want to update, than i replace that with a new item, that was in the payload
                    cartItems: state.cartItems.map(x => x.game === existItem.game ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_GAME:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.game !== action.payload) // action.payload is going to be the id of the game, that need be to removed
            }

        default:
            return state
    }
}