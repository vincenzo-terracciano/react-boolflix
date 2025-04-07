import { useGlobalContext } from "../contexts/GlobalContext"

export default function Jumbotron() {

    const { movies } = useGlobalContext()

    if (movies.length > 0) return null;

    return (
        <>
            <div class="netflix p-5 mb-4 rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display fw-bold">Welcome to Boolflix!</h1>
                    <p class="col-md-8 text-white fs-5">
                        No matter what you like or what mood you're in, Netflix has the shows, movies and you love. It's the entertainment no one expects and no one can stop talking about. We entertain over half a billion people in more than 190 countries and 50 languages, programming content for all tastes and cultures.
                    </p>
                    <img className="d-block mx-auto" src="../Netflix_Symbol_PMS.png" alt="logo netflix" />
                </div>
            </div>

        </>
    )
}