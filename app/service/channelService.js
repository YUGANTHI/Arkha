import request from './interface';
import AsyncStorage from '@react-native-community/async-storage';

async function channelList() {
    var deviceId = await AsyncStorage.getItem('device_id');
    return request({
        url: '/api/app-profile/' + JSON.parse(deviceId) + '/Test Account',
        method: 'GET'
    }, true);
}

const channelService = {
    channelList
}

export default channelService;