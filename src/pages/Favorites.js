import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritCtx = useContext(FavoritesContext)

    let content
    if (favoritCtx.totalfavorites === 0){
        content = <p>You got no favorites yet. start adding some ?</p>
    }else{
        content = <MeetupList meetups = {favoritCtx.favorites} />

    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;