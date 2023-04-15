import {
  Img,
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import react from "../assets/react.webp";
import node from "../assets/nodejs.webp";
import mongo from "../assets/mongo.webp";
import api from "../assets/api.webp";
import git from "../assets/git.webp";
import express from "../assets/express.webp";
import redux from "../assets/redux.webp";
import java from "../assets/java.webp";
import chakra from "../assets/chakra.webp";
import html from "../assets/html.webp";
import js from "../assets/Javascript.webp";
import css from "../assets/css.webp";
import sql from "../assets/mysql.webp";
import firebase from "../assets/firebase.webp";
import Swing from "react-reveal/Swing";
const Skills = () => {
  return (
    <Container p={2} maxW={"100%"} bgColor={"brand.skill"}>
      <Heading
        p={5}
        textAlign={"center"}
        color={"brand.secondary"}
        fontFamily={"font"}
        fontWeight={"extrabold"}
      >
        Skills & Experience
      </Heading>
      <Stack justifyContent={"center"} display={"flex"} alignItems={"center"}>
        <Swing>
          <Box
            p={2}
            borderRadius={"md"}
            shadow={"sm"}
            w={["xs", "2xl"]}
            display={"flex"}
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            alignItems={"center"}
          >
            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={node}
            />

            <Img
              m={3}
              w={"80px"}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={express}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={react}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={redux}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={mongo}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={js}
            />

            <Img
              w={["50px", "80px"]}
              objectFit={"cover"}
              m={3}
              size={["md", "xl"]}
              name="node"
              src={git}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={chakra}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={java}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={api}
            />

            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={sql}
            />
            <Img
              m={3}
              w={["50px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={firebase}
            />
          </Box>
        </Swing>
      </Stack>
    </Container>
  );
};

export default Skills;
