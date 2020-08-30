import Colors from './colors'
import { Row } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = {
    /* Colors */
    footerActive: {
        color: Colors.black,
    },
    textBlack: {
        color: Colors.black,
        // fontFamily: 'Lato',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textActive: {
        color: Colors.black,
        fontWeight: 'bold'
    },
    textWhite: {
        color: Colors.white,
        // fontFamily: 'Lato',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textGrey: {
        color: Colors.textGrey,
    },
    boldFont: {
        fontWeight: 'bold',
    },
    usrName: {
        fontWeight: 'bold',
        paddingBottom: 5,
        // fontFamily: 'Lato',
        fontSize: 20
    },
    followingCount: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    folowingText: {
        fontSize: 10,
    },
    usrId: {
        fontSize: 15
    },
    bgWhite: {
        backgroundColor: Colors.white,
    },
    placeholderGrey: {
        color: Colors.placeholderGrey,
    },
    borderGrey: {
        borderColor: Colors.borderGrey,
    },
    lightGrey: {
        borderColor: Colors.lightGrey,
    },

    /*Margin and padding */
    bottomPadding: {
        paddingBottom: 10
    },
    verticalPadding: {
        paddingVertical: 10
    },
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexColumnCenter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexStart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    selfStart: {
        algnSelf: 'flex-start'
    },
    selfCenter: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    documentContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15
        // justifyContent: 'space-evenly',
    },
    documentBodyContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    horizontalPadding: {
        paddingHorizontal: 10,
    },
    mr3: {
        marinRight: 3
    },
    mb3: {
        marginBottom: 3
    },
    mt3: {
        marginTop: 3
    },
    mb10: {
        marginBottom: 10
    },
    leftMargin10: {
        marginLeft: 10
    },
    mainHeader: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        marginHorizontal: 10,
    },
    paymentFooter: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        paddingTop: 50,
    },
    footerText: {
        fontSize: wp('2.1%'),
        color: Colors.textGrey,
        textAlign: 'center'
    },
    footerActiveText: {
        fontSize: wp('2.1%'),
        color: Colors.textBlack,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    /*Font sizes */
    font16: {
        fontSize: 16
    },
    font12: {
        fontSize: 12
    },
    font13: {
        fontSize: 13
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
        // fontWeight: 'bold',
        // fontFamily: 'Lato'
    },

    inputTextArea: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        // height: 60,
    },
    searchStyle: {
        width: 240,
        height: 35,
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
    },
    searchInputStyle: {
        fontSize: 17,
        fontWeight: 'bold'
    },

    inputTextColor: {
        color: Colors.textGrey,
        paddingLeft: 5,
        textAlign: 'center',
    },

    datePicker: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 3,
        paddingVertical: 0
    },

    /*Buttons */
    buttonWhite: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: Colors.white,
        borderTopColor: Colors.black,
        height: 54,
    },
    buttonBlack: {
        backgroundColor: Colors.app,
        borderRadius: 50,
        marginTop: 20,
        justifyContent: 'center',
        height: 54,
    },
    disabledButton: {
        borderRadius: 0,
        justifyContent: 'center',
        height: 54,
    },
    roundInfoButton: {
        borderColor: Colors.black,
        borderTopColor: Colors.black,
        height: 30,
    },

    roundInfoButtonText: {
        color: Colors.black,
    },

    infoButton: {
        borderColor: Colors.black,
        borderTopColor: Colors.black,
        height: 30,
        width: 100
    },

    blueButton: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0077FF',
    },

    /* Signup */
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    cameraButton: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center'
    },
    cameraIcon: {
        alignSelf: 'center',
    },

    mb15: {
        marginBottom: 15
    },

    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        height: (Platform.OS === 'ios') ? 85 : 60,
        // for Android
        elevation: 2,
        paddingLeft: 20,
        // for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
    },
    headerLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // paddingRight: 20,
        marginRight: 20,
        paddingBottom: 10,
    },
    /* Signup and Login */
    textDisclaimer: {
        color: Colors.textGrey,
        fontSize: 15,
        paddingLeft: 10,
        // width:200
    },
    textPhoto: {
        color: Colors.textGrey,
        fontSize: 15,
        paddingLeft: 10,
        width: 200
    },

    /* DashBoard */
    dashboardAvatar: {
        height: 40,
        width: 40,
        borderWidth: 0,
        borderRadius: 200,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        // alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 8
    },
    dashboardContent: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    dashboardIcon: {
        width: 65,
        height: 65,
    },
    dashboardIcon2: {
        width: 65,
        height: 70,
    },
    newDashboardContent: {
        marginVertical: 10,
    },
    dashboardAddItem: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 400,
        backgroundColor: Colors.white,
        justifyContent: 'center',
    },
    dashboardAddView: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    dashboardAddText: {
        paddingTop: 2,
        color: Colors.textGrey,
        fontSize: 12,
        // fontFamily: 'Roboto'
    },
    dashboardFooter: {
        borderTopColor: '#EEEEEE',
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },

    checkIn_btn: {
        position: 'absolute',
        bottom: (Platform.OS === 'ios') ? 100 : 75,
        right: 15
    },

    textDark: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    resetPasswordButton: {
        alignSelf: 'center',
    },
    resetPassword: {
        color: Colors.textGrey,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },

    /* Enable push notification and location access*/
    closeButton: {
        paddingTop: (Platform.OS === 'ios') ? 3 : 0,
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: (Platform.OS === 'ios') ? 100 : 60,
        backgroundColor: Colors.white,
        elevation: 0,
        shadowOffset: { width: 0, height: 0 },
        paddingHorizontal: 10,
        borderBottomWidth: 0,
    },
    headerLeftIcon: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headerRightIcon: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textLarge: {
        margin: 20,
        fontWeight: 'bold',
        fontSize: 35,
    },
    textSubtitle: {
        margin: 20,
        color: Colors.placeholderGrey,
        fontSize: 16,
        // fontFamily: 'Open Sans',
        textAlign: 'center'
    },
    permissionIcons: {
        flex: 1,
        alignSelf: 'center',
        marginVertical: 20,
    },
    locationPermission: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
    },
    textBold: {
        fontWeight: 'bold',
    },

    /* User profile*/
    profileHeader: {
        fontWeight: 'bold',
        fontSize: 15,
        // fontFamily: 'Lato'

    },
    space: {
        paddingBottom: 5
    },
    splitup: {
        flexDirection: 'row',
    },
    sameAs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    columnSplit: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'space-between'
    },
    columnSplitCreditCard: {
        flex: 1,
        justifyContent: 'space-between'
    },
    removeBorder: {
        borderWidth: 0
    },
    profileBackground: {
        backgroundColor: '#eee',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileBackgroundCamera: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset:
            { width: 0, height: 1, },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    /*smallRoundedButton*/

    addorg: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },

    orgtext: {
        color: 'white',
    },
    marginRight: {
        marginRight: 5,
    },


    textDark_sm: {
        marginTop: 70,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: "bold",
        // fontFamily: 'Lato'
    },
    successIcon: {
        fontSize: 150,
        marginTop: 120
    },
    successText: {
        marginTop: 50,
        fontSize: 21,
        fontWeight: "bold",
        // fontFamily: 'Lato'
    },
    successText2: {
        marginTop: 60,
        fontSize: 21,
        fontWeight: "bold",
        // fontFamily: 'Lato'
    },
    passwordResetSuccess_alignment: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //paddingVertical:232,
        alignSelf: 'center',

    },
    otp_number: {
        color: Colors.white,
        fontSize: 16,
        // fontFamily: 'Open Sans',
        //alignSelf: 'center',
        //justifyContent: 'center',
        marginLeft: 16
    },
    otpView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        // justifyContent: 'space-around',
        // paddingHorizontal: 10,
        // marginRight:50
    },
    otpInputBox: {
        width: 52,
        height: 52,
        backgroundColor: 'black',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        color: Colors.white,
        fontSize: 16,
        // marginLeft: 16,
        textAlign: 'center',
    },
    cardContainer: {
        height: 100,
    },

    /* AddPayment */
    mastercard: {
        width: 25,
        height: 25,
        marginRight: 15
    },
    paymentHeader: {
        marginBottom: 15
    },
    addBorder: {
        height: 60,
        width: 70,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    completePaymentList: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    paddingTop10: {
        paddingTop: 10
    },
    paddingTop40: {
        paddingTop: 40
    },
    paddingTop30: {
        paddingTop: 30
    },
    paddingBottom20: {
        paddingBottom: 20
    },
    paddingBottom10: {
        paddingBottom: 10
    },
    paddingRight10: {
        paddingRight: 10
    },
    paddingTop50: {
        paddingBottom: 50
    },

    paddingTop5: {
        paddingTop: 5
    },
    paymentAvatarSpace: {
        paddingLeft: 0,
        paddingRight: 0
    },
    paymentAvatarSelected: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#73E388',
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    paymentDeleteAvatar: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
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
    paymentAvatar1: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    paymentAvatar2: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },
    // chatMenu
    countBadge: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#0077FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deletePaymentBadge: {
        width: 18,
        height: 18,
        backgroundColor: '#dc3545',
        borderRadius: 50,
        position: 'absolute',
        left: 45,
        bottom: 55
    },
    chatNotifyBadge: {
        borderRadius: 10,
        width: 8,
        height: 8,
        backgroundColor: 'red',
        position: 'absolute',
        left: +38,
        top: +5
    },
    /* Credit card */
    creditToggleText: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    creditTextWidth: {
        fontSize: 15,
        width: '80%'
    },
    creditCardText: {
        color: Colors.black,
        // fontFamily: 'Lato',
        fontSize: 15,
        // fontWeight: 'bold'
    },
    errorInputStyle: {
        backgroundColor: Colors.lightGrey,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: Colors.red,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 42,
    },

    documentDetails: {
        fontWeight: 'bold',
        width: 300,
    },


    //Cards Upcoming Events
    upcoming: {
        fontSize: 30,
        // fontFamily: 'Lato',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    completeYourProfile: {
        // fontSize: 13, fontFamily: 'Lato',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    card: {
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardCarousel: {
        overflow: 'hidden',
        height: 300,
        borderRadius: 15,
    },
    cardContainer: {
        height: 200,
    },
    cardImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    cardTeamLogo: {
        height: 90,
        width: 90,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        position: "absolute",
        top: -15,
        right: -20,
    },
    cardImageBackground: {
        width: "100%",
        height: 400
    },
    game: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.white,
        marginTop: 10,
        // fontFamily: 'Lato'
    },
    date: {
        fontSize: 25,
        color: 'white'
    },
    time: {
        fontSize: 25,
        color: 'white',
        paddingLeft: 20
    },
    opponent: {
        fontSize: 45,
        color: 'white'
    },
    location: {
        fontSize: 25,
        color: 'white',
        flexDirection: 'row'
    },
    details: {
        fontSize: 20,
        color: 'white'
    },
    scrollCardsText: {
        fontSize: 85,
        color: 'white',
        fontWeight: 'bold',
        //paddingTop: 200
    },
    // cardButton{

    // }
    /* Search for program */
    searchInputBox: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 35,
    },
    filterInput: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 42,
    },
    time: {
        fontSize: 19,
        color: Colors.white,
        paddingLeft: 20,
        fontWeight: 'bold',
        // fontFamily: 'Lato'

    },
    opponent: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        // fontFamily: 'Lato',
        width: 295
    },
    location: {
        fontSize: 19,
        color: 'white',
        flexDirection: 'row',
        fontWeight: 'bold',
        // fontFamily: 'Lato',
    },
    details: {
        fontSize: 17,
        color: 'white',
        flexDirection: 'row',
        fontWeight: 'bold',
        // fontFamily: 'Lato',
    },
    scrollCardsText: {
        fontSize: 15,
        // fontFamily: 'Lato',
        color: 'white',
        fontWeight: 'bold',
        width: 120
    },

    iconSearch: {
        color: '#8C8C8C',
    },
    lineStyle: {
        borderTopWidth: 1,
        borderColor: Colors.borderGrey,
        marginVertical: 15,
    },
    searchInput: {
        fontWeight: 'bold',
        fontSize: 15,
        // fontFamily: 'Lato',
    },
    textMedium: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        // marginVertical: 20,
        color: '#1A173B',
    },
    centerBlock: {
        marginVertical: 30,
    },

    /* Program Search Results */
    programName: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    backButton: {
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backArrow: {
        fontSize: 45,
        width: 50
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    showAll: {
        flexDirection: 'row',
        //fontSize:15,
    },
    triangleArrow: {
        paddingLeft: 10,
        paddingTop: 2,
        fontSize: 20,
    },
    programBadge: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 3,
        borderColor: '#979797',
        marginTop: 5,
    },
    badgeText: {
        color: '#8C8C8C',
        fontSize: 13,
        lineHeight: 20
    },
    viewButtonStyle: {
        justifyContent: 'center',
    },
    viewButton: {
        //marginLeft: 0,
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.black,
        //height: 25,
    },
    view: {
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.black,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#979797'
    },
    blackText: {
        color: Colors.black,
        fontSize: 13,
        marginHorizontal: 5,
        lineHeight: 20
    },
    greyText: {
        color: '#979797',
        fontSize: 13,
        marginHorizontal: 5,
    },
    listDivider: {
        borderTopWidth: 1,
        borderColor: '#E4E4E4',
    },

    /* Organization details */
    orgdata: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    orglogo: {
        width: 120,
        height: 120,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    ratingData: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ratingFont: {
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    orgHead: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 10,
    },
    reviewText: {
        color: '#9092A5',
        fontWeight: 'bold',
    },
    readOption: {
        color: '#A5A5A5',
    },
    followButton: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
    },

    errorMessage: {
        fontSize: 12,
        color: Colors.red,
        marginRight: 10
    },
    loader: {
        width: 100,
        height: 100
    },
    followButton: {
        alignSelf: 'center',
    },

    //Walkthrough
    walkthroughTitle: {
        fontSize: 38,
        color: '#1F1F1F',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    walkthroughText: {
        color: '#9A9A9A',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 30,
        paddingHorizontal: 20
    },
    getStartedButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    walkthroughHeader: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        ...Platform.select({
            ios: {
                height: 100,
            },
            android: {
                height: 70,
            },
        }),
    },
    left: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginLeft: 18,
    },

    /* Program Details */
    pgmdata: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    pgm_orglogo: {
        width: 50,
        height: 50
    },
    pgmTitleText: {
        //flexDirection:'row',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pgmSubtitleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    pgmImg: {
        height: 150,
        width: null,
        flex: 1
    },
    pgmSpace: {
        paddingTop: 7
    },
    pgmViewSpace: {
        paddingTop: 13
    },
    pgmDateSpace: {
        paddingTop: 13,
        flexDirection: 'row'
    },
    pgmHzntlSpace: {
        paddingHorizontal: 10
    },

    /* Select player */

    disablePlayeViewBadge: {
        backgroundColor: Colors.textGrey,
        borderColor: Colors.black,
        borderWidth: 1
    },
    playeViewBadge: {
        backgroundColor: Colors.white,
        borderColor: Colors.black,
        borderWidth: 1
    },
    playerTypeBadge: {
        backgroundColor: Colors.white,
        borderColor: '#979797',
        borderWidth: 1,
        borderRadius: 4
    },
    playerSpace: {
        marginTop: 5
    },
    playerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },

    addnewText: {
        color: '#0077FF'
    },
    noChatView: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },

    noStreamView: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },

    /* Review */
    addPlayer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    member_logo: {
        height: 30,
        width: 30,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

    /*Reviews*/
    mutedText: {
        color: '#24253D'
    },
    reviewText: {
        color: '#9092A5',
        paddingTop: 6
    },
    reviewCard: {
        elevation: 0,
        borderRadius: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    attachment: {
        flexDirection: 'row',
        minHeight: 20,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        minWidth: 130,
        alignItems: 'center'
    },
    attachmentContainer: {
        fontSize: 18,
        marginRight: 2,
        color: '#474747'
    },
    attachmentText: {
        fontSize: 15,
        color: '#474747'
    },
    chatTimeTxt: {
        fontSize: 10,
        color: '#bfbfbf'
    },
    chatfooterContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    chatfooterText: {
        fontSize: 14,
        color: '#aaa',
    },
    chatRight: {
        marginBottom: 5,
        width: 150,
        padding: 10,
        paddingBottom: 7,
        backgroundColor: '#F2F2F5',
        elevation: 2,
        shadowColor: '#aaa',
        borderRadius: 15,
        borderTopRightRadius: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    chatDocument: {
        margin: 5,
    },
    chatLeft: {
        marginBottom: 5,
        width: 150,
        padding: 10,
        paddingBottom: 7,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        elevation: 2,
        shadowColor: '#000',
        borderTopLeftRadius: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    chatTimeRight: {
        marginTop: 0,
    },
    chatTimeLeft: {
        marginTop: 0,

    },

    chatMenuActiveIcon: {
        color: Colors.black,
        fontSize: 14,
        marginRight: 3
    },
    chatMenuIcon: {
        color: Colors.chatGrey,
        fontSize: 14,
        marginRight: 3
    },
    /* Additional Questions */
    spaceQn: {
        paddingVertical: 10
    },
    iconSize: {
        height: 25,
        width: 25,
        //justifyContent: 'center',
        //alignItems:'center',
        alignSelf: 'center',

    },
    signDocumentFooter: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        //height:50,
        backgroundColor: 'white'
    },
    textBlue: {
        color: Colors.blue,
    },
    termslink: {
        fontSize: 12,
    },
    blackAccepted: {
        color: Colors.black,
        fontSize: 9,
    },
    blackAccepted1: {
        color: 'blue',
        fontSize: 9,
        marginHorizontal: 5,
    },
    inputContainerDescrip: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        height: 42,
    },
    successIcon1: {
        fontSize: 100,
        marginTop: 100
    },
    addMessageButton: {
        height: 58,
        width: 58,
        borderWidth: 1,
        borderColor: Colors.borderGrey,
        borderRadius: 400,
        backgroundColor: Colors.black,
        justifyContent: 'center',
        //marginRight: 10
    },
    newMessageIcons: {
        height: 30,
        width: 30,
        //justifyContent: 'center',
        //alignItems:'center',
        alignSelf: 'center',
        fontSize: 30,
        color: Colors.white,
        // backgroundColor:'red'

    },
    messageBody: {
        backgroundColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        fontSize: 15,
        //paddingLeft: 10,
        //marginTop: 5,
        //marginBottom: 5,
        //height: 42,
    },
    iosPaddingTop: {
        ...Platform.select({
            ios: {
                paddingTop: 20
            }
        }),
    },
    badge: {
        borderRadius: 15,
        width: 11,
        height: 11,
        backgroundColor: '#FC5A5A',
        alignSelf: 'flex-start',
        position: 'absolute',
        right: 26,
        top: 4
    },
    menuTrigger: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 3,
        alignItems: 'center',
        paddingVertical: 10
    },
    triggerTextGrey: {
        color: Colors.placeholderGrey,
        fontSize: 15,
        // fontWeight: 'bold',
        paddingLeft: 3
    },
    triggerTextBlack: {
        color: Colors.black,
        fontSize: 15,
        // fontWeight: 'bold',
        paddingLeft: 3
    },
    orgLogoView: {
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 200,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    download: {
        backgroundColor: Colors.blue,
        padding: 5,
        color: Colors.white,
        borderRadius: 6
    },
    trash: {
        backgroundColor: '#DC3545',
        borderRadius: 0,
        justifyContent: 'center',
        height: 54,
    },
    /*login page */

    loginLogo: {
        height: 200,
        width: 200,
        alignItems: 'center',
    },
    passwordEye: {
        color: '#979797',
        fontSize: 20,
        paddingRight: 10
    },

    /* Dashboard */
    h25: {
        height: 25
    },
    w25: {
        width: 25
    },
    h22: {
        height: 22
    },
    height20: {
        height: 20
    },

    width20: {
        width: 20
    },

    width22: {
        width: 22
    },

    height30: {
        height: 30
    },

    width30: {
        width: 30
    },

    width40: {
        width: 40
    },

    height40: {
        height: 40
    },

    height70: {
        height: 70
    },

    marginTop10: {
        marginTop: 10
    },

    mb2: {
        marginBottom: 2
    },

    mb3: {
        marginBottom: 3
    },

    cardBackground: {
        backgroundColor: '#F4F4F4',
        borderRadius: 15,
        borderWidth: 0
    },
    font30: {
        fontSize: 30
    },
    font40: {
        fontSize: 40
    },
    footerTabWidth: {
        width: '20%'
    },
    dashboardCard: {
        backgroundColor: '#F4F4F4',
        borderRadius: 15,
        borderWidth: 0,
        height: hp('25%'),
        width: wp('33%'),
        justifyContent: 'center',

    },
    dashboardCardAlignItems: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'yellow',
        alignSelf: 'center',
    },
    dashboardCardTextAlign: {
        alignItems: 'center',
        marginTop: 10
    },
    dashboardCardText: {
        textAlign: 'center',
        fontSize: 14
    },

    /*account*/
    pickerMenu: {
        flex: 1, paddingRight: 4
    },

    marginTop40: {
        marginTop: 40
    },

    width60: {
        width: 60
    },

    height60: {
        height: 60
    },

    emptyData: {
        fontSize: 18,
        color: '#4A4A4A',
        marginTop: 20
    },

    emptyViewIcon: {
        paddingTop: 80, paddingBottom: 20, alignItems: 'center'
    },

    alignCenter: {
        alignItems: 'center'
    },

    justifyBetween: {
        justifyContent: 'space-between'
    },

    profileAvatar: {
        fontSize: 18, letterSpacing: 1, color: '#666666'
    },

    /*icon*/

    calText: {
        fontSize: 15, color: '#8C8C8C'
    },
    calIcon: {
        color: '#8C8C8C', fontSize: 20
    },

    /*Checkout flow*/
    emptyCoupon: {
        height: 42, marginTop: 3, marginLeft: 10
    },

    noteText: {
        fontSize: 10, textAlign: 'right', alignSelf: 'flex-end'
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

    checkboxActive: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    checkboxInActive: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
    },

    groupchatClose: {
        top: -20,
        right: -15,
        height: 25,
        width: 25,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 200,
        backgroundColor: Colors.red,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 0
        // overflow: 'hidden'
    },


};

export default styles;