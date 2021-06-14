import styled from "styled-components/native";
import { Colors } from "../../utils/ColorsEnum";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
  padding: 0;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Header = styled.View`
  background-color: ${Colors.ORANGE};
  width: 100%;
  height: 30%;
`;

export const Form = styled.View`
  width: 100%;
  height: 47%;
  padding: 15px 20px;
`;

export const InputContainer = styled.View`
  display: flex;
  justify-content: center
  height: 100%;
  padding: 0 5%;
`;

export const Input = styled.TextInput`
  border-bottom-color: ${Colors.BLACK};
  border-bottom-width: 2px;
  color: ${Colors.BLACK}
`;

export const LoginButton = styled.Text`
  color: ${Colors.WHITE};
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
`;

export const LoginButtonContainer = styled.TouchableOpacity`
  background-color: ${Colors.BLACK};
  margin: 20px;
  width: 80%;
  height: 13%;
  border-radius: 20px;
  justify-content: center;
  display: flex;
`;