import { useState, useEffect } from "react";
import { Container, Title, ListMovies, MessageContainer } from "./styles";
import Header from "../../components/Header";
import { useIsFocused } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { getMoviesSave } from "../../utils/storage";
import FavoriteItem from "../../components/FavoriteItem";
import Loading from "../../components/Loading";

function Movies({ navigation }) {
  const { colors } = useTheme();
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
    navigation.navigate("Details", { id: item.id, link: "Movies" });
  }

  return (
    <Container>
      <Header title="Meus filmes" />
      {loading ? (
        <Loading />
      ) : movies.length === 0 ? (
        <MessageContainer>
          <MaterialCommunityIcons
            name="movie-open-off"
            size={40}
            color={colors.primary}
          />
          <Title>Você não possui nenhum filme salvo</Title>
        </MessageContainer>
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
