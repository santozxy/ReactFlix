import { Container, BannerItem, Title, RateContainer, Rate } from './styles'
import api from '../../services/api'
import { Ionicons } from '@expo/vector-icons'

const SliderItem = ({ data, navigateDetails }) => {
    return (
        <Container activeOpacity={.8} onPress={() => navigateDetails(data)}>
            <BannerItem source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }} />
            <Title numberOfLines={1} ellipsizeMode='tail'>{data.title}</Title>

            <RateContainer>
                <Ionicons name='md-star' size={22} color="#e7a74e" />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem

