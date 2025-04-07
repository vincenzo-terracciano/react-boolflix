import { MoviesProvider } from "./contexts/GlobalContext"
import Header from "./components/Header"
import Movies from "./components/Movies"
import Jumbotron from "./components/Jumbotron"

function App() {


  return (
    <>
      <MoviesProvider>
        <Header />
        <Jumbotron />
        <Movies />
      </MoviesProvider>
    </>
  )
}

export default App
