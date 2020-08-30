import request from './interface';

function sync(data) {
    return request({
        url: '/api/device/sync',
        method: 'POST',
        data: data
    });
}

const LoginService = {
    sync
}

export default LoginService;