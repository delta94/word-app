import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screen/Home";
import Note from "../screen/Note";

const MaterialTopTab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Home" component={Home} />
      <MaterialTopTab.Screen name="Note" component={Note} />
    </MaterialTopTab.Navigator>
  );
};

export default TabNavigation;
