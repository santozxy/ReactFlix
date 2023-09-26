import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import {
  Container,
  SearchContainer,
  Input, SearchButton,
  Title, BannerButton,
  Banner
} from './styles'

import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header'

const Home = () => {
  return (
    <Container>
      <Header title={"React Flix"} />
      <SearchContainer>
        <Input
          placeholder="Ex Vingadores" placeholderTextColor='#ccc' />
        <SearchButton>
          <Feather name='search' size={30} color='#fff' />
        </SearchButton>
      </SearchContainer>
      <ScrollView>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={.8} onPress={()=> alert('teste')}>
          <Banner
            source={{ uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*qdHImq1G588SB9Ii.jpg' }} resizeMethod='resize'
          />
        </BannerButton>
      </ScrollView>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})