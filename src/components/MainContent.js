import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import pic from "../assets/DSC000812.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import resume from "../assets/subham_resume.pdf";
import { ImLinkedin2 } from "react-icons/im";
import Social from "./Social";
import Skills from "./Skills";
const MainContent = () => {
  return (
    <Container
      mt={10}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      maxW={"container.lg"}
    >
      <Flip top>
        <Avatar
          h={["150px", "250px"]}
          w={["150px", "250px"]}
          src={pic}
          objectFit={"cover"}
        />
      </Flip>
      <Fade top>
        <VStack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading
            mt={2}
            fontWeight={"extrabold"}
            fontSize={["3xl", "40px", "6xl"]}
            fontFamily={"font"}
            color={"brand.secondary"}
          >
            Hey, I'm <span>Subham</span>
          </Heading>
          <Heading
            textAlign={"center"}
            fontWeight={"extrabold"}
            fontSize={["3xl", , "40px", "6xl"]}
            fontFamily={"font"}
            color={"brand.secondary"}
          >
            A Full-stack developer
          </Heading>

          <Text
            pt={4}
            pb={2}
            fontSize={"xl"}
            letterSpacing={"1px"}
            textAlign={"center"}
            fontFamily={"font"}
            color={"brand.outline"}
          >
            Full-stack developer with more than a year's worth of practical
            experience building scalable solutions using a variety of full-stack
            technologies, including JavaScript, React.js, Node.js, Express.js,
            MongoDB, MySQL, etc. In addition, I've worked with payment
            integration for a variety of payment options, including credit
            cards, ACH, eChecks, etc.
          </Text>
          <form method="get" action={resume}>
            <Button
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
      </Fade>
      <Social />
    </Container>
  );
};

export default MainContent;
