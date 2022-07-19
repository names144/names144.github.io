import React from "react";
import { Text, useTheme, TextProps } from "@chakra-ui/react";

const SectionTitle = (props: TextProps) => {
  const theme = useTheme();
  return (
    <Text as="h2" fontSize="2xl" color={theme.colors.primary.main} {...props} />
  );
};

export default SectionTitle;
