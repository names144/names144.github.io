import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Text, VStack, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack id="#" alignItems="center" alignSelf="center">
      <Box sx={{ borderRadius: "100%", overflow: "hidden", maxW: 100 }}>
        <StaticImage src="../images/me.jpeg" alt="Nick Ames" />
      </Box>
      <Text as="h1" fontSize="2xl">
        Nicholas Ames
      </Text>
      <Text>Software Development Engineer</Text>
      <Link href="https://www.linkedin.com/in/names144/" isExternal>
        https://www.linkedin.com/in/names144/
      </Link>
    </VStack>
  );
};

export default Header;
