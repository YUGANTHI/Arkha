import request from './interface'
import AsyncStorage from '@react-native-community/async-storage';
// import env from '../../config/environment/env'

function login(logininfo) {
    console.log("loggggginnn", logininfo)
    return request({
        url: '/login',
        method: 'POST',
        data: {
            mobile: logininfo.username,
            password: logininfo.password,
            // scope: "*",
            // client_id: "1",
            // client_secret: env.CLIENT_SECRET,
            // grant_type: "password"
        }
    });
}

function resetPassword(resetpassinfo, email, token) {
    return request({
        url: '/api/v1/auth/password/reset',
        method: 'POST',
        data: {
            data: {
                token: token,
                email: email,
                password: resetpassinfo.password,
                password_confirmation: resetpassinfo.password_confirmation,

            }
        }
    });
}

function forgotPassword(forgetpassinfo) {
    return request({
        url: '/api/v1/auth/password/forgot/mobile',
        method: 'POST',
        data: {
            data: {
                email: forgetpassinfo.email,
            }
        }
    });
}

function register(registerInfo) {
    return request({
        url: '/api/v1/auth/register',
        method: 'POST',
        data: {
            email: registerInfo.email,
            first_name: registerInfo.first_name,
            last_name: registerInfo.last_name,
            password: registerInfo.password,
            password_confirmation: registerInfo.password_confirmation,
            mobile_phone: registerInfo.mobile_phone,
            profile_image_path: registerInfo.profile_image_path,
            invitation: registerInfo.invitationId
        }
    });
}


function logout() {
    AsyncStorage.clear();
    return request({
        url: '/api/v1/auth/logout',
        method: 'GET'
    }, true);
}

const LoginService = {
    login,
    // register,
    // logout,
    // forgotPassword,
    // resetPassword
}

export default LoginService;