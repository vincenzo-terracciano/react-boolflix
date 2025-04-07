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

    function Image(path) {
        const imageUrl = "https://image.tmdb.org/t/p/w342";
        return imageUrl + path
    }

    function Stars(vote) {
        const half = Math.ceil(vote / 2)
        const stars = []

        for (let i = 0; i < 5; i++) {
            stars.push(i < half)
        }
        console.log(stars);

        return stars
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="movies_list">
                        <div className="row">
                            {
                                movies.map(movie => (
                                    <div className="col-3 g-4" key={`Movie - ${movie.id}`}>
                                        <div className="card">
                                            <img className="card-img-top" src={Image(movie.poster_path)} alt={movie.title || movie.name} />
                                            <div className="card-overlay">
                                                <div className="card-body">
                                                    <h5>{movie.title || movie.name}</h5>
                                                    <p><strong>Original Title: </strong>{movie.original_title || movie.original_name}</p>
                                                    <div className="flag">
                                                        <strong>Language: </strong>

                                                        {flag(movie.original_language) ? (
                                                            <img src={flag(movie.original_language)} alt={movie.original_language} />
                                                        ) : (
                                                            <span>{movie.original_language.toUpperCase()}</span>
                                                        )}
                                                    </div>

                                                    <div className="reviews">
                                                        <p><strong>Vote: </strong>{movie.vote_average}</p>

                                                        <div className="stars">
                                                            {Stars(movie.vote_average).map((full, index) => (
                                                                <i
                                                                    key={index}
                                                                    className="fa fa-star"
                                                                    style={{ color: full ? "gold" : "lightgray" }}
                                                                ></i>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p><strong>Overview: </strong>{movie.overview ? movie.overview : 'Overview not available.'}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </main>

        </>

    )
}