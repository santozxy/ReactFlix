import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: bold;
`;
