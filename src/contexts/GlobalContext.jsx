import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function MoviesProvider({ children }) {
    const movies = useFetchMovies()

    return (
        <GlobalContext.Provider value={{ movies }} >
            {children}
        </GlobalContext.Provider>
    )
}

function useFetchMovies(serchText) {

    const [movies, setMovies] = useState([])
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${serchText}`;

    useEffect(() => {
        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
            })
            .catch(err => {
                console.error('ERROR', err);

            })
    }, [])

    return movies
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { MoviesProvider, useFetchMovies, useGlobalContext }