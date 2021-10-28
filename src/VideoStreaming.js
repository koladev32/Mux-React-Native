import React from 'react';
import {View} from 'react-native';

function VideoStreaming({route, navigation}) {
  const {videoId} = route.params;
  console.log(videoId)
  return (
    <View style={{
      backgroundColor: 'red'
    }}>

    </View>
  )
}

export default VideoStreaming;
