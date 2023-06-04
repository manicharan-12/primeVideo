// Write your code here
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieItem} = props
  const {id} = movieItem

  return (
    <div className="slider-container">
      <MovieItem key={id} items={movieItem} />
    </div>
  )
}

export default MoviesSlider
