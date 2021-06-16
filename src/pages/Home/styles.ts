import styled from "styled-components/native";
import { Colors } from "../../utils/ColorsEnum";

export const Container = styled.ScrollView`
  background-color: ${Colors.WHITE};
  padding: 0 10px;
  margin: 0;
`;

export const Header = styled.View`
  width: 100%;
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

export const ExercisesContainer = styled.View``;

export const ExerciseHeader = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${Colors.BLACK};
  border-bottom-width: 1px;
  padding: 12px 0;
`;

export const ExerciseBody = styled.View`
  margin: 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ExerciseSetItem = styled.View``;
export const ExerciseSetTraining = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: ${Colors.BROWN};
  width: 50%;
`;

export const ExerciseVideo = styled.TouchableOpacity`
  background-color: ${Colors.SALMON};  
  padding: 1px 7px;
  border-radius: 8px;
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
