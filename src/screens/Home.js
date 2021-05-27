import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <MaterialIcons name="pets" size={40} color="black"/>
                    <Text style={styles.logoFont}>PetHub</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('./dog-bg.jpg')}
                />
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.font1}>Hello</Text>
                <Text style={styles.font1}>Human</Text>
                <TouchableOpacity
                    style={styles.button}  
                >
                    <MaterialIcons name="pets" size={40} color="black" />
                </TouchableOpacity>

            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({

    containerLogo: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },

    container: {
        alignItems: "center",
    },

    image: {
        resizeMode: "cover",
        height: 360,
        width: 320,
        
        borderRadius: 40,
    },

    logoFont: {

        fontWeight: ('bold'),
        fontSize: 30,
        marginLeft: 10,
    },

    font1: {
        fontSize: 30,
        fontWeight: ('bold'),
        textAlign: "left",
        color: "#FFAD1C",
    },

    fontContainer: {
        padding: 30
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 70,
        height: 70,
        borderRadius: 100,
        
      },

})