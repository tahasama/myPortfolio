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
      <Box pos={"absolute"} zIndex={1} top={[48, 40, 40, 36, 28]}>
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
          w={"5xl"}
          gap={0}
          ml={[0, 0, 20]}
        >
          <Flex
            flexDirection="column"
            position="relative"
            alignItems={["center", "start"]}
            lineHeight={"taller"}
            // top={["36", "36", "12", "10"]}
            w={["full", "xl"]}
            ml={[0, 0, 0, 0, 0]}
          >
            <Box
              color={colorMode === "light" ? "green.600" : "green.200"}
              fontFamily={"VT323"}
              fontSize={"3xl"}
              lineHeight={"1.5"}
            >
              Hello World !
            </Box>
            <Box
              fontSize={["lg", "xl", "2xl", "3xl", "4xl"]}
              letterSpacing={3}
              fontWeight={[700, 500]}
              flexWrap="wrap"
              fontFamily={"open sans"}
              // color={"white"}
            >
              My name is Taha
            </Box>
            <Divider w={[240, 280, 280, 380, 400]} />
            <Flex
              position={"relative"}
              w={["auto"]}
              fontSize={["md", "lg", "xl", "2xl", "3xl"]}
              fontWeight={[600, 400]}
              fontFamily={"tajawal"}
              left={["4", "0"]}
            >
              I'm a &nbsp;
              {/* A component for typewriter animation */}
              <Hero />
              <Text>developper</Text>
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
          <Box>
            <Img
              src={colorMode === "light" ? homeGif : homeGifN}
              h={550}
              w={650}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
