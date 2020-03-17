import splash from './../component/splash';
import registration from './../component/registration';
import signIn from './../component/signIn';
import profile from './../component/profile';
import profile2 from './../component/profile2';
import otp from './../component/otp';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    splash: {
        screen: splash,
        navigationOptions: {
            header: null,
        },
    },
    registration: {
        screen: registration,
        navigationOptions: {
            header: null,
        },
    },
    otp: {
        screen: otp,
        navigationOptions: {
            header: null,
        },
    },
    signIn: {
        screen: signIn,
        navigationOptions: {
            header: null,
        },
    },
    profile: {
        screen: profile,
        navigationOptions: {
            header: null,
        },
    },
    profile2: {
        screen: profile2,
        navigationOptions: {
            header: null,
        },
    },
    
  },{
      initialRouteName: 'splash'
  })

export default createAppContainer(Route);

