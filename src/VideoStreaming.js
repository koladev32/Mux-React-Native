import React from 'react';
import Video from 'react-native-video';
import {
  fetcher,
  getFormattedDate,
  muxServerUrl,
  muxStreamBaseUrl,
  videoExtension,
} from './config';
import useSWR from 'swr';
import {View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import Layout from './Layout';

export const VideoStreaming = ({route, navigation}) => {
  const {videoId} = route.params;

  const asset = useSWR(`${muxServerUrl}/assets/${videoId}`, fetcher);
  const assetData = asset.data;

  return (
    <Layout>
      {assetData ? (
        <>
          <Video
            source={{
              uri: `${muxStreamBaseUrl}/${assetData.playback_id}.${videoExtension}`,
            }}
            paused={false}
            style={{
              height: '40%',
              marginBottom: '2%',
            }}
            repeat={true}
            resizeMode="cover"
            onBuffer={() => {console.log('onBuffer');}}
          />
          <View
            style={{
              paddingHorizontal: '4%',
            }}>
            <View>
              <Text h4>Asset ID</Text>
              <Text>{assetData.id}</Text>
            </View>

            <Divider
              width={1}
              style={{
                marginVertical: '5%',
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: '4%',
            }}>
            <View>
              <Text h4>Created at</Text>
              <Text>{getFormattedDate(parseInt(assetData.created_at))}</Text>
            </View>

            <Divider
              width={1}
              style={{
                marginVertical: '5%',
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: '4%',
            }}>
            <View>
              <Text h4>Duration</Text>
              <Text>{assetData.duration}</Text>
            </View>

            <Divider
              width={1}
              style={{
                marginVertical: '5%',
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: '4%',
            }}>
            <View>
              <Text h4>Max Resolution</Text>
              <Text>{assetData.max_stored_resolution}</Text>
            </View>

            <Divider
              width={1}
              style={{
                marginVertical: '5%',
              }}
            />
          </View>
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </Layout>
  );
};
