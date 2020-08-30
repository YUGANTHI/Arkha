import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Button, Icon, InputGroup, Input, List, ListItem, Left, Body, Card } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import ChannelService from './../service/channelService';
import Styles from '../assets/styles'
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';

class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      channels: [],
      id: this.props.navigation.getParam('channel_id'),
      url: null
    };
    this.videoRefs = [];
  }

  componentDidMount() {
    this.setState({ spinner: true })
    ChannelService.channelList()
      .then(response => {
        if (response.error_code === 1) {
          this.setState({ spinner: false }, () => {
            alert(response.message)
          });
        } else {
          this.setState({
            spinner: false,
            channels: response.data.mode.Multichannel[this.state.id].channels
          });
        }
      }).catch(error => {
        this.setState({ spinner: false }, () => {
          alert(error)
        });
      });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#092531', paddingTop: 50 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 22, color: 'white' }}>Select a Channel to view</Text>
        </View>
        <FlatList
          style={{ marginLeft: 10, flex: 0.25 }}
          horizontal={true}
          data={this.state.channels}
          renderItem={({ item, index }) => {
            {
              return (
                <Card transparent style={Styles.channel}>
                  <List>
                    <ListItem noBorder onPress={() => {
                      console.log(item.url)
                      this.setState({ url: item.url })
                    }}>
                      <Image
                        resizeMode='contain'
                        style={{
                          height: 120,
                          width: '100%',
                          borderColor: 'blue',
                          borderWidth: 1,
                        }}
                        source={{ uri: item.image }} />
                    </ListItem>
                    <Text style={{ fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>{item.name}</Text>
                  </List>
                </Card>
              )
            }
          }}
          keyExtractor={item => String(item._id)}
          onEndReachedThreshold={0.5}
        />
        <Spinner
          visible={this.state.spinner}
          textStyle={{
            color: 'white'
          }}
        />
        {
          this.state.url !== null ?
            <View style={{ flex: 1 }}>
              <WebView
                allowsFullscreenVideo={true}
                style={{ marginTop: (Platform.OS == 'ios') ? 20 : 0, }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: this.state.url }}
              />
            </View>
            : null
        }
      </Container>

    );
  }
}

export default Channels;
