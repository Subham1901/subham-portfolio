import React from "react";
import node from "./assets/nodejs.png";
import express from "./assets/express.png";
import mongo from "./assets/mongo.png";
import react from "./assets/react.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import js from "./assets/Javascript.png";
import css from "./assets/css.png";
import java from "./assets/java.png";
import chakra from "./assets/chakra.png";
import api from "./assets/api.png";
import redux from "./assets/redux.webp";
import tailwind from "./assets/tailwind.png";
import sql from "./assets/mysql.png";
import {
  Container,
  HStack,
  Avatar,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "../index.css";
function Tech() {
  return (
    <Container maxW={["container.lg"]} mt={16}>
      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
        Skills & Experiences
      </h1>
      <Stack
        display={"flex"}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
      >
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={node} />
          <Text>NodeJs</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={express} />
          <Text>ExpressJs</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={react} />
          <Text>ReactJs</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={mongo} />
          <Text>MongoDB</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={js} />
          <Text>Javascript</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={html} />
          <Text>HTML</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={css} />
          <Text>CSS</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={git} />
          <Text>GIT ( Version Control )</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={chakra} />
          <Text>Chakra UI</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={java} />
          <Text>Java</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={api} />
          <Text>API</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={sql} />
          <Text>MySQL</Text>
        </VStack>
      </Stack>

      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mt-10 text-gray-900">
        Exploring
      </h1>
      <HStack
        display={"flex"}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
      >
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={redux} />
          <Text>Redux</Text>
        </VStack>
        <VStack>
          <Avatar m={3} size={["lg", "xl"]} name="node" src={tailwind} />
          <Text>Tailwind CSS</Text>
        </VStack>
      </HStack>
    </Container>
  );
}

export default Tech;
