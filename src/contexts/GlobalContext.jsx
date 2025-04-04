import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([])

    return (
        <GlobalContext.Provider value={{ movies, setMovies }} >
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { MoviesProvider, useGlobalContext }