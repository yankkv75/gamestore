import React, { useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

import '../static/css/Cart.css'


function CartScreen({ match, history }) {

    const gameId = match.params.id
    const quantity = 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log('cartItems: ', cart)

    useEffect(() => {
        if (gameId) {
            dispatch(addToCart(gameId))
        }
    }, [dispatch, gameId])

    return (
        <div className='cart'>
            <div className='cart-container'>
                <div className='items-table'>
                    {cartItems.map(item => (
                        <table className='item-table'>
                            <tr>
                                <td className='item-image'>
                                    <LinkRouter to={`/game/${item.game}`}>
                                        <img src={item.image} />
                                    </LinkRouter>
                                </td>
                                <td className='item-name'>
                                    {item.name}
                                </td>
                                <td className='item-price'>
                                    ${item.price}
                                </td>
                                <td className='item-delete'>
                                    <i className="fa-solid fa-trash"></i>
                                </td>
                            </tr>
                        </table>
                    ))}
                </div>
                <div className='subtotal'>
                    <p>Subtotal: ${cartItems.reduce((acc, item) => acc + quantity * item.price, 0)}</p>
                    <button className='btn-wrapper-cart'>
                        <LinkRouter to='#' className='btn-link-cart'>Proceed to Checkout</LinkRouter>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen