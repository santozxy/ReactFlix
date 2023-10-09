import styled from "styled-components/native";


export const Container = styled.View`
    align-items: center;
    justify-content:center;
    margin-right:8px;
    padding: 5px 8px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.primary};
`

export const Name = styled.Text`
    color: ${props => props.theme.colors.textColor};
    font-weight: bold;
`