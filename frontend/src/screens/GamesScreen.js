import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameItem from '../components/GameItem'
import '../static/css/Games.css'

import { listGames } from '../actions/gameActions'

function GamesScreen({ }) {

    const dispatch = useDispatch()
    const gameList = useSelector(state => state.gameList)
    const { error, loading, games } = gameList

    useEffect(() => {
        dispatch(listGames())
    }, [dispatch])

    return (
        <div className='games-container'>
            <p className='games-top'>Our Games</p>
            {loading ? <h1>Loading</h1>
                : error ? <h1>{error}</h1>
                    :
                    <div>
                        {games.map((game) => (
                            <GameItem game={game} />
                        ))}
                    </div>
            }
        </div>
    )
}

export default GamesScreen