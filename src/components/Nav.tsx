import React, { useEffect, useState } from "react";
import { Box, LinkProps, Link, useTheme, HStack } from "@chakra-ui/react";

const NAV_LINKS = [
  { href: "#about", text: "About" },
  { href: "#employment", text: "Employment" },
  { href: "#education", text: "Education" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
];

type NavLinkProps = LinkProps & {
  active?: boolean;
};

const NavLink = ({ sx = {}, active, ...rest }: NavLinkProps) => {
  return (
    <Link
      sx={{ mr: 2, textDecoration: active ? "underline" : "none", ...sx }}
      {...rest}
    />
  );
};

const isBrowser = () => typeof window !== "undefined";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const theme = useTheme();

  useEffect(() => {
    if (isBrowser()) setActiveNav(window.location.hash ?? "#");
  }, []);

  return (
    <HStack as="nav" spacing={8}>
      <NavLink href="#" onClick={() => setActiveNav("#")}>
        <Box as="span" color={theme.colors.primary.main}>
          N
        </Box>
        AMES
      </NavLink>
      {NAV_LINKS.map(({ href, text }) => (
        <NavLink
          key={href}
          href={href}
          active={activeNav === href}
          onClick={() => setActiveNav(href)}
        >
          {text}
        </NavLink>
      ))}
    </HStack>
  );
};

export default Nav;
