import * as React from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';
import { Container, Content, Button, Text, Icon, InputGroup, Input, Thumbnail, Item } from 'native-base';
import Header from '../components/Header.component';
import Right from '../components/Header.right.component';
import styles from './../assets/styles';
import Colors from './../assets/colors'
import * as Yup from 'yup';
import { Formik } from 'formik';
// import _ from 'lodash';


export default class ForgotPassword extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            forgetpwd: [],
            email: '',
        }
    }

    render() {
        const ForgetPasswordSchema = Yup.object().shape({
            email: Yup.string()
                .required('Required').trim()
        });


        return (
            <Formik
                initialValues={{ email: '', }}
                validationSchema={ForgetPasswordSchema}
                onSubmit={values => {
                    this.props.navigation.navigate('Login')
                    // this.setState({
                    //     spinner: !this.state.spinner,
                    //     email: values.email,
                    // });
                    // forgetPassword(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <Container style={styles.container}>
                        <Content padder>
                            <View>
                                <TouchableOpacity style={styles.closeButton}
                                    onPress={() => this.props.navigation.navigate('Login')}>
                                    <Icon type="Ionicons" name='ios-arrow-round-back' />
                                </TouchableOpacity>
                                <Text style={styles.textDark_sm}>
                                    Request Password Reset
                                </Text>
                            </View>

                            <Item style={errors.email && touched.email ? styles.inputError : styles.input}>
                                <Input
                                    placeholder='Mobile Number *'
                                    keyboardType='email-address'
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={styles.textInputStyle}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                                {errors.email && touched.email ? <Text style={styles.errorMessage}>{errors.email}</Text> : null}
                            </Item>
                        </Content>
                        <View style={styles.footer}>
                            <Button style={styles.buttonBlack}
                                onPress={handleSubmit}>
                                <Text uppercase={false} style={styles.textWhite} >
                                    Continue
                        </Text>
                                <Icon name='arrow-forward' style={styles.textWhite} />
                            </Button>
                        </View>
                    </Container>
                )}
            </Formik>
        );

    }

    static navigationOptions = {
        // headerLeft: (
        //     <Thumbnail source={require('../assets/images/logo.png')} />
        // ),
    };
}

