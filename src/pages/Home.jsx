import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"


function Home() {

    // const movies = [
    //     { id: 1, title: "Veer Zara", release_date: 1996 },
    //     { id: 2, title: "Titanic", release_date: 1800 },
    //     { id: 3, title: "Raaz", release_date: 2012 },
    //     { id: 4, title: "Jumanji", release_date: 2017 },
    //     { id: 5, title: "Jungle", release_date: 2023 },
    // ]

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const getMovies = await getPopularMovies()
                setMovies(getMovies)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        loadPopularMovies()
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
        } catch (err) {
            setError("Failed to search the movies" + err)
        } finally {
            setLoading(false)
        }
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" className="search-input" placeholder="Search here for the movies.."
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>

        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">Loading....</div> :
            <div className="movies-grid">
                {movies.map((movie) =>
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        }


    </div>
}

export default Home