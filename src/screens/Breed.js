import React, { useState, handleChange } from "react";
import { Text, View } from "react-native";
import {
  TextInput,
  Button,
  RadioButton,
} from "react-native-paper";

export default function Home({ navigation }) {
  const [payload, setPayload] = useState({
    breed: "",
    petType: "",
  });
  const [petType, setType] = useState("dog");

  const userInput = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };
  const proceed = (e) => {
    navigation.navigate("Profile", {
      petBreed: payload.breed,
      pet: petType,
    });
  };

  return (
    <View>
      <RadioButton.Group
        onValueChange={(newValue) => setType(newValue)}
        value={petType}
      >
        <View>
          <Text>Dog</Text>
          <RadioButton value="Dog" />
        </View>
        <View>
          <Text>Cat</Text>
          <RadioButton value="Cat" />
        </View>
      </RadioButton.Group>
      <TextInput
        label="Breed"
        onChange={userInput("breed")}
        value={payload.breed}
      />
      <Button onClick={proceed}>PROCEED</Button>
    </View>
  );
}
