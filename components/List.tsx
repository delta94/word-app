import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const View = styled.View``;
const Text = styled.Text``;
const TouchableOpacity = styled.TouchableOpacity``;
interface Props {
  info: {
    title: string;
    subtitle: string;
  };
}
const List: React.SFC<Props> = ({ info }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ListDetail")}>
      <View>
        <Text>{info.title}</Text>
        <Text>{info.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default List;
