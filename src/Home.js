import React from 'react';
import Layout from './Layout';
import {Button, Input, Text} from 'react-native-elements';
import {TouchableOpacity, View} from 'react-native';

function HomeScreen() {
  return (
    <Layout>
      <View
        style={{
          paddingHorizontal: '2%',
          flex: 1,
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
      <View
        style={{
          padding: '2%',
          backgroundColor: 'blue',
          flex: 2,
        }}>
        <View style={{}}>
          <Text
            style={{
              marginVertical: '2%',
              textAlign: 'center',
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
                backgroundColor: 'red',
                width: '50%',
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              marginVertical: '2%',
              textAlign: 'center',
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
                backgroundColor: 'black',
                width: '50%',
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: '50%',
              }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
}

export default HomeScreen;
