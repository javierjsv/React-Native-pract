import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import facebook from './screens/categoria/util/facebook';
import FirebaseConfig from './screens/categoria/util/FirebaseConfig';
import * as firebase from 'firebase';
firebase.initializeApp(FirebaseConfig);
import Categoria from './screens/categoria/Categoria'
import Header from './screens/categoria/Header'
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import Expo from 'expo';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount() {

    //firebase.auth().signOut;
    // await firebase.auth().onAuthStateChanged((user) => {
    //   if (user !== null) {
    //     this.setState({
    //       isLogged: true,
    //       loaded: true
    //     });
    //   } else {
    //     this.setState({
    //       isLogged: false,
    //       loaded: true
    //     });
    //   }
    // })
  }

  signInWithGoogleAsync = async () =>  {
  try {
    const result = await Google.logInAsync({
      androidClientId: 'AIzaSyAZVKnQ5nNV_EBNjU9EK1pBAOf3ej2EIWs',
     // iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}


	async facebook () {
		const {type, token} = await Facebook.logInWithReadPermissionsAsync(
			facebook.config.application_id,
			{ permissions: facebook.config.permissions }
		);

		if(type === "success") {
			const credentials = firebase.auth.FacebookAuthProvider.credential(token);
			firebase.auth().signInWithCredential(credentials)
				.catch(error => {
					Toast.showWithGravity('Error accediendo con facebook', Toast.LONG, Toast.BOTTOM);
				})
		} else if(type === "cancel") {
			Toast.showWithGravity('Inicio de sesón cancelado', Toast.LONG, Toast.BOTTOM);
		} else {
			Toast.showWithGravity('Error desconocido', Toast.LONG, Toast.BOTTOM);
		}
	}


  login() {
    console.log('hola');
    alert('login')

  }

  render() {
    const { isLogged, loaded } = this.state;
    return (

    <Categoria />

/*
      <View View style={{ justifyContent: 'center', flex: 1 }}>

        <Button
        title="xxJxxtl"
          onPress={this.facebook.bind(this)}
        />

      </View>
 
*/
    )
  }
}


