import React from "react";
import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.blueColor};
`;
const Text = styled.Text``;
const Main = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Main;
