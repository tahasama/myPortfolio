import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import Hero from "./hero";

import airplane from "../images/airplane.png";
import parachute from "../images/parachute.png";
import homeGif from "../images/homeGIf.gif";
import homeGifN from "../images/homeGIfN.gif";

import CloudNstars from "./cloudNstars";
import { motion, useTransform, useViewportScroll } from "framer-motion";
// import { useState } from "react";
import { Element, Link } from "react-scroll";
import Social from "./social";

const Home = () => {
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("red.500", "teal.500");
  const buttonLightHover = useColorModeValue("#cf3030", "teal.600");
  const { colorMode } = useColorMode();

  return (
    <Box
      overflow={"hidden"}
      h={["3xl", "3xl", "3xl", "3xl"]}
      filter="auto"
      brightness={colorMode === "light" ? "" : "80%"}
    >
      <Element name="Home"></Element>
      <Box pos={"absolute"} zIndex={1} top={[48, 40, 40, 36, 24]}>
        <Social />
      </Box>

      <Flex
        position={"relative"}
        bg={bglOnLight}
        alignItems={"center"}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        top={["10", "0", "16", "16", "10"]}
        justifyContent={"center"}
        h={"100%"}
      >
        <Box position={"absolute"} top={[-10, 0, -5]} right={[-4, "5"]}>
          {/* A component for animated clouds */}
          <CloudNstars />
        </Box>
        <Flex
          mt={0}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          // bg={"white"}
          w={["0", "0", "0", "4xl", "70vw"]}
          gap={0}
          ml={[0, 0, 0, 0]}
        >
          <Flex
            flexDirection="column"
            position="relative"
            alignItems={["center", "center", "center", "start"]}
            lineHeight={"taller"}
            top={["20", "44", "-16", "0"]}
            w={["full", "fit-content"]}
            ml={[0, 0, 0, 10, 0]}
          >
            <Box
              color={colorMode === "light" ? "green.600" : "green.200"}
              fontFamily={"VT323"}
              fontSize={"4xl"}
              lineHeight={"1.5"}
            >
              Hello World !
            </Box>
            <Box
              fontSize={["lg", "xl", "2xl", "3xl", "5xl"]}
              letterSpacing={3}
              fontWeight={[700, 500]}
              // flexWrap="wrap"
              fontFamily={"open sans"}
              // color={"white"}
            >
              My name is Taha
            </Box>
            <Divider w={[240, 280, 280, 380, 400]} />
            <Flex
              position={"relative"}
              justifyContent={"start"}
              alignItems={"start"}
              w={["auto"]}
              fontSize={["md", "lg", "xl", "2xl", "4xl"]}
              fontWeight={[600, 400]}
              fontFamily={"tajawal"}
              left={["4", "4", "0"]}
            >
              <Text>I'm a &nbsp;</Text>
              {/* A component for typewriter animation */}
              <Hero />
              {/* <Text>developper</Text> */}
            </Flex>

            <motion.div
              style={{ zIndex: 98 }}
              whileHover={{
                y: [-1, 4, -1],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              <Link to="Projects" smooth>
                <Button
                  color="white"
                  letterSpacing={1}
                  fontSize={"20"}
                  fontWeight={["400", "500"]}
                  position={"relative"}
                  top={["2", "5"]}
                  my={["4", "auto", 0]}
                  px={["74px", "84px", "20", "28", "10"]}
                  py={["5", "7", "7", "7", "7"]}
                  bg={buttonLight}
                  _hover={{ bg: buttonLightHover }}
                  _active={{ bg: buttonLightHover }}
                >
                  PROJECTS
                </Button>
              </Link>
            </motion.div>
          </Flex>
          <Box
            display={["none", "none", "none", "block"]}
            mr={[0, 0, 0, 10, 0]}
          >
            <Img
              src={colorMode === "light" ? homeGif : homeGifN}
              h={[0, 0, 0, 450, 590]}
              w={[0, 0, 0, 650, 580]}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
