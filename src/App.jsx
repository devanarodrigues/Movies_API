import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/Container/Container'
import Card from './components/Card/Card'
import MovieDetails from './components/MovieDetails/MovieDetails'
import ModalContext from './context/ModalContext'

function App() {
  const apiKey = "83272738fc8d7f79a797e84081421fd0"
  const baseURL = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${apiKey}`
  const imgURL = `https://image.tmdb.org/t/p/w500`
  const [movies, setMovies] = useState([])
  const [showin, setShowin] = useState(false)
  const [votos, setVotos] = useState()
  const [title, setTitle] = useState()
  const [backdrop, setBackdrop] = useState()
  const [overview, setOverview] = useState()

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const api = await fetch(baseURL)
    const data = await api.json()
    setMovies(data.results)
    console.log(movies)
    return
  }

  function modalDetails(votos, title, backdrop, overview) {
    setShowin(!showin)
    setVotos(votos)
    setTitle(title)
    setBackdrop(imgURL + backdrop)
    setOverview(overview)
  }


  return (
    <ModalContext.Provider value={{ showin, setShowin }}>
      <Container>
        {
          movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                img={imgURL + movie.poster_path}
                nome={movie.title}
                onclick={() => {
                  modalDetails(movie.vote_count, movie.title, movie.backdrop_path, movie.overview)
                }
                } />
            )
          })
        }

      </Container>
      {
        showin
          ?
          <MovieDetails fechar={() => setShowin(!showin)} votos={votos} title={title} backdrop={backdrop} overview={overview} />
          :
          ""
      }
    </ModalContext.Provider>
  )
}

export default App
