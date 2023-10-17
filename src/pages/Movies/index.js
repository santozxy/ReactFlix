import { useState, useEffect } from "react";
import { Container, ListMovies } from "./styles";
import Header from "../../components/Header";
import { useIsFocused } from "@react-navigation/native";

import { getMoviesSave } from "../../utils/storage";
import FavoriteItem from "../../components/FavoriteItem";
import Loading from "../../components/Loading";

function Movies({ navigation }) {
  const focused = useIsFocused();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    async function getFavoriteMovies() {
      const result = await getMoviesSave("@reactflix");
      if (isActive) {
        setMovies(result);
      }
    }
    if (isActive) {
      getFavoriteMovies();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    return () => {
      isActive = false;
      setLoading(true);
    };
  }, [focused]);

  function navigateDetails(item) {
    navigation.navigate("Details", { id: item.id });
  }

  return (
    <Container>
      <Header title="Meus filmes" />
      {loading ? (
        <Loading />
      ) : (
        <ListMovies
          showsVerticalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <FavoriteItem
              data={item}
              navigateDetails={() => navigateDetails(item)}
            />
          )}
        />
      )}
    </Container>
  );
}

export default Movies;
