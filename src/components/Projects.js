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
import React, { useRef } from "react";
import { ProjectList } from "../utils/helper";
import Pulse from "react-reveal/Pulse";
import { ImGithub, ImLink } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import { motion } from "framer-motion";
const Projects = () => {
  const containerRef = useRef();
  return (
    <Container
      ref={containerRef}
      data-aos="fade-up"
      id="project"
      p={2}
      maxW={"100%"}
    >
      <Heading
        p={5}
        textAlign={"left"}
        color={"brand.secondary"}
        fontWeight={"normal"}
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
          <motion.div
            dragElastic={1}
            whileDrag={{ scale: 1.2 }}
            drag
            dragSnapToOrigin
            dragConstraints={containerRef}
          >
            <Box
              w={["250", "sm"]}
              data-aos="flip-left"
              key={idx}
              className="card"
              overflow={"hidden"}
              m={10}
            >
              <Box>
                <Img src={data?.image} />
              </Box>
              <Heading
                mt={2}
                textAlign={"center"}
                fontSize={20}
                color={"#12b5e5"}
              >
                {data?.name.toUpperCase()}
              </Heading>
              {/* <Text
              fontWeight={"light"}
              padding={2}
              color={"#f9f4da"}
              textAlign={"center"}
            >
              {data?.description}
            </Text> */}
              <Box
                padding={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Link
                  href={data.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImGithub color={"#f9f4da"} size={30} />
                </Link>
                <Link
                  href={data.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsArrowRight color={"#f9f4da"} size={30} />
                </Link>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
