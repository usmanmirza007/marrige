import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView >
                        <ImageBackground source={require('./../image/Rbg.png')} style={{ width: '100%', height: '100%', marginTop: hp('0%') }}>
                            <Image source={require('./../image/text1.png')} style={{ width: '100%', height: '10%', marginBottom: hp('0%'), marginTop: hp('10%') }} />
                            <Text style={styles.text}>Trusted marriage proposal for momineen all</Text>
                            <Text style={styles.text}>anround the world</Text>
                            <Image source={require('./../image/ddssss.png')} style={{ width: '50%', height: '20%', marginBottom: hp('0%'), alignSelf: 'center' }} />
                            <Image source={require('./../image/ddddwwww.png')} style={{ width: '80%', height: '10%', marginBottom: hp('0%'), alignSelf: 'center' }} />
                            <Text style={styles.text}>Enter your contact number</Text>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/icon1.png')} style={{ width: 18, height: 20, marginLeft: hp('2%'), alignSelf: 'center' }} />

                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Country'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/icon2.png')} style={{ width: 18, height: 20, marginLeft: hp('2%'), alignSelf: 'center' }} />

                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Contact Number'}
                  
                              />
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('otp')}>
                                <Text style={styles.buttonText}>Registration</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        color: '#ccc',
        fontSize: 13
    },
    input: {
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff',
        padding: 10,
        width: '70%'
    },
    firstInput: {
        flexDirection: 'row',
        marginTop: 10,
        height: 45,
        borderColor: '#EAEAEAEA',
        borderWidth: 2,
        marginTop: hp('5%'),
        marginHorizontal: 25
      },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#323232',
        borderRadius: wp('1%'),
        height: 50,
        marginHorizontal: wp('5%'),
        marginBottom: wp('100%')
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
});