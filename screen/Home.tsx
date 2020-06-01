import React from "react";
import styled from "styled-components/native";
import { InfoList } from "../sample/samples";
import List from "../components/List";
import DBTest from "../components/DBTest";

const View = styled.View``;
const Text = styled.Text``;
const Home = () => {
  let id = 0;
  return (
    <View>
      {InfoList.map((data) => (
        <List key={++id} info={data} />
      ))}
      <DBTest />
    </View>
  );
};

export default Home;
