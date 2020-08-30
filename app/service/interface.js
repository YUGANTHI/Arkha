import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import env from '../config/environment/env'

/**
 * Request Wrapper with default success/error actions
 */

const request = async function (options, isHeader) {
    let authHeader = null;

    let file = "application/json";
    if (isHeader) {
        authHeader = await AsyncStorage.getItem("token"); /// Add header
    }

    const client = axios.create({
        baseURL: env.APP_URL,
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(authHeader),
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
        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);

}

export default request;