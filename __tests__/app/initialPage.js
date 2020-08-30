import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/loginPage';
import ForgotPassword from './pages/forgotPassword';
import SignUp from './pages/signup';
import Home from './pages/home';

class InitialPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log("Hi All")
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        {/* <Text> InitialPage </Text> */}
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  InitialPage: InitialPage,
  Login: Login,
  ForgotPassword: ForgotPassword,
  SignUp: SignUp,
  Home: Home
},
  {
    initialRouteName: 'InitialPage',
    headerMode: 'none',
  }
);



export default createAppContainer(Navigator);