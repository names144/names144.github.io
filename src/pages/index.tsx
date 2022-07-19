import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Employment from "../components/Employment";

const IndexPage = () => {
  return (
    <Container py={4}>
      <Box marginBottom={10}>
        <Nav />
      </Box>
      <VStack as="main" spacing={10}>
        <Header />
        <About />
        <Employment />
      </VStack>
    </Container>
  );
};

export default IndexPage;
