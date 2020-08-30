import Colors from './colors'

const styles = {

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    alignCenter: {
        alignItems: 'center'
    },

    loginLogo: {
        height: 120,
        width: '95%',
        alignItems: 'center',
    },
    passwordEye: {
        color: '#979797',
        fontSize: 20,
        paddingRight: 10
    },
    noItem: {
        flex: 1,
        alignItems: 'center',
        margin: 20, height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
    },

    channelList: {
        flex: 0.5,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    channel: {
        height: 200,
        width: 200,
        margin: 40,
    },

    header:
    {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20
    },

    /*Input Elements */
    input: {
        // backgroundColor: Colors.lightGrey,
        borderColor: Colors.app,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 3,
        height: 60,
    },

    textInputStyle: {
        fontSize: 15,
    },

    textWhite: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: 'bold'
    },

    /*ErrorMessage */
    inputError: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.red,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 50,
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 3,
        height: 60,
    },

    errorMessage: {
        fontSize: 12,
        color: Colors.red,
        marginRight: 10
    },

    /* Padding */
    paddingTop40: {
        paddingTop: 40
    },
    paddingBottom20: {
        paddingBottom: 20
    },
    /*Buttons */
    buttonBlack: {
        backgroundColor: Colors.app,
        borderRadius: 50,
        marginTop: 20,
        justifyContent: 'center',
        height: 54,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },

    /*Image View*/
    paymentAvatarUnselected: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
};

export default styles;