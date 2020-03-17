import React from 'react';
import { StyleSheet, TextInput, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type1: '',
            type2: '',
            type3: '',
            type4: '',
            type5: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView >
                        <ImageBackground source={require('./../image/Rbg.png')} style={{ width: '100%', height: '100%', marginTop: hp('0%') }}>
                            <Image source={require('./../image/heading-profile.png')} style={{ width: 220, height: 40, marginBottom: hp('0%'), alignSelf: 'center', marginTop: hp('10%') }} />
                            <Text style={styles.text}>Trusted marriage proposal for momineen all</Text>
                            <Text style={styles.text}>anround the world</Text>
                            <Image source={require('./../image/profile-image.png')} style={{ width: 100, height: 100, marginBottom: hp('3%'), marginTop: hp('3%'), alignSelf: 'center' }} />
                            <Text style={styles.recent}>Please enter your recent photo</Text>
                            <Text style={styles.details}>Step 2 : Other Details</Text>

                            
                            <View style={styles.firstInput1}>
                                <Image source={require('./../image/icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Name'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Email'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/occupation-icon.png')} style={{ width: 30, height: 40, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Password'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/education-icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Confirm Password'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/education-icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Nationality'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/education-icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'City'}
                  
                              />
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/education-icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Ethnicity'}
                  
                              />
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#EAEAEAEA', flexDirection: 'row', marginTop: hp('1%'), height: 45, marginHorizontal: wp('7%'), }}>
                                <Image source={require('./../image/syed-icon.png')} style={{ width: 50, height: 30, marginHorizontal: wp('2%'), marginVertical: hp('2'), alignSelf: 'center' }} />

                                <Picker style={{ height: 30, marginTop: hp('1%'), color: '#000', width: 245 }}
                                    selectedValue={this.state.type5}
                                    onValueChange={(itemValue) =>
                                        this.setState({ type5: itemValue })}>
                                    <Picker.Item label="Gender" value="Gender" />
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </View>
                            <View style={styles.firstInput}>
                                <Image source={require('./../image/education-icon.png')} style={{ width: 30, height: 30, marginLeft: hp('2%'), alignSelf: 'center' }} />
                                <TextInput
                                style={[styles.input, { marginBottom: 5, }]}
                                placeholder={'Date of birth'}
                  
                              />
                            </View>
                            
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('profile2')}>
                                <Text style={styles.buttonText}>Next</Text>
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
    recent: {
        alignSelf: 'center',
        color: '#8e2d2f',
        fontSize: 15
    },
    details: {
        alignSelf: 'center',
        color: '#6f6f6f',
        fontSize: 18,
        marginTop: wp('10%'),

    },
    input: {
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff',
        padding: 10,
        width: '70%'
    },
    firstInput1: {
        flexDirection: 'row',
        borderColor: '#EAEAEAEA',
        borderWidth: 2,
        height: 45,
        marginTop: hp('5%'),
        marginHorizontal: 25
      },
    firstInput: {
        flexDirection: 'row',
        borderColor: '#EAEAEAEA',
        borderWidth: 2,
        height: 45,
        marginTop: hp('1%'),
        marginHorizontal: 25
      },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#323232',
        borderRadius: wp('1%'),
        height: 50,
        marginHorizontal: wp('5%'),
        marginBottom: wp('20%')
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
});