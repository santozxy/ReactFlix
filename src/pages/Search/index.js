import { useEffect, useState } from "react";
import {
  Container,
  ListMovies,
  SearchContainer,
  SearchButton,
  Input,
  ListCategories,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import api, { key } from "../../services/api";
import SliderItem from "../../components/SliderItem";
import Loading from "../../components/Loading";
import Categories from "../../components/Categories";

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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
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
    navigation.navigate("Details", { id: item.id });
  }

  const filteredMovies = movies.filter(
    (item) => item.release_date !== null && item.poster_path !== null
  );

  const categories = [
    {
      id: 1,
      title: "Ação",
    },
    {
      id: 2,
      title: "Terror",
    },
    {
      id: 3,
      title: "Thriller",
    },
    {
      id: 4,
      title: "Drama",
    },
    {
      id: 5,
      title: "Comédia",
    },
    {
      id: 6,
      title: "Família",
    },
    {
      id: 6,
      title: "Animação",
    },
    {
      id: 6,
      title: "Sci-Fi",
    },
  ];

  return (
    <Container>
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

      {search === "" ? (
        <ListCategories
          data={categories}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Categories categorie={item.title} />}
        />
      ) : loading ? (
        <Loading />
      ) : (
        <ListMovies
          data={filteredMovies}
          numColumns={3}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigateDetails={() => navigateDetails(item)}
            />
          )}
        />
      )}
    </Container>
  );
}

export default Search;
