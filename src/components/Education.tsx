import React from "react";
import { Text, VStack } from "@chakra-ui/react";

import SectionTitle from "./SectionTitle";

import educationHistory from "../education.json";

interface EducationHistory {
  startYear: string;
  endYear: string;
  school: string;
  major: string;
}

const History = (history: EducationHistory) => {
  return (
    <VStack alignItems="flex-start" spacing={1}>
      <Text>{history.major}</Text>
      <Text fontSize="sm">{history.school}</Text>
      <Text fontSize="sm">
        {history.startYear} - {history.endYear}
      </Text>
    </VStack>
  );
};

const Education = () => {
  return (
    <VStack id="#education" alignItems="flex-start" spacing={4}>
      <SectionTitle>Education</SectionTitle>
      {(educationHistory as EducationHistory[]).map((education) => (
        <History
          key={`${education.school}-${education.major}-${education.endYear}`}
          {...education}
        />
      ))}
    </VStack>
  );
};

export default Education;
