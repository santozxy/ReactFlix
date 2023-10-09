import styled from "styled-components/native";



export const Container = styled.SafeAreaView`
    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.secondary};
`

export const Message = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.textColor};
    text-align: center;
`
export const Loader = styled.ActivityIndicator`
`

