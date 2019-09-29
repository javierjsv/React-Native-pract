import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Alert,
    FlatList,
    Image,
    Card, 
    Button


} from 'react-native';
import Header from '././Header'

const infoStorage =[];
const data = [{}];

const rows = [
    {
        id: 1,
        text: "Filete de ternera con salsa",
        qualification: 4.9,
        time: "25-30min",
        price: 14.99,
        image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 2,
        text: "Desayuno de primer plano lácteos",
        qualification: 4.7,
        time: "20-25min",
        price: 9.99,
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 3,
        text: "Burrito de pollo",
        qualification: 4.6,
        time: "25-30min",
        price: 13.99,
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 4,
        text: "Plato de salmón",
        qualification: 4.5,
        time: "25-30min",
        price: 15.99,
        image: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 5,
        text: "Postre",
        qualification: 4.8,
        time: "15-20min",
        price: 6.99,
        image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 6,
        text: "Sándwich servido en la tabla de cortar",
        qualification: 4.7,
        time: "10-15min",
        price: 9.99,
        image: "https://images.pexels.com/photos/1600711/pexels-zphoto-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 7,
        text: "Plato de aguacate cocido",
        qualification: 4.4,
        time: "15-25min",
        price: 12.99,
        image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    },
    {
        id: 8,
        text: "Hamburguesa",
        qualification: 4.6,
        time: "10-15min",
        price: 14.99,
        image: "https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440"
    }
]
const extractKey = ({ id }) => id

export default class Categoria extends Component {

    alert (e){
        alert('usted seleccionó :' + e.text);
    
    }



    renderItem = ({ item }) => {
        return (

            <View style={styles.container}>

                <Image
                    
                    style={styles.image}
                    source={{ uri: item.image }}
                />

                <Text style={styles.row}>
                    {item.text}
                </Text>
                <Text style={styles.row}>
                    Calificación  {item.qualification}
                </Text>
                <Text style={styles.row}>
                    time : {item.time}
                </Text>
                <Text style={styles.row}>
                    Precio : ${item.price}
                </Text>
                <Button
                    title="Seleccionar"
                   // onPress={ (e)=> this.alert(item)}
                    onPress={ (e)=> this.alert(item)}
                />

            </View>

        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={rows}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    row: {
        padding: 2,
        marginBottom: 2,
        //backgroundColor: 'skyblue',
    },
    image: {
        width: 100,
        height: 100,
        display: 'flex',
        backgroundColor: 'skyblue',
        paddingLeft : 5,
        
        
    },
});
