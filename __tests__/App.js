import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InitialPage from './app/initialPage';
import { NetworkProvider } from 'react-native-offline';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NetworkProvider>
        <InitialPage />
      </NetworkProvider>
    );
  }
}

export default App;
