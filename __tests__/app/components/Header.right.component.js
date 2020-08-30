import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Right extends Component {
    render() {
        return (
            <View style={styles.right}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingBottom: 5,
    }
});