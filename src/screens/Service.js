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
      <Button>Grooming</Button>
      <Button>Day-care</Button>
      <Button>Training</Button>
      <Button>Goods</Button>
    </View>
  );
}
