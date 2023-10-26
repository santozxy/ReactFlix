import { View, Text } from "react-native";
import React from "react";
import { Container, Message } from "./styles";
import { LinearProgress } from "@rneui/themed";
import { useTheme } from "styled-components/native";

export default function Toastify({ message }) {
  const { colors } = useTheme();
  return (
    <Container>
      <Message>{message}</Message>
      <LinearProgress
        variant="indeterminate"
        color={colors.textColor}
        style={{
          position: "absolute",
          bottom: 0,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
    </Container>
  );
}
