import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import * as SQLite from "expo-sqlite";
import Row from "../components/Row";
const View = styled.View``;
const Text = styled.Text``;
const Container = styled.View`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const ScrollView = styled.ScrollView``;

// infinite scroll rendering
const ListDetail = () => {
  const [item, setItem] = useState<any>([]);
  const [test, setTest] = useState({
    name: "and",
  });
  let id = 0;
  const callDB = () => {
    const db = SQLite.openDatabase("testdb.db");
    db.transaction((tx) => {
      tx.executeSql(`select * from toeic`, [], (trans, { rows: { _array } }: any) =>
        setItem(_array)
      );
    });
  };
  useEffect(() => {
    callDB();
  }, []);

  return (
    <ScrollView>
      {item &&
        item.slice(0, 50).map((d: any) => <Row key={++id} word={d.field1} meaning={d.field2} />)}
    </ScrollView>
  );
};

export default ListDetail;
