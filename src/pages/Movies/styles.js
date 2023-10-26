import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const MessageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  padding: 10px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ListMovies = styled.FlatList``;
