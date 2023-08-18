import {
  Img,
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import React, { useRef } from "react";
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
import Progressbar from "../layouts/Progressbar";
import Aos from "aos";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container data-aos="fade-up" id="skill" p={2} maxW={"100%"}>
      <Heading
        p={5}
        textAlign={"left"}
        color={"brand.secondary"}
        fontFamily={"font"}
        fontWeight={"normal"}
      >
        Skills & Experience
      </Heading>
      <Stack
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <Box
          p={2}
          borderRadius={"md"}
          display={"flex"}
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          alignItems={"center"}
        >
          <Swing>
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              name="node"
              src={node}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              name="node"
              src={express}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              name="node"
              src={react}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              name="node"
              src={redux}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={mongo}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={js}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              w={["40px", "80px"]}
              objectFit={"cover"}
              m={3}
              size={["md", "xl"]}
              name="node"
              src={git}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={chakra}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={java}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={api}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={sql}
            />
          </Swing>
          <Swing>
            {" "}
            <Img
              m={3}
              w={["40px", "80px"]}
              objectFit={"cover"}
              size={["md", "xl"]}
              name="node"
              src={firebase}
            />
          </Swing>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          padding={10}
          className="skill-progress"
        >
          <div className="bars">
            <Progressbar name={"Front-End"} percent={85} />
          </div>
          <div className="bars">
            <Progressbar name={"Back-End"} percent={60} />
          </div>
          <div className="bars">
            <Progressbar name={"Full-Stack"} percent={72} />
          </div>
        </Box>
      </Stack>
    </Container>
  );
};

export default Skills;
