import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <VStack id="about" alignItems="flex-start" spacing={4}>
      <SectionTitle>About Me</SectionTitle>
      <Text>
        Hello, I&apos;m Nick, a software development engineer living and working
        in the Pacific Northwest. I enjoy creating web applications, finding
        creative ways to parse the internet and learning new tools and
        technologies to help aid me in my day-to-day tasks.
      </Text>
    </VStack>
  );
};

export default About;
