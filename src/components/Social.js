import { Box, Button, Link } from "@chakra-ui/react";
import React from "react";
import { ImLinkedin2, ImGithub, ImTwitter } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import Pulse from "react-reveal/Pulse";
const Social = () => {
  return (
    <Pulse>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={5}
      >
        <Link
          href="https://www.linkedin.com/in/subham-prasad-panda-a4b2371b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            m={2}
            bgColor={"#caf0f8"}
            transition={"all 0.3s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            className="linkedin"
            p={1}
          >
            <ImLinkedin2 size={20} />
          </Button>
        </Link>
        <Link
          href="https://github.com/Subham1901"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            m={2}
            bgColor={"#caf0f8"}
            transition={"all 0.8s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            p={1}
          >
            <ImGithub size={20} />
          </Button>
        </Link>
        <Link
          href="https://www.instagram.com/subham_sp24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            m={2}
            bgColor={"#caf0f8"}
            transition={"all 0.8s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            p={1}
            className="insta"
          >
            <AiOutlineInstagram size={20} />
          </Button>
        </Link>
        <Link
          href="https://twitter.com/SubhamPrasadP13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            m={2}
            bgColor={"#caf0f8"}
            transition={"all 0.8s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            p={1}
            className="twitter"
          >
            <ImTwitter size={20} />
          </Button>
        </Link>
      </Box>
    </Pulse>
  );
};

export default Social;
