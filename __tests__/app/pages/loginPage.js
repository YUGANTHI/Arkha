import React, { Component } from 'react';
import { View, Image } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Styles from '../assets/styles';
import Colors from '../assets/colors';
import { Container, Content, Button, Text, Icon, InputGroup, Input } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from '../components/Header.component';
import Right from '../components/Header.right.component';
import LoginService from './../api/loginService'

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      icEye: 'eye-off',
      showPassword: true,
    };
  }

  changePwdType = () => {
    let newState;
    if (this.state.showPassword) {
      newState = {
        icEye: 'eye',
        showPassword: false
      }
    } else {
      newState = {
        icEye: 'eye-off',
        showPassword: true
      }
    }
    this.setState(newState)
  };

  componentDidMount() {
  }


  render() {
    const LoginSchema = Yup.object().shape({
      username: Yup.string()
        .required('Required').trim(),
      password: Yup.string()
        .required('Required').trim(),
    });

    const login = (loginInfo) => {
      // console.log(loginInfo, "loginInfologinInfologinInfologinInfologinInfo")
      // this.setState({ spinner: true })
      // LoginService.login(loginInfo)
      //   .then(response => {

          // const token = response.token_type + " " + response.access_token;
          // console.log(token)
          // AsyncStorage.setItem('auth_token', token)
          // AsyncStorage.setItem('status', 'logged_in')
          // AsyncStorage.setItem('pushNotification', "true");
          // UserProfileService.getPersonId()
          //   .then(response => {
          //     AsyncStorage.setItem('setStreamData', 'true')
          //     this.setState({ spinner: false });
          //     AsyncStorage.setItem('userID', JSON.stringify(response.data.id))
          //     AsyncStorage.setItem('chat_id', JSON.stringify(response.data.chat_id))
          //     AsyncStorage.setItem('userEmail', response.data.email);
          //     AsyncStorage.setItem('userName', response.data.name)
          //     AsyncStorage.getItem('chat_id').then((chat_id) => {
          //       if (chat_id == null || chat_id == "null") {
          //         AsyncStorage.getItem('userID').then((userID) => {
          //           ChatService.chatIdUpate(userID).then(res => {
          //             this.props.navigation.navigate('Dashboard')
          //           }).catch(error => {
          //             this.props.navigation.navigate('Dashboard')
          //           });
          //         });
          //       } else {
                  this.props.navigation.navigate('Home')
          //       }
          //     });

          //     })
          //     .catch(error => {
          //       this.setState({ spinner: false });
          //       setTimeout(function () {
          //         alert(error.data.message)
          //       }, 300)
          //     })
        // })
        // .catch(error => {
        //   this.setState({ spinner: false });
        //   setTimeout(function () {
        //     alert(error.data.message)
        //   }, 300)
        // });
    }

    return (
      <Formik
        initialValues={{ username: '87878787', password: '909' }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          // this.props.navigation.navigate('Home')
          this.setState({ spinner: false });
          login(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
          <Container style={Styles.container}>
            {/* <Header>
              <Right />
            </Header> */}
            <Content padder>
              <View style={[Styles.paddingTop40, Styles.paddingBottom20, { alignItems: 'center', }]}>
                <Image style={Styles.loginLogo} source={require('./../assets/images/logo.png')} />
              </View>
              <InputGroup style={errors.username && touched.username ? Styles.inputError : Styles.input}>
                <Input
                  placeholder='Mobile Number *'
                  value={values.username}
                  keyboardType='email-address'
                  placeholderTextColor={Colors.placeholderGrey}
                  style={Styles.textInputStyle}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {errors.username && touched.username ? <Text style={Styles.errorMessage}>{errors.username}</Text> : null}
              </InputGroup>
              <InputGroup style={errors.password && touched.password ? Styles.inputError : Styles.input}>
                <Input
                  placeholder='Password *'
                  placeholderTextColor={Colors.placeholderGrey}
                  secureTextEntry={this.state.showPassword}
                  style={Styles.textInputStyle}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password ? <Text style={Styles.errorMessage}>{errors.password}</Text> : null}
                <Icon type='Feather' name={this.state.icEye} onPress={this.changePwdType} style={Styles.passwordEye} />
              </InputGroup>

              <Button style={Styles.buttonBlack} onPress={handleSubmit}>
                <Text uppercase={false} style={Styles.textWhite}>
                  Login
                </Text>
                <Icon name='arrow-forward' style={Styles.textWhite} />
              </Button>

              <Button
                transparent
                style={[Styles.resetPasswordButton, Styles.marginTop10]}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text uppercase={false} style={Styles.resetPassword}>
                  Don't have an account? Sign up
                </Text>
              </Button>

              <Button
                transparent
                style={Styles.resetPasswordButton}
                // onPress={() => this.props.navigation.navigate('ForgotPassword')}
                onPress={handleSubmit}>
                <Text uppercase={false} style={Styles.resetPassword}>
                  Forgot your password? Tap to reset
                </Text>
              </Button>
            </Content>

            <Spinner
              visible={this.state.spinner}
              textStyle={Styles.loader}
            />
            {/* <View style={Styles.footer}>
              <Button style={Styles.buttonWhite}
                onPress={() => this.props.navigation.replace('Signup')}>
                <Text uppercase={false} style={Styles.textBlack}>
                  Don't have an account? Sign up
                </Text>
                <Icon name='arrow-forward' style={[Styles.iconForward, Styles.textBlack]} />

              </Button>

            </View> */}
          </Container>
        )}
      </Formik>
    );
  }
}

export default loginPage;
