import {
  Box,
  Button,
  Divider,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Hero from "./hero";
import CloudNstars from "./cloudNstars";
import { AnimatePresence, motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import Social from "./social";

const Home = () => {
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("red.500", "teal.500");
  const buttonLightHover = useColorModeValue("#cf3030", "teal.600");
  const { colorMode } = useColorMode();

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
        <Element name="Home"></Element>

        <Flex
          overflow={"hidden"}
          h={["100vh"]}
          // w={["100vw"]}
          filter="auto"
          brightness={colorMode === "light" ? "" : "80%"}
          justifyContent={["center", "center", "center", "flex-start"]}
          alignItems={"center"}
          bg={bglOnLight}
          gap={[0, 0, 0, 5, 7]}
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          {/* <Box
              position={"absolute"}
              top={[-20, -3, -16, -8, -5]}
              right={[-4, "5"]}
            > */}
          <CloudNstars />
          {/* </Box> */}
          {/* <Box pos={"absolute"} zIndex={1} top={[48, 40, 32, "108px", 20]}> */}
          <Social />
          {/* </Box> */}

          <Flex
            position={"relative"}
            // bg={bglOnLight}
            // bgColor={"yellow.200"}
            alignItems={"center"}
            flexDirection={["column-reverse", "column-reverse", "row"]}
            // top={["10", "0", "12", "12", "5"]}
            justifyContent={"center"}
            h={"fit-content"}
            w={"fit-content"}
            // h={["100vh"]}
          >
            <Flex
              mt={0}
              justifyContent={""}
              alignItems={"center"}
              w={["4xl", "2xl", "xl", "4xl", "5xl"]}
              gap={0}
              ml={[0, 0, 0, 0]}
            >
              <Flex
                flexDirection="column"
                position="relative"
                alignItems={["center", "center", "center", "start"]}
                justify={["center", "center", "center", "center"]}
                lineHeight={"tall"}
                top={["16", "16", "0", "0", "0"]}
                w={["full", "full"]}
                h={["full", "full"]}
                ml={[0, 0, 0, 10, 0]}
                gap={2}
              >
                <Box
                  color={colorMode === "light" ? "green.600" : "green.200"}
                  fontFamily={"VT323"}
                  fontSize={["3xl", "3xl", "4xl", "4xl", "5xl"]}
                  lineHeight={"1"}
                >
                  Hello World !
                </Box>
                <Box
                  fontSize={["3xl", "3xl", "4xl", "4xl", "6xl"]}
                  letterSpacing={3}
                  fontWeight={[700, 500]}
                  fontFamily={"open sans"}
                  color={["white"]}
                >
                  My name is Taha,
                </Box>
                <Divider w={[240, 280, 280, 380, 400]} />
                <Flex
                  position={"relative"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  w={["full"]}
                  fontWeight={[600, 400]}
                  left={["4", "4", "0"]}
                >
                  <Hero />{" "}
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
                      fontSize={["xl", "xl", "xl", "2xl", "3xl"]}
                      fontWeight={["400", "500"]}
                      position={"relative"}
                      top={["16", "20", "20", "5", "5"]}
                      px={["10", "10", "8", "10", "16"]}
                      py={["6", "7", "6", "7", "8"]}
                      bg={buttonLight}
                      _hover={{ bg: buttonLightHover }}
                      _active={{ bg: buttonLightHover }}
                    >
                      PROJECTS
                    </Button>
                  </Link>
                </motion.div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
