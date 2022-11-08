import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import '../static/css/SingleGame.css'

import { listGameDetails } from '../actions/gameActions'


function SingleGameScreen({ match, history }) {


    const dispatch = useDispatch()
    const gameDetails = useSelector(state => state.gameDetails)
    const { loading, error, game } = gameDetails

    useEffect(() => {
        dispatch(listGameDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }

    return (
        <div className='single-game-message'>
            {loading ? <h1>Loading</h1>
                : error ? <h1>{error}</h1>
                    : (
                        <div className='single-game-container'>
                            <div className='single-g-img'>
                                <img className='game-img' src={game.image} alt={game.name} />
                                <a href={game.trailer} target='_blank' rel="noreferrer">Watch Trailer</a>
                            </div>
                            <div className='single-g-description'>
                                <h3>{game.name}</h3>
                                <p>{game.description}</p>
                            </div>
                            <div className='single-g-purchase'>
                                <h2>Price: <span>$ {game.price}</span></h2>
                                <p>Status: {game.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                                {game.count_in_stock > 0 && (
                                    <button className='buy-wrapper'>
                                        <LinkRouter onClick={addToCartHandler} className='buy-link'>Buy</LinkRouter>
                                    </button>
                                )}
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default SingleGameScreen