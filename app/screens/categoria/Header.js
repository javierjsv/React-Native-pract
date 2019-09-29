import React, {Component} from 'react'
import {
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Alert,
    FlatList,
    Image,
    Card


} from 'react-native';

export default class Header extends Component{

constructor(){
    super();
    this.title = 'Bienvenidos'
}


render(){
    return(

        <Text>
            Welcome Food
        </Text>
    )
}


}