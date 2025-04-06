import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function Search() {

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
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        aria-describedby="helpTitle"
                        placeholder="Search the movie here"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <small id="helpTitle" className="form-text text-muted">Type movie's title</small>
                </div>

                <button onClick={handleChange} className="btn btn-primary">Search</button>
            </div>


        </header>
    )
}