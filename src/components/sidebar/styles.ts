import styled from "styled-components/native";
import { Colors } from "../../utils/ColorsEnum";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
  padding: 0;
  justify-content: space-between;
  height: 100%;
	padding-vertical: 50px;
	padding-horizontal: 20px;
	display: flex;
	flex-direction: column;
  height: 100%;
`;