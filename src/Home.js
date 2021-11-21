import React, {useState} from 'react';
import Layout from './Layout';
import {Input, Text, Button} from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  fetcher,
  getFormattedDate,
  imageTypeSize,
  muxImageBaseUrl,
  muxServerUrl,
  notify,
} from './config';
import useSWR from 'swr';
import axios from 'axios';

const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
  const [videoURL, setVideoURL] = useState('');

  const navigateToStreamingScreen = (videoId: string) => {
    navigation.navigate('VideoStreaming', {
      videoId: videoId,
    });
  };

  const assets = useSWR(`${muxServerUrl}/assets`, fetcher);

  const assetsData = assets.data || [];

  const handleVideoLinkSubmit = videoUrl => {
    axios
      .post(`${muxServerUrl}/assets`, {url: videoUrl})
      .then(res => {
        notify.success('Video added.');
      })
      .catch(error => notify.error('An error has occurred'));
  };

  return (
    <Layout>
      <View
        style={{
          paddingHorizontal: '2%',
        }}>
        <Text
          style={{
            paddingHorizontal: '2%',
          }}
          h3>
          Upload
        </Text>
        <Input
          label={'Video URL'}
          containerStyle={{
            maxWidth: '100%',
          }}
          placeholder={'https://video.mp4'}
          onChangeText={setVideoURL}
        />
        <Button
          title="Send"
          buttonStyle={{backgroundColor: '#5000ca'}}
          onPress={() => handleVideoLinkSubmit(videoURL)}
        />
      </View>

      <ScrollView style={{margin: '3%'}}>
        {assetsData.map((asset, index) => (
          <TouchableOpacity
            style={{
              height: windowHeight * 0.25,
              marginVertical: '1%',
            }}
            onPress={() => navigateToStreamingScreen(asset.id)}>
            <Text
              style={{
                marginVertical: '2%',
                textAlign: 'center',
                backgroundColor: 'gray',
                color: 'white',
              }}>
              id: {asset.id}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: '60%',
              }}>
              <Image
                style={{
                  height: 150,
                  width: 150,
                }}
                source={{
                  uri: `${muxImageBaseUrl}/${asset?.playback_id}/${imageTypeSize}`,
                }}
              />
              <View
                style={{
                  width: '50%',
                  height: windowHeight * 0.2,
                  padding: '2%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    Duration:
                  </Text>
                  <Text
                    style={{
                      paddingBottom: '1%',
                    }}>
                    {' '}
                    {asset.duration} seconds
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    Status:
                  </Text>
                  <Text
                    style={{
                      paddingBottom: '1%',
                    }}>
                    {' '}
                    {asset.status}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    Created at:
                  </Text>
                  <Text
                    style={{
                      paddingBottom: '1%',
                    }}>
                    {' '}
                    {getFormattedDate(parseInt(asset.created_at))}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Layout>
  );
}

export default HomeScreen;
