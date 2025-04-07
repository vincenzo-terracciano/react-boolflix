import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import Search from "./Search"

export default function Header() {

    const { setMovies } = useGlobalContext()
    const [searchText, setSearchText] = useState("")

    function handleChange() {
        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
        const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;
        const base_series_api_url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchText}`

        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const searchedMovie = data.results.map(element => (
                    {
                        id: element.id,
                        title: element.title,
                        original_title: element.original_title,
                        original_language: element.original_language,
                        vote_average: element.vote_average,
                        poster_path: element.poster_path,
                        overview: element.overview,
                        type: 'movie'
                    }
                ))

                fetch(base_series_api_url)
                    .then(res => res.json())
                    .then(seriesData => {
                        console.log(seriesData);
                        const searchedSeries = seriesData.results.map(element => (
                            {
                                id: element.id,
                                title: element.name,
                                original_title: element.original_name,
                                original_language: element.original_language,
                                vote_average: element.vote_average,
                                poster_path: element.poster_path,
                                overview: element.overview,
                                type: 'series'
                            }
                        ))

                        const seriesMovies = [...searchedSeries, ...searchedMovie]
                        setMovies(seriesMovies)

                    })
                    .catch(err => {
                        console.error('Error series', err);

                    })
            })
            .catch(err => {
                console.error('Error movies', err);

            })
    }

    return (
        <header>
            <nav
                className="navbar navbar-expand-sm bg-black">
                <div className="container">
                    <a className="logo" href="/">
                        BOOLFLIX
                    </a>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/chisiamo">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/posts">TV Series</a>
                            </li>
                        </ul>
                    </div>

                    <Search />

                </div>
            </nav>
        </header>
    )
}