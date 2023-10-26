import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;
  height: 200px;
  margin: 20px 0;
  border-radius: 10px;
`;
export const Title = styled.Text`
  padding: 8px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backTransparent};
  bottom: 0;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const BannerContainer = styled.View`
  position: relative;
`;

export const Rate = styled.Text`
  padding-left: 14px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 22px;
  font-weight: bold;
`;

export const Votes = styled.Text`
  padding-right: 14px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 22px;
  font-weight: bold;
`;
