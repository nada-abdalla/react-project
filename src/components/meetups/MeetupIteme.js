import {useContext} from 'react'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem (props){
    const favoritCtx = useContext(FavoritesContext)
    const itemIsFavorite = favoritCtx.itemIsFavorite(props.id)

    function toggleFavoritesStatusHandler(){
        if(itemIsFavorite){
            favoritCtx.removeFavorite(props.id)
        }else{
            favoritCtx.addFavorite({
               id: props.id,
               title: props.title,
               image: props.image,
               description: props.description,
               address: props.address, 
            })
        }

    }

    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.address}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
            </div>
            </Card>
        </li>

    )
}

export default MeetupItem