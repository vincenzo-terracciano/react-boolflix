import { MoviesProvider } from "./contexts/GlobalContext"
import Header from "./components/Header"
import Movies from "./components/Movies"

function App() {


  return (
    <>
      <MoviesProvider>
        <Header />
        <Movies />
      </MoviesProvider>
    </>
  )
}

export default App
