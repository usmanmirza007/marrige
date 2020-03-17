import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, HelperText } from 'react-native-paper';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
export default class splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

        setTimeout(() => { this.props.navigation.navigate('signIn') }, 2000);

    }

    render() {
        return (
            <View style = {styles.container}>
            <ImageBackground source={require('./../image/Splash-bg.png')} style={{ width: '100%', height: '100%',  }}>
                <Image source={require('./../image/sdsss.png')} style={{marginTop: 30, marginRight: 20, width: '90%', height: '35%', alignSelf: 'center' }} />
                <Image source={require('./../image/text1.png')} style={{ width: '80%', height: '20%', alignSelf: 'center'}} />
                <Text style = {styles.text}>Trusted marriage proposal for momineen all</Text>
                <Text style = {styles.text}>anround the world</Text>
                <Image source={require('./../image/ayat1.png')} style={{ width: '80%', height: '20%', alignSelf: 'center'}} />
                <Text style = {styles.text}>And we created you in pairs</Text>
                <Text style = {styles.text}>[I surah naba : 8]</Text>

            </ImageBackground>
            </View>
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
    text:{
        alignSelf: 'center',
        color: '#f3ae6a',
        fontSize: 13
    }
});