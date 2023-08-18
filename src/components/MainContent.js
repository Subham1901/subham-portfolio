import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import pic from "../assets/DSC000812.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import resume from "../assets/subham_resume.pdf";
import { ImLinkedin2 } from "react-icons/im";
import Social from "./Social";
import Skills from "./Skills";
import Typed from "react-typed";
import Aos from "aos";
import { useEffect } from "react";
const MainContent = () => {
  return (
    <Container
      data-aos="fade-up"
      p={5}
      mt={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      maxW={"container.lg"}
    >
      <Avatar
        h={["100px", "250px"]}
        w={["100px", "250px"]}
        src={pic}
        objectFit={"cover"}
        loading="eager"
      />

      <VStack display={"flex"}>
        <Flex flexDir={"column"}>
          <Heading
            mt={2}
            fontWeight={"bold"}
            fontSize={["3xl", "5xl", "6xl", "7xl"]}
            color={"#f9f4da"}
            textTransform={"uppercase"}
            letterSpacing={"1px"}
            className="message"
          >
            Hey, I'm <span className="subham">Subham</span>
          </Heading>
          <Typed
            strings={["A React developer", "A Fullstack developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="typed"
          ></Typed>
        </Flex>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {" "}
          <Text
            pt={4}
            pb={2}
            fontWeight={"light"}
            fontSize={["sm", "md", "lg"]}
            letterSpacing={"1px"}
            textAlign={"center"}
            fontFamily={"font"}
            color={"#dbdbdb"}
          >
            Full-stack developer with 1+ year's worth of practical experience
            building scalable solutions using a variety of full-stack
            technologies, including JavaScript, React.js, Node.js, Express.js,
            MongoDB, MySQL, etc. In addition, I've worked with payment
            integration for a variety of payment options, including credit
            cards, ACH, eChecks, etc.
          </Text>
        </motion.div>

        <form method="get" action={resume}>
          <Button
            fontFamily={"font"}
            css={{
              "&:hover": {
                backgroundColor: "#ffae19",
              },
            }}
            type="submit"
            bgColor={"brand.ylw"}
          >
            More about me
          </Button>
        </form>
      </VStack>

      <Social />
    </Container>
  );
};

export default MainContent;
