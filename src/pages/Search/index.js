import { useEffect, useState } from 'react'
import { Container, ListMovies, SearchContainer, SearchButton, Input } from './styles'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import SliderItem from '../../components/SliderItem'
import Loading from '../../components/Loading'


function Search({ navigation }) {
  const route = useRoute();

  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(route.params.name);

  useEffect(() => {
    let isActive = true
    async function getSearchMovie() {
      const response = await api.get(`/search/movie`, {
        params: {
          query: search,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      })
      if (isActive) {
        setMovies(response.data.results);
        setLoading(false)
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
      setLoading(true)
    }
  }, [search])

  function navigateDetails(item) {
    navigation.navigate('Details', { id: item.id })
  }


  const filteredMovies = movies.filter(item => item.release_date !== null && item.poster_path !== null);

  return (
    <Container>
      <SearchContainer>
        <Input
          placeholder="Pesquisar por..."
          placeholderTextColor='#ccc'
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <SearchButton onPress={() => console.log('')}>
          <Feather name='search' size={30} color='#e72f49' />
        </SearchButton>
      </SearchContainer>
      {
        loading ?
          <Loading /> :
          <ListMovies
            data={filteredMovies}
            numColumns={3}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <SliderItem data={item} navigateDetails={() => navigateDetails(item)} />} />
      }
    </Container>
  )
}

export default Search