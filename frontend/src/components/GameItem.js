import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../static/css/Games.css'

function GameItem({ game }) {
    return (
        <LinkRouter to={`/game/${game._id}`} className='game-item-link'>
            <table className='game-table'>
                <tr>
                    <td className='game-image'>
                        <img src={game.image} alt={game.name} style={{ width: '100px' }} />
                    </td>
                    <td className='game-name'>
                        {game.name}
                    </td>
                    <td className='game-price'>
                        $ {game.price}
                    </td>
                </tr>
            </table>
        </LinkRouter>
    )
}

export default GameItem