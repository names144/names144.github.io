import React from "react";
import { Box, Container, LinkProps, Link, useTheme } from "@chakra-ui/react";

type NavLinkProps = LinkProps;

const NavLink = ({ sx = {}, ...rest }: NavLinkProps) => {
  return <Link sx={{ mr: 2, ...sx }} {...rest} />;
};

const IndexPage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box as="nav" sx={{ display: "flex" }}>
        <NavLink href="#" sx={{ mr: 4 }}>
          <Box as="span" color={theme.colors.primary.main}>
            N
          </Box>
          AMES
        </NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#employment">Employment</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
      </Box>
    </Container>
  );
};

export default IndexPage;
