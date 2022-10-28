import GameItem from '../components/GameItem'
import games from '../games'
import '../static/css/Games.css'

function GamesScreen({ }) {
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