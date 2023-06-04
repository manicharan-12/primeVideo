// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import {PopUpModalDecor, ButtonAlign} from './styledComponent'

const MovieItem = props => {
  const {items} = props
  const {thumbnailUrl, videoUrl} = items
  return (
    <div>
      <Popup trigger={<img src={thumbnailUrl} alt="thumbnail" />} modal nested>
        {close => (
          <PopUpModalDecor className="modal">
            <ButtonAlign
              className="close "
              onClick={close}
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose />
            </ButtonAlign>
            <ReactPlayer url={videoUrl} controls />
          </PopUpModalDecor>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
