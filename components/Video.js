import React from 'react'

import YoutubePlayer from 'react-native-youtube-iframe';
//import { VLCPlayer } from 'react-native-vlc-media-player';

function Video({videoId}) {
    return (
        <YoutubePlayer
          videoId={videoId}
          height={250}
        />
        // <VLCPlayer
        //   source={{uri:"https://www.youtube.com/watch?v=C9mZynlem1w"}}
        // />
    )
}

export default Video
