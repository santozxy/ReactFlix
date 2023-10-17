import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 100px;
  width: 150px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: bold;
`;
