import { Box, Button, Container, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import MainContent from "./MainContent";
const Header = () => {
  return (
    <Container
      id="/"
      p={2}
      h={"100vh"}
      bgColor={"brand.primary"}
      shadow={" 0 3px 100px rgb(245 245 220 / 0.2"}
      maxW={"fit-content"}
    >
      <MainContent />
    </Container>
  );
};

export default Header;
