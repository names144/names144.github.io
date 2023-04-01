import React from "react";
import { Container, VStack } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { About } from "../components/About";
import { Employment } from "../components/Employment";
import { Education } from "../components/Education";

export function Head() {
  return (
    <>
      <meta name="description" content="Resume site for Nicholas Ames" />
      <title>Nicholas Ames</title>
    </>
  );
}

export default function IndexPage() {
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
}
