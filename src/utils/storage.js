import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os filmes
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key)
    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

//Salvar filme
export async function saveMovie(key, newMovie) {
    let moviesStorage = await getMoviesSave(key);
    //Verificação para não haver filmes duplicados
    const haveMovie = moviesStorage.some(item => item.id === newMovie.id);
    if (haveMovie) {
        console.log("ESSE FILME JÀ EXISTE");
        return;
    }
    moviesStorage.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStorage));
    console.log("SALVO COM SUCESSO")
}

//Deletar filme
export async function deleteMovie(id) {
    let moviesStorage = await getMoviesSave('@reactflix');
    let myMovies = moviesStorage.filter(item => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('@reactflix', JSON.stringify(myMovies));
    console.log("DELETADO COM SUCESSO")
    return myMovies;
}

//Filtrar filmes
export async function haveMovie(movie) {
    let moviesStorage = await getMoviesSave('@reactflix');
    const haveMovie = moviesStorage.find(item => item.id === movie.id)
    if (haveMovie) {
        return true;
    }
    return false;
}