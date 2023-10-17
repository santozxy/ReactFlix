import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, Banner, BannerContainer } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FavoriteItem({ data, navigateDetails }) {
    return (
        <Container onPress={() => navigateDetails(data)}>
            <BannerContainer>
                <Banner source={{ uri: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}` }} />
                <Title><MaterialCommunityIcons name='movie-open' color="#e72f49" size={17} />  {data.title}</Title>
            </BannerContainer>
        </Container>
    )
}