import {
  Card,
  CardHeader,
  Container,
  HStack,
  SimpleGrid,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Tag,
  Code,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ProjectList } from "./projectlist";

export default function Projects() {
  return (
    <Container maxW={"container.xl"}>
      <h1 className="sm:text-3xl text-2xl text-center  font-medium title-font mb-10 text-gray-900">
        My Projects
      </h1>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {ProjectList.map((project) => (
          <Card p={"3"}>
            <a target="_blank" href={project.live}>
              <Box shadow={"lg"} p={0} borderRadius="lg">
                <Image borderRadius="lg" src={project.image} />
              </Box>
            </a>
            <CardHeader>
              <Heading color={"gray.600"} fontWeight={"bold"} size="md">
                {project.name}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color={"gray.700"}>{project.description}</Text>
            </CardBody>
            <CardFooter>
              <HStack display={"flex"} justifyContent="center" flexWrap="wrap">
                {project.tech.map((tech) => (
                  <Tag
                    color={"gray.600"}
                    m={"3px !important"}
                    bgColor={"blue.200"}
                    p={1}
                  >
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
