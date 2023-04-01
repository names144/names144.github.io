import React, { memo } from "react";
import { Text, useTheme, TextProps } from "@chakra-ui/react";

export const SectionTitle = memo(function SectionTitle(props: TextProps) {
  const theme = useTheme();
  return (
    <Text as="h2" fontSize="2xl" color={theme.colors.primary.main} {...props} />
  );
});
