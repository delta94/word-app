import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import * as Speech from "expo-speech";

const constants = Dimensions.get("window");
const Container = styled.View`
  display: flex;
  width: ${constants.width};
  height: 100px;
  padding: 10px;
`;
const Text = styled.Text``;
const Touchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: blue;
`;
interface RowProps {
  word: string;
  meaning: string;
  example?: string;
}
const Row: React.FC<RowProps> = ({ word, meaning, example }) => {
  const speak = () => {
    Speech.speak(word, {
      language: "en-US",
      pitch: 1.3,
      rate: 1.0,
    });
  };
  return (
    <Container>
      <Text>{word}</Text>
      <Text>{meaning}</Text>
      <Touchable onPress={speak}>
        <Text style={{ color: "white" }}>앙</Text>
      </Touchable>
    </Container>
  );
};

export default Row;
