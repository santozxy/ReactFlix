import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, Banner, BannerContainer } from './styles'

import { Ionicons } from '@expo/vector-icons'


export default function FavoriteItem({ data, navigateDetails }) {
    return (
        <Container onPress={() => navigateDetails(data)}>
            <BannerContainer>
                <Banner source={{ uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}` }} />
                <Title>{data.title}</Title>
            </BannerContainer>
        </Container>
    )
}