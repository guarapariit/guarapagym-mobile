import styled from 'styled-components/native';
import { Colors } from '../../utils/ColorsEnum';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.SALMON};
  padding: 20px 30px;
  justify-content: space-between;
`;

export const Description = styled.Text`
  margin: 64px 0 24px 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 28px;

  color: ${Colors.BLACK};
`;

export const Highlight = styled.Text`
  color: ${Colors.ORANGE};
`;

export const Header = styled.Text``;

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
  width: 95%;
  height: 75px;
  border-radius: 20px;
  justifyContent: center;
  display: flex;
`;