import { Container } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
} from "@chakra-ui/react";

import { MdMenuOpen } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import Social from "./components/Social";

const AppLayout = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        };
      });
      setScrollPosition(window.scrollY);
      if (data.y > 300 && data.y - data.lastY > 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNavbar, scrollPosition]);

  return (
    <>
      <Box
        className="header"
        p={4}
        shadow={!showNavbar ? "2xl" : "none"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link to="#/">
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
        </Link>
        <Button
          onClick={onOpen}
          p={0}
          bgColor={"brand.secondary"}
          borderRadius={"full"}
        >
          <MdMenuOpen size={30} />
        </Button>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerContent>
            <a href={"#/"}>
              <Heading
                p={5}
                textAlign={"center"}
                cursor={"pointer"}
                fontSize={["20px", "25px", , "2xl"]}
                textTransform={"uppercase"}
                letterSpacing={"3px"}
                fontFamily={"font"}
                color={"brand.secondary"}
              >
                {"<subham />"}
              </Heading>
            </a>

            <DrawerBody>
              <Box w={"full"}>
                <a href="#/">
                  <Button
                    fontFamily={"font"}
                    className="drawer-button"
                    w={"full"}
                  >
                    Home
                  </Button>
                </a>
                <a href="#section-skill">
                  <Button
                    fontFamily={"font"}
                    className="drawer-button"
                    w={"full"}
                  >
                    Skills
                  </Button>
                </a>
                <a href="#section-project">
                  <Button
                    fontFamily={"font"}
                    className="drawer-button"
                    w={"full"}
                  >
                    Projects
                  </Button>
                </a>
                <a href="#section-contact">
                  <Button
                    fontFamily={"font"}
                    className="drawer-button"
                    w={"full"}
                  >
                    Contact
                  </Button>
                </a>
              </Box>
            </DrawerBody>
            <DrawerCloseButton />
            <Text
              textAlign={"center"}
              className="drawer-footer-text"
              fontFamily="font"
            >
              Let's Connect
            </Text>
            <DrawerFooter>
              <Social />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Header />
      <div id="section-skill">
        <Skills />
      </div>

      <div id="section-project">
        <Projects />
      </div>
      <div id="section-contact">
        <Contact />
      </div>
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
