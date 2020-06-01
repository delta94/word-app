import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
const View = styled.View``;
const Text = styled.Text``;

const DBTest = () => {
  const [item, setItems] = useState<any>(null);
  const setUp = async () => {
    const temp = await FileSystem.downloadAsync(
      Asset.fromModule(require("../assets/DB/testdb.db")).uri,
      `${FileSystem.documentDirectory}SQLite/testdb.db`
    );
    const db = SQLite.openDatabase("testdb.db");

    db.transaction((tx) => {
      tx.executeSql(`select * from test`, [], (trans, result) => console.log(result));
    });
  };
  useEffect(() => {
    console.log("hi");
    setUp();
  }, []);
  console.log(item);
  return (
    <View>
      <Text>hmm....</Text>
    </View>
  );
};

export default DBTest;
