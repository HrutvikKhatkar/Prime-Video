import MovieSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = props => {
  const {moviesList} = props

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movie-container">
        <h1>Action Movies</h1>
        <MovieSlider moviesList={moviesList} movieType={'ACTION'} />
        <h1>Comedy Movies</h1>
        <MovieSlider moviesList={moviesList} movieType={'COMEDY'} />
      </div>
    </div>
  )
}

export default ReactSlick
