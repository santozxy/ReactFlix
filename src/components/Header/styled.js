import styled from "styled-components/native";

export const Container = styled.View`
    height: 80px;
    flex-direction: row;
    align-items: center;
    padding-left: 14px;
    margin-top: 20px;
`

export const MenuButton = styled.TouchableOpacity`
    height: 80px;
    align-items: center;
    flex-direction: row;
`

export const Title = styled.Text`
    color:${props => props.theme.colors.textColor};
    font-size: 30px;
    font-weight: bold;
    margin-left: 14px;
`

