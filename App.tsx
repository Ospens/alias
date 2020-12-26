import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoresProvider, stores } from "stores";
import Routing from "routing";

const App = () => (
  <StoresProvider value={stores}>
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  </StoresProvider>
);

export default App;
