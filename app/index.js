import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Sync from './pages/sync';
import Dashboard from './pages/dashboard';
import Channels from './pages/channels';

class InitialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.navigate('Sync');
  }

  render() {
    return (
      <View>
        <Text> InitialPage </Text>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  InitialPage: InitialPage,
  Sync: Sync,
  Dashboard: Dashboard,
  Channels: Channels
},
  {
    initialRouteName: 'Sync',
    headerMode: 'none',
  }
);



export default createAppContainer(Navigator);