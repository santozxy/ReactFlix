import { useState, useEffect } from 'react';
import { Container, ListMovies } from './styles'
import Header from '../../components/Header'
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { getMoviesSave } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';


function Movies() {
    const navigation = useNavigation();
    const focused = useIsFocused();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let isActive = true
        async function getFavoriteMovies() {
            const result = await getMoviesSave('@reactflix');
            if (isActive) {
                setMovies(result);
            }
        }
        if (isActive) {
            getFavoriteMovies()
        }
        return () => {
            isActive = false
        }
    }, [focused])

    function navigateDetails(item) {
        navigation.navigate('Details', { id: item.id })
    }

    return (
        <Container>
            <Header title='Meus filmes' />
            <ListMovies
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <FavoriteItem data={item} navigateDetails={() => navigateDetails(item)} />}
            />
        </Container>
    )
}

export default Movies

