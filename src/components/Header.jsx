import Search from "./Search"

export default function Header() {

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
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV Series</a>
                            </li>
                        </ul>
                    </div>

                    <Search />

                </div>
            </nav>
        </header>
    )
}