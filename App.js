import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Breed from "./src/screens/Breed"
import Profile from "./src/screens/Profile"
import Login from "./src/screens/Login"
import Register from "./src/screens/Register"
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Breed} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}