import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";

import { SectionTitle } from "./SectionTitle";

import { EDUCATION, EducationHistory } from "../constants/education";

function History(history: EducationHistory) {
  return (
    <VStack alignItems="flex-start" spacing={1}>
      <Text>{history.major}</Text>
      <Text fontSize="sm">{history.school}</Text>
      <Text fontSize="sm">
        {history.startYear} - {history.endYear}
      </Text>
    </VStack>
  );
}

export function Education() {
  return (
    <VStack id="education" alignItems="flex-start" spacing={4}>
      <SectionTitle>Education</SectionTitle>
      <HStack spacing={4}>
        {EDUCATION.map((education) => (
          <History
            key={`${education.school}-${education.major}-${education.endYear}`}
            {...education}
          />
        ))}
      </HStack>
    </VStack>
  );
}
