import React, {useState} from "react";
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
    </View>
  );
}
