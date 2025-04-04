import { useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function Search() {

    const { setMovies } = useGlobalContext()
    const [searchText, setSearchText] = useState("")

    function handleChange() {
        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
        const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`;

        fetch(base_movies_api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
            })
            .catch(err => {
                console.error('ERROR', err);

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