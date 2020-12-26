import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";
import AnotherScreen from "screens/AnotherScreen";
import type { RootStackParamList } from "./Routing.types";

const Stack = createStackNavigator<RootStackParamList>();

const Routing = memo(() => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "My home" }}
    />
    <Stack.Screen
      name="Another"
      component={AnotherScreen}
      options={({ route }) => ({ title: route.params.someParam })}
    />
  </Stack.Navigator>
));

export default Routing;
