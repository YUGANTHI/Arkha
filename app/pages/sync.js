import React, { Component } from 'react';
import { View, Image } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Styles from '../assets/styles'
import Colors from '../assets/colors';
import { Container, Content, Button, Text, Icon, InputGroup, Input } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import LoginService from './../service/loginService';
import AsyncStorage from '@react-native-community/async-storage';

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
        const SyncSchema = Yup.object().shape({
            device_mac: Yup.string()
                .required('Required').trim()
        });

        return (
            <Formik
                initialValues={{ device_mac: '' }}
                validationSchema={SyncSchema}
                onSubmit={values => {
                    this.setState({ spinner: true });
                    LoginService.sync(values)
                        .then(response => {
                            if (response.error_code === 1) {
                                this.setState({ spinner: false }, () => {
                                    alert(response.message)
                                });
                            } else {
                                AsyncStorage.setItem('token', JSON.stringify(response.data.token))
                                AsyncStorage.setItem('device_id', JSON.stringify(values.device_mac))
                                this.setState({ spinner: false }, () => {
                                    this.props.navigation.navigate('Dashboard');
                                });
                            }
                        }).catch(error => {
                            this.setState({ spinner: false }, () => {
                                alert(error)
                            });
                        });
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                    <Container style={Styles.container}>
                        <Content padder>
                            <View style={[Styles.paddingTop40, Styles.paddingBottom20, Styles.alignCenter]}>
                                <Image style={Styles.loginLogo} source={require('./../assets/images/logo.png')} />
                            </View>
                            <InputGroup style={errors.device_mac && touched.device_mac ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='Device Id *'
                                    value={values.device_mac}
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('device_mac')}
                                    onBlur={handleBlur('device_mac')}
                                />
                                {errors.device_mac && touched.device_mac ? <Text style={Styles.errorMessage}>{errors.device_mac}</Text> : null}
                            </InputGroup>
                            <View style={Styles.footer}>
                                <Button style={Styles.buttonBlack} onPress={handleSubmit}>
                                    <Text uppercase={false} style={Styles.textWhite}>
                                        Sync
                                    </Text>
                                    <Icon type='Feather' name='arrow-right' style={[Styles.textWhite]} />
                                </Button>
                            </View>
                        </Content>

                        <Spinner
                            visible={this.state.spinner}
                        />
                    </Container>
                )}
            </Formik>
        );
    }
}

export default loginPage;
