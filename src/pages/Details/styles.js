import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
`;

export const ContainerLoad = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 4px 0 50px;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: #1d1d1dcc;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0.6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ToastifyContainer = styled.View`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 7%;
  padding: 0 20px;
`;

export const BannerContainer = styled.TouchableOpacity`
  position: relative;
`;

export const ButtonLink = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  width: 60px;
  height: 60px;
  border-radius: 35px;
  position: absolute;
  right: 5px;
  bottom: -20px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
`;
export const RatedContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Rate = styled.Text`
  padding-left: 14px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
`;

export const Votes = styled.Text`
  padding-right: 14px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
`;

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 40px;
  min-height: 40px;
`;

export const Description = styled.Text`
  padding: 0 14px 30px;
  color: ${(props) => props.theme.colors.textColor};
  line-height: 20px;
`;

export const SliderMovie = styled.FlatList`
  height: 300px;
`;
