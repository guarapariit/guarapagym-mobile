import styled from "styled-components/native";
import { Colors } from "../../utils/ColorsEnum";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.WHITE};
  padding: 0 10px;
  margin: 0;
`;

export const Header = styled.View`
  width: 100%;
  height: 7%;
`;

export const MonthContainer = styled.View`
  margin: 17px 0;
  padding: 10px;
`;

export const MonthName = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  padding-left: 5px;
`;

export const ExercisesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${Colors.BLACK};
  border-bottom-width: 1px;
  padding: 12px 0;
`;

export const TextItem = styled.View`
  width: 30%;
`;

export const Day = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ExerciseName = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
