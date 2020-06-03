import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./style/theme";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export default function App() {
  const setUp = async () => {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}SQLite/testdb.db`);
    await FileSystem.downloadAsync(
      Asset.fromModule(require("./assets/DB/testdb.db")).uri,
      `${FileSystem.documentDirectory}SQLite/testdb.db`
    );
  };
  useEffect(() => {
    setUp();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
