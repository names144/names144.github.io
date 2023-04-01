import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Container, VStack, Link, Text } from "@chakra-ui/react";

export function Head() {
  return (
    <>
      <meta name="description" content="Resume site for Nicholas Ames" />
      <title>Nicholas Ames | 404</title>
    </>
  );
}

export default function NotFoundPage() {
  return (
    <Container as="main" py={4}>
      <VStack>
        <Text as="h1" fontSize="2xl">
          Page not found
        </Text>
        <Text>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </Text>
        <Link as={GatsbyLink} to="/">
          Go home
        </Link>
      </VStack>
    </Container>
  );
}
