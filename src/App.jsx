import { MoviesProvider } from "./contexts/GlobalContext"
import Search from "./components/Search"
import Movies from "./components/Movies"

function App() {


  return (
    <>
      <MoviesProvider>
        <Search />
        <Movies />
      </MoviesProvider>
    </>
  )
}

export default App
