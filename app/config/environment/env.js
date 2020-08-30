var _Environments = {
    development:  {
        APP_URL: 'https://www.go2alto.com' 
    },
    production:  {
        APP_URL: 'https://www.go2alto.com'
    }
}

function getEnvironment() {
   var env ='development';
    return _Environments[env]
}

var Environment = getEnvironment()
module.exports = Environment