import styled from 'styled-components'

export const PrimeVideoContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
`

export const PrimeImage = styled.img`
  width: 100%;
`
export const MoviesContainer = styled.div`
  padding: 32px;
`
export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 32p;
`

export const LargeDeviceContainer = styled.div`
  @media (min-width: 992px) {
    display: block;
  }
  @media (max-width: 991px) {
    display: none;
  }
`
export const SmallDeviceContainer = styled.div`
  @media screen and (max-width: 991px) {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
  }
  @media screen and (min-width: 991px) {
    display: none;
  }
`
export const SmallDeviceImage = styled.img`
  width: 100%;
`
export const FailureHeading = styled.p`
  color: #ffffff;
  padding: 24px;
  text-align: center;
`
