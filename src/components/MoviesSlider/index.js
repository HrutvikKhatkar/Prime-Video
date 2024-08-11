// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList, movieType} = props
  console.log(movieType)
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(each => {
          if (each.categoryId === movieType)
            return <MovieItem eachMovie={each} key={each.id} />
        })}
      </Slider>
    </div>
  )
}

export default MovieSlider
