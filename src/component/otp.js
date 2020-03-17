import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground,
    Image,
    SafeAreaView,
    Alert
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, } from '@expo/vector-icons';
//import axios from 'axios';
//import SpinnerScreen from '../views/Spinner';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
            <View style={styles.safeArea}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView >
                    <ImageBackground source={require('./../image/Rbg.png')} style={{ width: wp('100%'), height: hp('100%'), marginBottom: hp('0%'), }} resizeMode = 'stretch' >
                        <View style={styles.container}>
                            <Image source={require('./../image/text1.png')} style={{ width: '100%', height: '10%', marginBottom: hp('0%'), marginTop: hp('10%') }} />
                            <Text style={styles.text}>Trusted marriage proposal for momineen all</Text>
                            <Text style={styles.text}>anround the world</Text>
                            <Image source={require('./../image/ddssss.png')} style={{ width: '50%', height: '20%', marginBottom: hp('0%'), alignSelf: 'center' }} />
                            <Image source={require('./../image/ddddwwww.png')} style={{ width: '80%', height: '10%', marginBottom: hp('0%'), alignSelf: 'center' }} />
                            <Text style={styles.text}>We have sent an OTP on your number</Text>
                            <View style={styles.containContent}>
                                <OTPInputView
                                    style={styles.inputOtp}
                                    pinCount={4}
                                    code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                    onCodeChanged={code => { this.setState({ code }) }}
                                    autoFocusOnLoad
                                    codeInputFieldStyle={styles.underlineStyleBase}
                                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                    onCodeFilled={(code => {
                                        console.log(`Code is ${code}, you are good to go!`)
                                    })}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.props.navigation.navigate('profile')}>
                                    <Text style={styles.buttonText}>VERIFY</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.resend}>Resend OTP number</Text>
                        </View>
                        </ImageBackground>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        //justifyContent: 'flex-start',
        flexDirection: 'column',
        //alignItems: 'stretch',
    },
    containContent: {
        flex: 2.4,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: hp('1%')
    },
    text: {
        alignSelf: 'center',
        color: '#ccc',
        fontSize: 13
    },
    button: {
        marginTop: hp('3%'),
        width: wp('90%'),
        alignItems: 'center',
        backgroundColor: '#323232',
        borderRadius: wp('1%'),
        height: 50,
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
    inputOtp: {
        width: wp('85%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    underlineStyleBase: {
        width: wp('15%'),
        height: hp('8%'),
        borderWidth: 0,
        fontSize: 20,
        borderWidth: 2,
        color: '#e1a458'
    },
    underlineStyleHighLighted: {
        borderColor: "#e1e1e1",
    },
    resend: {
        alignSelf: 'center',
        marginBottom: hp('8%'),
        color: '#e1a458',
        fontWeight: 'bold'
    },
});
