import styled from "styled-components/native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


export const Container = styled.SafeAreaView`
    background-color: ${props => props.theme.colors.secondary};
    flex: 1;
    padding: 4px 0 50px;
`


export const SearchContainer = styled.View`
   flex-direction: row;
   width: 100%;
   height: 50px;
   align-items: center;
   justify-content: space-between;
   padding: 0 14px;
   margin-bottom: 8px;
`

export const Input = styled.TextInput`
    background-color: rgba(255,255,255,0.4);
    width: 85%;
    height: 42px;
    border-radius: 8px;
    padding: 8px 15px;
    font-size: 18px;
    color: ${props => props.theme.colors.textColor};
`

export const SearchButton = styled.TouchableOpacity`
   height: 50px;
   align-items: center;
   justify-content: center;
`

export const Title = styled.Text`
    padding: 20px 14px 8px;
    color: ${props => props.theme.colors.textColor};
    font-size: 24px;
    font-weight: bold;
`

export const BannerButton = styled.TouchableOpacity`
    margin: 0 14px;
    `

export const Banner = styled.Image`
    height: 230px;
    border-radius: 6px;
    `

export const BannerTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.backTransparent};
    position: absolute;
    bottom: 0;
    padding: 8px;
`

export const SliderMovie = styled.FlatList`
    height: 250px;

`
