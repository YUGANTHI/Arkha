import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { Content } from 'native-base';
import React, { Component } from 'react';
// import env from '../config/environment/env'

/**
 * Request Wrapper with default success/error actions
 */

const request = async function (options, isHeader, isFile) {
    // console.log(options)
    let spinner = true;
    let authHeader = null;

    let file = "application/json";
    if (isHeader) {
        authHeader = await AsyncStorage.getItem("auth_token"); /// Add header
    }

    if (isFile) {
        file = "application/x-www-form-urlencoded"; /// Add header
    }

    const client = axios.create({
        baseURL: 'http://52.233.243.205:8001/',
        headers: {
            'Authorization': authHeader,
            "Content-Type": file
        }
    });

    const onSuccess = function (response) {
        return response.data;
    }

    const onError = function (error) {
        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.debug('Status:', error.response.status);
            console.debug('Data:', error.response.data);
            console.debug('Headers:', error.response.headers);

        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.debug('Error Message:', error.message);
        }

        return Promise.reject(error.response || { data: { errors: { detail: error.message }, message: error.message } });
    }
    //console.log(JSON.stringify(options))
    return client(options)
        .then(onSuccess)
        .catch(onError);

}

export default request;