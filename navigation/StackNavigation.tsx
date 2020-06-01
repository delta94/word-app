import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import ListDetail from "../screen/ListDetail";

const StackNav = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="TabNavigation" component={TabNavigation} />
      <StackNav.Screen name="ListDetail" component={ListDetail} />
    </StackNav.Navigator>
  );
};

export default StackNavigation;
