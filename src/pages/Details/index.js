import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import {
  Container,
  Header,
  HeaderButton,
  BannerContainer,
  Banner,
  ButtonLink,
  Title,
  Rate,
  ListGenres
} from "./styles";

import { Feather, Ionicons } from "@expo/vector-icons";

import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

import api, { key } from "../../services/api";
import Genres from "../../components/Genres";

function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovie() { //Requisição dos detalhes do filme à partir do ID
      const response = await api
        .get(`/movie/${route.params?.id}`, {
          params: {
            api_key: key,
            language: "pt-BR",
          },
        })
        .catch((err) => {
          console.log(err);
        });
      if (isActive) {
        setMovie(response.data);
      }
    }
    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
      ac.abort;
    };
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color="#fff"
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons
            name="bookmark"
            size={28}
            color="#fff"
          />
        </HeaderButton>
      </Header>
      <BannerContainer>
        <Banner
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`, }}
          resizeMethod="resize"
        />
        <ButtonLink>
          <Feather
            name="link"
            size={28}
            color="#fff"
          />
        </ButtonLink>
      </BannerContainer>

      <Title numberOfLines={1}>{movie.title}</Title>

      <Rate>{movie.vote_average}/10</Rate>
      <ListGenres
        data={movie?.genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres data={item} />}
      />
    </Container>
  );
}

export default Details;

const styles = StyleSheet.create({});
