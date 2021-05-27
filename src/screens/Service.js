import React, { useState, handleChange } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  Button,
  RadioButton,
} from "react-native-paper";

export default function Service({ navigation }) {

  return (
    <View>
      <Button onPress={() => alert("Grooming")}>Grooming</Button>
      <Button onPress={() => alert("Day-care")}>Day-care</Button>
      <Button onPress={() => alert("Training")}>Training</Button>
      <Button onPress={() => alert("Pet Store")}>Pet Store</Button>
    </View>
  );
}
