// Gerar uma lista de filmes de acordo com o tamanho passado

export function getListMovies(size, movies) {
    let popularMovies = [];

    for (let i = 0, l = size; i < l; i++) {
        popularMovies.push(movies[i]);
    }
    return popularMovies;
}

// Gerar um número aleatoria com base no tamanho da lista de filmes que eu passar


export function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length);
}