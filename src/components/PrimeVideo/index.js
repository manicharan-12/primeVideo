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
  LargeDeviceContainer,
  SmallDeviceContainer,
  SmallDeviceImage,
  FailureHeading,
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
      <LargeDeviceContainer>
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
      </LargeDeviceContainer>
      <SmallDeviceContainer>
        <SmallDeviceImage
          src="https://res.cloudinary.com/djovsq3xl/image/upload/v1685868916/flat-construction-template_23-2147739035-removebg-preview_eomg4m.png"
          alt="failure-view"
        />
        <FailureHeading>
          The page for the devices &lt;992px width is UNDER CONSTRUCTION. Please
          use the devices having width &gt;992px.
        </FailureHeading>
      </SmallDeviceContainer>
    </PrimeVideoContainer>
  )
}

export default PrimeVideo
