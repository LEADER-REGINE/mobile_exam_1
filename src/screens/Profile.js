import React from "react";
import { Text, View } from "react-native";

export default function Profile({ route }) {

  return (
    <View>
        <Text>
          Pet Breed: {route.params.petBreed}
          Pet Type: {route.params.pet}
        </Text>
    </View>
  );
}
