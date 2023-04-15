import { Box, Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import MainContent from "./MainContent";
const Header = () => {
  return (
    <Container
      p={2}
      h={"60rem"}
      bgColor={"brand.primary"}
      shadow={" 0 3px 100px rgb(245 245 220 / 0.2"}
      maxW={"fit-content"}
    >
      <Box
        p={4}
        shadow={"lg"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading
          cursor={"pointer"}
          fontSize={["20px", "25px", , "2xl"]}
          textTransform={"uppercase"}
          letterSpacing={"3px"}
          fontFamily={"font"}
          color={"brand.secondary"}
        >
          {"<subham />"}
        </Heading>
        <Button p={0} bgColor={"brand.secondary"} borderRadius={"full"}>
          <MdMenuOpen size={30} />
        </Button>
      </Box>
      <MainContent />
    </Container>
  );
};

export default Header;
