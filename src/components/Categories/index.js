import React from "react";
import { Container, Title } from "./styles";

export default function Categories({ categorie }) {
  return (
    <Container>
      <Title>{categorie}</Title>
    </Container>
  );
}
