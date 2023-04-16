import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ProjectList } from "../utils/helper";
import Pulse from "react-reveal/Pulse";
import { ImGithub, ImLink } from "react-icons/im";
import { HashScroll } from "react-hash-scroll";
const Projects = () => {
  return (
    <HashScroll hash="#hash-project">
      <Container id="projects" p={2} maxW={"100%"} bgColor={"brand.skill"}>
        <Heading
          p={5}
          textAlign={"center"}
          color={"brand.secondary"}
          fontFamily={"font"}
          fontWeight={"extrabold"}
        >
          Projects
        </Heading>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexWrap={"wrap"}
        >
          {ProjectList.map((data, idx) => (
            <Pulse key={idx}>
              <Box
                border={"1px solid #e9ecef"}
                borderRadius={"md"}
                className="card"
                maxW={"md"}
                bgColor={"brand.card"}
                m={2}
              >
                <Img
                  h={"250px"}
                  className="card-image"
                  w={"md"}
                  objectFit={"cover"}
                  borderTopRadius={"md"}
                  src={data.image}
                />
                <Box p={2} className="card-content">
                  <Box className="preview">
                    <Text
                      fontWeight={"bold"}
                      fontSize={"18px"}
                      color={"brand.primary"}
                      className="desc"
                      fontFamily={"font"}
                    >
                      {data.description}
                    </Text>
                    <Link
                      href={data.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="preview-button"
                        p={1}
                        m={2}
                        bgColor={"brand.primary"}
                      >
                        <ImLink size={25} className="preview-icon" />
                      </Button>
                    </Link>
                    <Link
                      href={data.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        p={1}
                        className="preview-button"
                        m={2}
                        bgColor={"brand.primary"}
                      >
                        <ImGithub size={25} className="preview-icon" />
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Heading
                      p={2}
                      fontSize={["lg", "2xl"]}
                      color={"brand.primary"}
                      fontWeight={"extrabold"}
                      fontFamily={"font"}
                    >
                      {data.name}
                    </Heading>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data.tech.map((data, idx) => (
                      <Avatar key={idx} size={"sm"} m={2} src={data} />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Pulse>
          ))}
        </Box>
      </Container>
    </HashScroll>
  );
};

export default Projects;
