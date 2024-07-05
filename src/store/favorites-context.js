import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalfavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvided(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function rsmoveFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    
    const context = {
        favorites: userFavorites,
        totalfavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: rsmoveFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler

    }


    return(
        <FavoritesContext.Provider value={context}>
        {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext