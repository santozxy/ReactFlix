import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.backTransparent};
  width: 50%;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`;

export const Message = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
