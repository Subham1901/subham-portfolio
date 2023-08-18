import { Box, Button, Container, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import MainContent from "./MainContent";
import Progressbar from "../layouts/Progressbar";
import Aos from "aos";
import { useEffect } from "react";
const Header = () => {
  return (
    <Container
      id="home"
      p={3}
      shadow={" 0 3px 100px rgb(245 245 220 / 0.2"}
      maxW={"fit-content"}
      className="top-container"
    >
      {" "}
      <MainContent />
    </Container>
  );
};

export default Header;
