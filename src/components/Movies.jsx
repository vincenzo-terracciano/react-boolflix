import { useGlobalContext } from "../contexts/GlobalContext"

export default function Movies() {

    const { movies } = useGlobalContext()

    function flag(language) {
        if (!language) return null;

        if (language === 'en') {
            language = 'gb'
        } else if (language === 'ja') {
            language = 'jp'
        } else if (language === 'zh') {
            language = 'ch'
        } else if (language === 'it') {
            language = 'it'
        } else if (language === 'es') {
            language = 'es'
        } else {
            return null
        }



        const flagUrl = `https://flagpedia.net/data/flags/h80/${language}.png`

        return flagUrl
    }

    return (
        <>
            <div className="container mt-5">
                <div className="movies_list">
                    <ul>
                        {
                            movies.map(movie => (
                                <li key={`Movie - ${movie.id}`}>
                                    <h6>Title: {movie.title}</h6>
                                    <h6>Original Title: {movie.original_title}</h6>
                                    <div className="flag">
                                        <strong>Language: </strong>

                                        {flag(movie.original_language) ? (
                                            <img src={flag(movie.original_language)} alt={movie.original_language} />
                                        ) : (
                                            <span>{movie.original_language.toUpperCase()}</span>
                                        )}

                                    </div>

                                    <h6>Vote: {movie.vote_average}</h6>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>

    )
}