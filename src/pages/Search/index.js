import { useEffect, useState } from 'react'
import { Container, ListMovies, Name } from './styles'
import { ActivityIndicator } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import SliderItem from '../../components/SliderItem'


function Search({ name }) {
  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const route = useRoute();

  useEffect(() => {
    let isActive = true
    async function getSearchMovie() {
      const response = await api.get(`/search/movie`, {
        params: {
          query: route?.params.name,
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
    }
  }, [])

  function navigateDetails(item) {
    navigation.navigate('Details', { id: item.id })
  }

  if (loading) {
    return;
  }

  const filteredMovies = movies.filter(item => item.release_date !== '');

  return (
    <Container>
      <ListMovies
        data={filteredMovies}
        numColumns={3}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <SliderItem data={item} navigateDetails={() => navigateDetails(item)} />} />
    </Container>
  )
}

export default Search