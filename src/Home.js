import React from 'react';
import Layout from './Layout';
import {Button, Input, Text} from 'react-native-elements';
import {TouchableOpacity, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigate}) {

  const navigateToStreamingScreen = (videoId: string) => {

  }
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
        />
        <Button title="Send" buttonStyle={{backgroundColor: '#5000ca'}} />
      </View>

      <View style={{height: windowHeight * 0.6, marginVertical: '3%'}}>
        <TouchableOpacity
          style={{
            height: '45%',
          }}>
          <Text
            style={{
              marginVertical: '2%',
              textAlign: 'center',
              backgroundColor: 'gray',
              color: 'white'
            }}>
            ID: ldjfouf38ufwoifjof98ewhf98h
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: '60%',
            }}>
            <View
              style={{
                backgroundColor: 'yellow',
                width: '50%',
              }}
            />
            <View
              style={{
                width: '50%',
              }}
            >
              <Text>
                Duration
              </Text>
              <Text>
                Status
              </Text>
              <Text>
                Created at
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '45%',
          }}>
          <Text
            style={{
              marginVertical: '2%',
              textAlign: 'center',
              backgroundColor: 'gray',
              color: 'white'
            }}>
            https://quelskljlkdsajflkasjflksajflkasjdflkasjfd
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: '60%',
            }}>
            <View
              style={{
                backgroundColor: 'yellow',
                width: '50%',
              }}
            />
            <View
              style={{
                width: '50%',
              }}
            >
              <Text>
                Duration
              </Text>
              <Text>
                Status
              </Text>
              <Text>
                Created at
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

export default HomeScreen;
