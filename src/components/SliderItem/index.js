import { Container, BannerItem, Title, RateContainer, Rate } from './styles'
import { Ionicons } from '@expo/vector-icons'
import Loading from '../Loading'

const SliderItem = ({ data, navigateDetails,loading }) => {
    return (
        <Container activeOpacity={.8} onPress={() => navigateDetails(data)}>
            <BannerItem source={{ uri: `https://image.tmdb.org/t/p/w154/${data.poster_path}` }} />
            <Title numberOfLines={1} ellipsizeMode='tail'>{data.title}</Title>

            <RateContainer>
                <Ionicons name='md-star' size={22} color="#e7a74e" />
                <Rate>{data.vote_average.toFixed(1)}/10</Rate> 
            </RateContainer>
        </Container>
    )
}

export default SliderItem

