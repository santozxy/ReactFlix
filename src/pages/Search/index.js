import { useEffect, useState } from "react";
import {
  Container,
  ListMovies,
  SearchContainer,
  SearchButton,
  Input,
  ListContainer,
} from "./styles";

import { Feather } from "@expo/vector-icons";

import api, { key } from "../../services/api";
import Header from "../../components/Header";
import SliderItem from "../../components/SliderItem";
import Loading from "../../components/Loading";

function Search({ navigation }) {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    let isActive = true;
    async function getSearchMovie() {
      const response = await api.get(`/search/movie`, {
        params: {
          query: search,
          api_key: key,
          language: "pt-BR",
          page: 1,
        },
      });
      if (isActive) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
      setLoading(true);
    };
  }, [search]);

  function navigateDetails(item) {
    navigation.navigate("Details", { id: item.id, link: "Search" });
  }

  const filteredMovies = movies.filter(
    (item) => item.release_date !== null && item.poster_path !== null
  );

  return (
    <Container>
      <Header title="Descobrir" />
      <SearchContainer>
        <Input
          placeholder="Pesquisar por..."
          placeholderTextColor="#ccc"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <SearchButton onPress={() => console.log("")}>
          <Feather name="search" size={30} color="#e72f49" />
        </SearchButton>
      </SearchContainer>

      {loading ? (
        <Loading />
      ) : (
        <ListContainer>
          <ListMovies
            data={filteredMovies}
            numColumns={3}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <SliderItem
                width="100%"
                data={item}
                navigateDetails={() => navigateDetails(item)}
              />
            )}
          />
        </ListContainer>
      )}
    </Container>
  );
}

export default Search;
