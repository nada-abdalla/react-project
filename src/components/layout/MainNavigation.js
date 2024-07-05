import {useContext} from 'react'

import { Link } from "react-router-dom"

import classses from "./MainNavigation.module.css"
import FavoritesContext from '../../store/favorites-context'

function MainNavigation (){
    const favoritCtx = useContext(FavoritesContext)

    return(
        <header className={classses.header}>
            <div className={classses.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to= '/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to= '/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to= '/favorites'>
                        My Favorites Meetups
                        <span className={classses.badge}>{favoritCtx.totalfavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation