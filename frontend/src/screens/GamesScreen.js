import axios from 'axios'
import { useState, useEffect } from 'react'

import GameItem from '../components/GameItem'
import '../static/css/Games.css'

function GamesScreen({ }) {

    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const { data } = await axios.get('api/games/')
            setGames(data)
        }
        fetchGames()
    }, [])

    return (
        <div className='games-container'>
            <p className='games-top'>Our Games</p>

            <div>
                {games.map((game) => (
                    <GameItem game={game} />
                ))}
            </div>
        </div>
    )
}

export default GamesScreen