import React from "react";
import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

import SectionTitle from "./SectionTitle";

import employmentHistory from "../employment.json";

interface EmploymentHistory {
  startYear: string;
  endYear: string;
  title: string;
  company: string;
  city: string;
  state: string;
  description: string;
  accomplishments: string[];
}

const Job = (history: EmploymentHistory) => {
  return (
    <VStack alignItems="flex-start">
      <Text fontSize="xl">
        {history.title}, {history.company}
      </Text>
      <Text fontSize="sm">
        {history.city}, {history.state} | {history.startYear} -{" "}
        {history.endYear}
      </Text>
      <Text>{history.description}</Text>
      {!!history.accomplishments.length && (
        <UnorderedList>
          {history.accomplishments.map((a) => (
            <ListItem key={a} marginLeft={12}>
              {a}
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </VStack>
  );
};

const Employment = () => {
  return (
    <VStack id="#employment" alignItems="flex-start" spacing={4}>
      <SectionTitle>Employment</SectionTitle>
      {(employmentHistory as EmploymentHistory[]).map((employment) => (
        <Job
          key={`${employment.title}-${employment.company}-${employment.endYear}`}
          {...employment}
        />
      ))}
    </VStack>
  );
};

export default Employment;
