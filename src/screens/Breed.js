import React, { useState, handleChange } from "react";
import { Text, View } from "react-native";
import * as Mui from "@material-ui/core";
import * as Muicons from "@material-ui/icons";

export default function Home({ navigation }) {
  const [payload, setPayload] = useState({
    breed: "",
    petType: "",
  });
  const [petType, setType] = useState("dog");

  const userInput = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const proceed = (e) => {
    navigation.navigate("Profile", {
      petBreed: payload.breed,
      pet: petType,
    });
  };

  return (
    <View>
      <Mui.FormControl component="fieldset">
        <Mui.FormLabel component="legend">Pet Type</Mui.FormLabel>
        <Mui.RadioGroup
          aria-label="pettype"
          name="PetType"
          value={petType}
          onChange={handleChange}
        >
          <Mui.FormControlLabel
            value="dog"
            control={<Mui.Radio />}
            label="Dog"
          />
          <Mui.FormControlLabel
            value="cat"
            control={<Mui.Radio />}
            label="Cat"
          />
        </Mui.RadioGroup>
      </Mui.FormControl>
      <Text> What is the breed? </Text>
      <Mui.TextField
        type="text"
        label="Breed"
        name="breed"
        onChange={userInput("breed")}
        value={payload.breed}
      ></Mui.TextField>
      <Mui.Button
        variant="contained"
        color="primary"
        size="large"
        onClick={proceed}
        startIcon={<Muicons.VpnKey />}
      >
        PROCEED
      </Mui.Button>
    </View>
  );
}
