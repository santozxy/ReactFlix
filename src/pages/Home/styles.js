import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
`;
export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 24px;
  font-weight: bold;
`;

export const BannerButton = styled.TouchableOpacity`
  margin: 0 14px;
`;

export const Banner = styled.Image`
  height: 230px;
  border-radius: 6px;
`;

export const BannerTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.backTransparent};
  position: absolute;
  bottom: 0;
  padding: 8px;
`;

export const SliderMovie = styled.FlatList`
  flex: 1;
`;
