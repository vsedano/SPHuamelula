import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import videoSPH from '../../media/introSPH.mp4'

class VideoMain extends Component {
    render() {
        return (
            <ReactPlayer url={videoSPH} id="index" width='100%' height='100%' playing muted controls/>
        )
    }
}

export default VideoMain