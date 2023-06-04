// Write your code here
import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  PrimeVideoContainer,
  PrimeImage,
  MoviesContainer,
  MainHeading,
} from './styledComponent'

const PrimeVideo = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const renderActionCard = item => {
    if (item.categoryId === 'ACTION') {
      return <MoviesSlider key={item.id} movieItem={item} />
    }
    return null
  }

  const renderComedyCard = item => {
    if (item.categoryId === 'COMEDY') {
      return <MoviesSlider key={item.id} movieItem={item} />
    }
    return null
  }
  return (
    <PrimeVideoContainer>
      <PrimeImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MainHeading>Action Movies</MainHeading>
        <Slider {...settings}>
          {moviesList.map(eachMovie => renderActionCard(eachMovie))}
        </Slider>
        <MainHeading>Comedy Movies</MainHeading>
        <Slider {...settings}>
          {moviesList.map(eachMovie => renderComedyCard(eachMovie))}
        </Slider>
      </MoviesContainer>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
