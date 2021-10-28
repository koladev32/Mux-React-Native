import React, {useState, useEffect} from 'react';
import {MuxVideo} from '@tinyhood/react-native-mux-video';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function VideoStreaming() {
  const [showVideo, setShowVideo] = useState(false);
  const ref = React.useRef(null);
  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <MuxVideo
              style={styles.video}
              source={{
                uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
              }}
              controls
              muted
              ref={ref}
              options={{
                debug: true,
                data: {
                  env_key: process.env.REACT_APP_MUX_SECRET,
                  player_name: 'Test player',
                  video_id: 'video-id-1',
                  video_title: 'Big buck bunny',
                  player_is_paused: undefined,
                },
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  video: {
    width: 400,
    height: 500,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
