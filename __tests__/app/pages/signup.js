import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Container, Content, Button, Text, Icon, InputGroup, Input, Tabs, Tab, ListItem, Left, Right, Radio, Body } from 'native-base';
import Styles from '../assets/styles';
import Colors from '../assets/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import { Row, Col, Grid } from "react-native-easy-grid";
import Header from '../components/Header.component';
import RightHeader from '../components/Header.right.component';
class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: true
        };
    }

    render() {
        const RegisterSchema = Yup.object().shape({
            // email: Yup.string()
            //     .email('Invalid email')
            //     .required('Required').trim(),
            first_name: Yup.string()
                .required('Required').trim(),
            last_name: Yup.string()
                .required('Required').trim(),
            farming: Yup.string()
                .required('Required').trim(),
            location: Yup.string()
                .required('Required').trim(),
            password: Yup.string().min(6, 'Should contain minimun 6 characters')
                .required('Required').trim(),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords does not match")
                .required('Required').trim(),
            mobile_phone: Yup.string()
                .required('Required')
                .matches(/^[0-9]{10}$/, 'Invalid phone number')
        });
        return (
            <Formik
                initialValues={{ first_name: '', last_name: '', farming: '', location: '', password: '', password_confirmation: '', mobile_phone: '', profile_image_path: '' }}
                // validationSchema={RegisterSchema}
                validateOnBlur={true}
                onSubmit={values => {
                    this.props.navigation.navigate('Login')
                    // this.setState({ spinner: true });
                    // register(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                    <Container style={Styles.container}>
                        <Header>
                            <RightHeader />
                        </Header>
                        <Content padder>
                            <InputGroup style={errors.first_name && touched.first_name ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='First Name *'
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('first_name')}
                                    onBlur={handleBlur('first_name')}
                                    maxLength={25}
                                />
                                {errors.first_name && touched.first_name ? <Text style={Styles.errorMessage}>{errors.first_name}</Text> : null}
                            </InputGroup>
                            <InputGroup style={errors.last_name && touched.last_name ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='Last Name *'
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('last_name')}
                                    onBlur={handleBlur('last_name')}
                                    maxLength={25}
                                />
                                {errors.last_name && touched.last_name ? <Text style={Styles.errorMessage}>{errors.last_name}</Text> : null}
                            </InputGroup>
                            {/* <InputGroup style={errors.email && touched.email ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='Email *'
                                    value={values.email}
                                    keyboardType='email-address'
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                                {errors.email && touched.email ? <Text style={Styles.errorMessage}>{errors.email}</Text> : null}
                            </InputGroup> */}
                            <InputGroup style={errors.mobile_phone && touched.mobile_phone ? Styles.inputError : [Styles.input, Styles.mb15]}>
                                <Input
                                    placeholder='Mobile Number * eg. 0123456789'
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('mobile_phone')}
                                    keyboardType='numeric'
                                    onBlur={handleBlur('mobile_phone')}
                                    maxLength={10}
                                />
                                {errors.mobile_phone && touched.mobile_phone ? <Text style={Styles.errorMessage}>{errors.mobile_phone}</Text> : null}
                            </InputGroup>
                            <InputGroup style={errors.password && touched.password ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='Password *'
                                    secureTextEntry={this.state.showPassword}
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    maxLength={25}
                                />
                                {errors.password && touched.password ? <Text style={Styles.errorMessage}>{errors.password}</Text> : null}
                                <Icon type='Feather' name={this.state.icEye} onPress={this.changePwdType} style={Styles.passwordEye} />
                            </InputGroup>
                            <InputGroup style={errors.password_confirmation && touched.password_confirmation ? Styles.inputError : Styles.input}>
                                <Input
                                    placeholder='Confirm Password *'
                                    secureTextEntry={this.state.showConfirmPassword}
                                    placeholderTextColor={Colors.placeholderGrey}
                                    style={Styles.textInputStyle}
                                    onChangeText={handleChange('password_confirmation')}
                                    onBlur={handleBlur('password_confirmation')}
                                    maxLength={25}
                                />
                                {errors.password_confirmation && touched.password_confirmation ? <Text style={Styles.errorMessage}>{errors.password_confirmation}</Text> : null}
                                <Icon type='Feather' name={this.state.icConfirmEye} onPress={this.changeConfirmPwdType} style={Styles.passwordEye} />
                            </InputGroup>
                            <Grid>
                                <Row>
                                    <Col size={8}>
                                        <ListItem noBorder onPress={() => this.setState({
                                            user: !this.state.user
                                        })}>
                                            <Left>
                                                <Radio selectedColor={Colors.app} onPress={() => this.setState({
                                                    user: !this.state.user
                                                })} selected={this.state.user} />
                                                <Body>
                                                    <Text>User</Text>
                                                </Body>
                                            </Left>
                                        </ListItem>
                                    </Col>
                                    <Col size={8}>
                                        <ListItem noBorder onPress={() => this.setState({
                                            user: !this.state.user
                                        })}>
                                            <Left>
                                                <Radio selectedColor={Colors.app} onPress={() => this.setState({
                                                    user: !this.state.user
                                                })} selected={!this.state.user} />
                                                <Body>
                                                    <Text>Partner</Text>
                                                </Body>
                                            </Left>
                                        </ListItem>
                                    </Col>
                                </Row>
                            </Grid>
                            {
                                this.state.user ?
                                    <>
                                        <InputGroup style={errors.location && touched.location ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='Location *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('location')}
                                                onBlur={handleBlur('location')}
                                                maxLength={25}
                                            />
                                            {errors.location && touched.location ? <Text style={Styles.errorMessage}>{errors.location}</Text> : null}
                                        </InputGroup>
                                        <InputGroup style={errors.farming && touched.farming ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='Farming *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('farming')}
                                                onBlur={handleBlur('farming')}
                                                maxLength={25}
                                            />
                                            {errors.farming && touched.farming ? <Text style={Styles.errorMessage}>{errors.farming}</Text> : null}
                                        </InputGroup>
                                    </> :
                                    <>
                                        <InputGroup style={errors.gst && touched.gst ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='GST *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('gst')}
                                                onBlur={handleBlur('gst')}
                                                maxLength={25}
                                            />
                                            {errors.gst && touched.gst ? <Text style={Styles.errorMessage}>{errors.gst}</Text> : null}
                                        </InputGroup>
                                        <InputGroup style={errors.pan && touched.pan ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='PAN *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('pan')}
                                                onBlur={handleBlur('pan')}
                                                maxLength={25}
                                            />
                                            {errors.pan && touched.pan ? <Text style={Styles.errorMessage}>{errors.pan}</Text> : null}
                                        </InputGroup>
                                        <InputGroup style={errors.bank && touched.bank ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='Bank Details *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('bank')}
                                                onBlur={handleBlur('bank')}
                                                maxLength={25}
                                            />
                                            {errors.bank && touched.bank ? <Text style={Styles.errorMessage}>{errors.bank}</Text> : null}
                                        </InputGroup>
                                        <InputGroup style={errors.document && touched.document ? Styles.inputError : Styles.input}>
                                            <Input
                                                placeholder='Documents *'
                                                placeholderTextColor={Colors.placeholderGrey}
                                                style={Styles.textInputStyle}
                                                onChangeText={handleChange('document')}
                                                onBlur={handleBlur('document')}
                                                maxLength={25}
                                            />
                                            {errors.document && touched.document ? <Text style={Styles.errorMessage}>{errors.document}</Text> : null}
                                        </InputGroup>
                                    </>
                            }
                            <View style={Styles.footer}>
                                <Button style={Styles.buttonBlack}
                                    onPress={handleSubmit}>
                                    <Text uppercase={false} style={Styles.textWhite}>
                                        Create Account
                                </Text>
                                    <Icon name='arrow-forward' style={Styles.textWhite} />
                                </Button>
                                <Button
                                    transparent
                                    style={[Styles.resetPasswordButton, Styles.marginTop10]}
                                    onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text uppercase={false} style={Styles.resetPassword}>
                                        Already have an account? Login
                                    </Text>
                                </Button>
                            </View>
                        </Content>
                        <Spinner
                            visible={this.state.spinner}
                            textStyle={Styles.loader}
                        />

                    </Container>
                )
                }
            </Formik>
        );
    }
}

export default signup;
