import { StyleSheet } from "react-native";
import { useEffect, useState, useRef } from "react";

import {
  Container,
  Header,
  HeaderButton,
  BannerContainer,
  Banner,
  ButtonLink,
  Title,
  RatedContainer,
  Rate,
  Votes,
  ListGenres,
  Description,
  SliderMovie
} from "./styles";

import { Modal } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import api, { key } from "../../services/api";
import Genres from "../../components/Genres";
import ModalLink from "../../components/ModalLink";
import { getListMovies } from "../../utils/movie";
import SliderItem from "../../components/SliderItem";
import { saveMovie, haveMovie, deleteMovie } from "../../utils/storage";

function Details() {
  const navigation = useNavigation();

  const scrollViewRef = useRef();

  const route = useRoute();

  const [movie, setMovie] = useState({});

  const [similars, setSimilars] = useState({});

  const [loading, setLoading] = useState(false);

  const [openLink, setOpenLink] = useState(false);

  const [favorited, setFavorited] = useState(false);


  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovie() { //Requisição dos detalhes do filme à partir do ID
      const [movieDetail, movieSimilar] = await Promise.all([
        api.get(`/movie/${route.params?.id}`, {
          params: {
            api_key: key,
            language: "pt-BR",
          }
        }),
        api.get(`/movie/${route.params?.id}/similar`, {
          params: {
            api_key: key,
            language: "pt-BR",
            page: 1,
          }
        }),
      ])
      if (isActive) {
        setMovie(movieDetail.data)
        setSimilars(getListMovies(8, movieSimilar.data.results))
        const isFavorited = await haveMovie(movieDetail.data)
        setFavorited(isFavorited)
      }

    }
    getMovie();
    scrollTop();

    return () => {
      isActive = false;
      ac.abort;
    };
  }, [route]);

  function scrollTop() {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  function navigateDetails(item) {
    navigation.navigate('Details', { id: item.id })
  }

  async function favoriteMovie(movie) {

    if (favorited) {
      await deleteMovie(movie.id);
      setFavorited(false);
      alert('filme foi removido')
    }
    else {
      await saveMovie('@reactflix', movie)
      setFavorited(true);
      alert('filme foi salvo')
    }
  }

  return (
    <Container ref={scrollViewRef} showsVerticalScrollIndicator={false}>
      <Header>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color="#fff"
          />
        </HeaderButton>
        <HeaderButton onPress={() => favoriteMovie(movie)}>
          {favorited ?
            <Ionicons
              name="bookmark"
              size={28}
              color="#fff"
            />
            :
            <Ionicons
              name="bookmark-outline"
              size={28}
              color="#fff"
            />
          }
        </HeaderButton>
      </Header>
      <BannerContainer>
        <Banner
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`, }}
          resizeMethod="resize"
        />
        <ButtonLink onPress={() => setOpenLink(true)}>
          <Feather
            name="link"
            size={28}
            color="#fff"
          />
        </ButtonLink>
      </BannerContainer>

      <Title numberOfLines={1}>{movie.title}</Title>
      <RatedContainer>
        <Rate> <Ionicons name='md-star' size={22} color="#e7a74e" />{movie.vote_average?.toFixed(1)}/10</Rate>
        <Votes><Ionicons name='person' size={22} color="#e7a74e" />{movie.vote_count}</Votes>
      </RatedContainer>
      <ListGenres
        data={movie?.genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres data={item} />}
      />

      <Title>
        Descrição
      </Title>
      <Description>{movie.overview}</Description>
      <Title>
        Filmes parecidos
      </Title>
      <SliderMovie
        horizontal
        showsHorizontalScrollIndicator={false}
        data={similars}
        renderItem={({ item }) => <SliderItem data={item} navigateDetails={() => navigateDetails(item)} />}
        keyExtractor={(item) => String(item.id)}
      />
      <Modal animationType="slide" transparent visible={openLink}>
        <ModalLink link={movie.homepage} title={movie?.title} closeModal={() => setOpenLink(false)} />
      </Modal>
    </Container>
  );
}

export default Details;

const styles = StyleSheet.create({});
