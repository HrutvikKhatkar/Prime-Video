// Write your code here
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {IoMdClose} from 'react-icons/io'

class MovieItem extends Component {
  render() {
    const {eachMovie} = this.props
    return (
      <div className="movie-item">
        <Popup
          modal
          trigger={
            <img
              src={eachMovie.thumbnailUrl}
              alt="thumbnail"
              className="thumbnail"
            />
          }
        >
          {close => (
            <div className="video-popup">
              <button
                type="button"
                className="trigger-button"
                onClick={close}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
              <ReactPlayer url={eachMovie.videoUrl} />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default MovieItem

// import {Component} from 'react'

// import ReactPlayer from 'react-player'

// import './index.css'

// const videoURL = 'https://youtu.be/YE7VzlLtp-4'

// class VideoPlayer extends Component {
//   state = {
//     isPlaying: false,
//   }

//   onClickPlay = () => {
//     this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
//   }

//   render() {
//     const {isPlaying} = this.state
//     const btnText = isPlaying ? 'Pause' : 'Play'

//     return (
//       <div className="video-container">
//         <h1 className="heading">Video Player</h1>
//         <div className="responsive-container">
//           <ReactPlayer url={videoURL} playing={isPlaying} />
//         </div>
//         <button type="button" className="button" onClick={this.onClickPlay}>
//           {btnText}
//         </button>
//       </div>
//     )
//   }
// }

// export default VideoPlayer

// const ReactPopUp = () => (
//  <div className="popup-container">
//    <Popup
//      modal
//      trigger={
//        <button type="button" className="trigger-button">
//          Trigger
//        </button>
//      }
//    >
//      {close => (
//        <>
//          <div>
//            <p>React is a popular and widely used programming language</p>
//          </div>
//          <button
//            type="button"
//            className="trigger-button"
//            onClick={() => close()}
//          >
//            Close
//          </button>
//        </>
//      )}
//    </Popup>
//  </div>
// )
// export default ReactPopUp
