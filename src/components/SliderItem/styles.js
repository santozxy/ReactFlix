import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 120px;
    height: 220px;
    margin: 10px 10px;
`

export const BannerItem = styled.Image`
    width:100%;
    height: 170px;
    border-radius: 8px;
`

export const Title = styled.Text`
    padding-top: 8px;
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
`

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Rate = styled.Text`
    padding-left: 4px;
    color: ${props => props.theme.colors.textColor};
    font-size: 12px;
`