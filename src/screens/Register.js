import React, { useState } from "react";
import firebase from './utils/firebase'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Register({ navigation }) {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const handleChange = (prop) => (text) => {
    setPayload({ ...payload, [prop]: text });
  };

  const register = () => {
    if (!payload.email || !payload.password || !payload.confirmPass) {
      Alert.alert(
        "Registration failed",
        "Please fillout all fields!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else if (payload.password !== payload.confirmPass) {
      Alert.alert(
        "Registration failed",
        "Password do not Match!",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          navigation.navigate("Login")
          Alert.alert(
            "Message",
            "Registration Successful",
            [{ text: "OK" }],
            { cancelable: false }
          );

        })
        .catch(err => {
          Alert.alert(
            "Registration failed",
            err.message,
            [{ text: "OK" }],
            { cancelable: false }
          );
        });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetHUB</Text>
      <Text style={styles.primaryText}>Create an Account</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={handleChange("email")}
        value={payload.email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handleChange("password")}
        value={payload.password}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={handleChange("confirmPass")}
        value={payload.confirmPass}
      />
      <TouchableOpacity style={styles.btnRegister} onPress={register}>
        <Text style={styles.buttonText}> Register </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.login_text}>Have an account? Login</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    fontSize: 24,
    
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    minWidth: 250,
  },
  btnRegister: {
    borderRadius: 5,
    minWidth: 200,
    backgroundColor: "#046EE5",
    padding: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 3,
  },

  buttonText: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    top: 10,
    paddingBottom: 30,
    color: "#FFAD1C",
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_button: {
    marginTop: 10,
     shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.8,
            shadowRadius: 40,
            elevation: 3,

  },
  login_text: {
    fontSize: 15,
    color: "#EE82EE",
    textAlign: "center",
  }

});
