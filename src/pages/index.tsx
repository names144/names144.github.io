import React from "react";
import { Container, VStack } from "@chakra-ui/react";

import Header from "../components/Header";
import About from "../components/About";
import Employment from "../components/Employment";
import Education from "../components/Education";

const IndexPage = () => {
  return (
    <Container py={4} position="relative" maxW="container.md">
      <VStack as="main" spacing={10} alignItems="flex-start">
        <Header />
        <About />
        <Employment />
        <Education />
      </VStack>
    </Container>
  );
};

export default IndexPage;
