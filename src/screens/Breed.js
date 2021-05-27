import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Mui from "@material-ui/core";
import * as Muicons from "@material-ui/icons";

export default function Home({ navigation }) {
  const [payload, setPayload] = useState({
    breed: "",
  });

  const userInput = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const proceed = (e) => {
    navigation.navigate("Profile", {
      petBreed: payload.breed,
    });
  };

  return (
    <View>
      <Text> What is the breed of your dog? </Text>
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
