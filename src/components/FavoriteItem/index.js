import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, Banner, RatedContainer, Rate, Votes } from './styles'

import { Ionicons } from '@expo/vector-icons'


export default function FavoriteItem({ data, navigateDetails }) {
    return (
        <Container onPress={() => navigateDetails(data)}>
            <Title>{data.title}</Title>
            <Banner source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }} />
            <RatedContainer>
                <Rate> <Ionicons name='md-star' size={22} color="#e7a74e" />{data.vote_average?.toFixed(1)}/10</Rate>
                <Votes><Ionicons name='person' size={22} color="#e7a74e" />{data.vote_count}</Votes>
            </RatedContainer>
        </Container>
    )
}