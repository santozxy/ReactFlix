import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:${props => props.theme.colors.secondary};
    height: 100%;
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
export const ListMovies = styled.FlatList`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const Name = styled.Text`
`