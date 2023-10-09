import styled from "styled-components/native";


export const Backbutton = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${props => props.theme.colors.secondary};
    margin-top: 60px;
    flex-direction: row;
    align-items: center;
`
export const Name = styled.Text`
    margin-left: 8px;
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
    font-weight: bold;
`

export const Alert = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Error = styled.Text`
    text-align:center;
    color: ${props => props.theme.colors.primary};
    font-size: 25px;
    font-weight: bold;
    height: 250px;
    margin-top: 10px;
`
