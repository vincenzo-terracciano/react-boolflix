import { useGlobalContext } from "../contexts/GlobalContext"

export default function Movies() {

    const { movies } = useGlobalContext()

    return (
        <>
            <div className="container mt-5">
                <div className="movies_list">
                    <ul>
                        {
                            movies.map(movie => (
                                <li key={`Movie - ${movie.id}`}>
                                    <h6>{movie.title}</h6>
                                    <h6>{movie.original_title}</h6>
                                    <h6>{movie.original_language}</h6>
                                    <h6>{movie.vote_average}</h6>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>

    )
}