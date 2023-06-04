import React from "react";
import { Container } from "./loading.styles";

export default function Loading() {
  return (
    <Container className="loader-container">
      <div className="spinner"></div>
    </Container>
  );
}
