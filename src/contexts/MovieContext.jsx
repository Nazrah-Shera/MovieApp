// Think of Context like a shared backpack 🎒 that any component in your app can reach into and 
// grab things from — instead of passing data through every component manually.

import {createContext, useState, useContext, useEffect} from "react"


//This just creates the empty shared backpack. Nothing in it yet.
const MovieContext = createContext()


//2. A helper hook to use the backpack
//Instead of writing useContext(MovieContext) every time in your components, you just call useMovieContext() — it's a shortcut.
export const useMovieContext = () => useContext(MovieContext)



//MovieProvider is a wrapper component. Any component inside it can access the backpack. You typically wrap your whole app with it.
export const MovieProvider = ({children}) => {
    //This is just an array that stores your favorite movies. Starts empty.
    const [favorites, setFavorites] = useState([])


    //When the app first loads, it checks if you had favorites saved in the browser (localStorage) and loads them back. The [] means "run this only once on startup".
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])


    //Every time your favorites list changes, this saves it to the browser so it persists after a page refresh.
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])



//     prev = the current favorites list before the update
// ...prev = spread operator — it "unpacks" the existing list
// Think of it like: "take everything that was already in the list, then add the new movie at the end"
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    //.filter() loops through the array and keeps only the items where the condition is true

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    

    //.some() checks if at least one item in the array matches the condition

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }


    //You pack everything into value so any component can grab what it needs.
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}


//Any component inside MovieProvider just calls useMovieContext() and gets instant access to the favorites list and all the functions — no prop passing needed!