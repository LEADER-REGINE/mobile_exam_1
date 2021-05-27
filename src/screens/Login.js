import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import Register from "./Register"
// import Home from "./Home"
import firebase from "./utils/firebase"
import { Alert, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [payload, setPayload] = React.useState({
        email: '',
        password: '',


    });
    const handleChange = (prop) => (text) => {
        setPayload({ ...payload, [prop]: text });

    };
    const login = () => {
        if (!payload.email || !payload.password) {
            Alert.alert(
                "Login Failed",
                "Wrong Username/Password",
            );
           
        }
        else {
            
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              "Message" ,
              "Login Successful" ,
               [{ text: "OK" }],
               { cancelable: false }
              navigation.navigate("Home");
              // ...
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
        }

    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PetHUB</Text>
            <Text style={styles.subtitle}>Login</Text>

            <StatusBar
                style="auto" />
            <TextInput style={styles.input}
                value={payload.email}
                placeholder="Email"
                onChangeText={handleChange("email")}

            />
            <TextInput
                style={styles.input}
                value={payload.password}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.login_button} onPress={login}>
                <Text style={styles.primaryText}>Login</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.register_button} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.login_text}>Don't have an account? Register</Text>

            </TouchableOpacity>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 30,
        top: 10,
        paddingBottom: 30,
        color: "#EE82EE",
        alignItems: 'center',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 15,
        marginTop: 1,
        paddingBottom: 20,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        minWidth: 250,
    },
    login_button: {
        borderRadius: 5,
        minWidth: 200,
      backgroundColor: "#046EE5",
        
        padding: 10,
        marginTop: 10,

    },
    primaryText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
    },
     register_button: {
        marginTop:10,
      
    },
    login_text:{
        fontSize: 15,
        color:  "#EE82EE",
        textAlign: "center",
    }


});