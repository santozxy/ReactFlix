import { StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {
  Container,
  SearchContainer,
  Input, SearchButton,
  Title, BannerButton,
  Banner, SliderMovie,
  BannerTitle
} from './styles'

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header'
import SliderItem from '../../components/SliderItem';
import api, { key } from '../../services/api';
import { getListMovies } from '../../utils/movie';
import Loading from '../../components/Loading';


const Home = ({ navigation }) => {

  const focused = useIsFocused();

  const [search, setSearch] = useState('');

  const [bannerMovie, setBannerMovie] = useState({})

  const [nowMovies, setNowMovies] = useState([])

  const [popularMovies, setPopularMovies] = useState([])

  const [topMovies, setTopMovies] = useState([])

  const [loading, setLoading] = useState(true)

  const width = Dimensions.get('window').width;

  // const response = await api.get('/movie/now_playing', {
  //   params: {
  //     api_key: key,
  //     language: 'pt-BR',
  //     page: 1,
  //   }
  // })

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
      ])

      if (isActive) {
        const nowList = getListMovies(10, nowData.data.results)
        const popularList = getListMovies(10, popularData.data.results)
        const topList = getListMovies(10, topData.data.results)

        setBannerMovie(nowData.data.results)

        setPopularMovies(popularList);
        setTopMovies(topList);
        setLoading(false)
      }

    }
    getMovies();
    return () => {
      isActive = false;
      ac.abort;
    }
  }, [focused])


  function navigateDetails(item) {
    navigation.navigate('Details', { id: item.id })
  }

  function handleSearch() {
    if (search === '') return;
    navigation.navigate('Search', { name: search })
    setSearch("")
  }

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }
  return (
    <Container>
      <Header title={"React Flix"} />
      <SearchContainer>
        <Input
          placeholder="Pesquisar por..."
          placeholderTextColor='#ccc'
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <SearchButton onPress={handleSearch}>
          <Feather name='search' size={30} color='#e72f49' />
        </SearchButton>
      </SearchContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <Carousel
          loop
          width={width}
          height={width / 1.7}
          autoPlay={true}
          data={bannerMovie}
          scrollAnimationDuration={2500}
          renderItem={({ item }) => (
            <BannerButton activeOpacity={.8} onPress={() => navigateDetails(item)}>
              <Banner
                source={{ uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}` }} resizeMethod='resize'
              />
              <BannerTitle><MaterialCommunityIcons name='movie-open' color="#e72f49" size={17} /> {item.title}</BannerTitle>
            </BannerButton>
          )}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderItem data={item} navigateDetails={() => navigateDetails(item)} />}
        />
        <Title>Mais votados</Title>
        <SliderMovie
          horizontal
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SliderItem data={item} navigateDetails={() => navigateDetails(item)} />}
        />
      </ScrollView>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})