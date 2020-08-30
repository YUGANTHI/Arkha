import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Thumbnail } from 'native-base';
import Colors from './../assets/colors';

// import Images from '../res/images';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.left}>
                    <Thumbnail square source={require('./../assets/images/logo.png')} style={{ height: 48, width: 37 }} />
                </View>
                <View style={{top:-15}}>
                    <Text style={{ color: Colors.app, fontSize: 18 }}>Aqua JIN.</Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        height: (Platform.OS === 'ios') ? 85 : 60,
        // for Android
        elevation: 2,
        // for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
    },
    left: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 18,
        ...Platform.select({
            ios: {
                flexDirection: 'row',
                paddingVertical: 5,
            },
            android: {
                alignSelf: 'center',
            },
        }),

    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    textStyles: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});