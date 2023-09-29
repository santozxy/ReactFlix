import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 16px;
    width: 100%;
    height: 200px;
    margin-bottom: 100px;
`
export const Title = styled.Text`
    padding: 20px 14px 8px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`
export const Banner = styled.Image`
    width: 100%;
    height: 200px;
    object-fit: cover;
`


export const RatedContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`

export const Rate = styled.Text`
    padding-left: 14px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`

export const Votes = styled.Text`
    padding-right: 14px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`