import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Hero from "./hero";
import devNight from "../images/devNight2.png";
import dev from "../images/dev.png";
import CloudNstars from "./cloudNstars";
import { motion } from "framer-motion";

const Home = () => {
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("cyan.700", "teal.500");
  const buttonLightHover = useColorModeValue("cyan.800", "teal.600");
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems={"center"}
      flexDirection={["column-reverse", "column-reverse", "row"]}
      h={"100vh"}
      bg={bglOnLight}
    >
      <CloudNstars />

      {colorMode !== "light" ? (
        <Img
          position={"relative"}
          left={["0", "0", "-5", "-6", "9"]}
          mx={16}
          mt={[0, 50]}
          top={["-12", 0]}
          zIndex={2}
          src={devNight}
          alt="devNight"
          h={["32%", "40%", "45%", "55%", "50%"]}
          borderRadius={"5%"}
          boxShadow={"0px 0px 60px #2C5282"}
        ></Img>
      ) : (
        <Img
          position={"relative"}
          left={["0", "0", "-5", "-6", "9"]}
          mx={16}
          mt={[0, 50]}
          top={["-12", 0]}
          zIndex={2}
          src={dev}
          alt="devDay2"
          h={["32%", "40%", "45%", "55%", "50%"]}
          borderRadius={"5%"}
          boxShadow={"0px 0px 60px #00A3C4"}
          filter="grayscale(65%)"
        ></Img>
      )}
      <Flex
        zIndex={2}
        flexDirection="column"
        position="relative"
        lineHeight={"taller"}
        top={["-16", 0]}
        w="auto"
        left={["0", "0", "-16", "-7", "10"]}
      >
        <Box
          color={colorMode === "light" ? "green.600" : "green.300"}
          fontFamily={"VT323"}
          fontSize={"3xl"}
          lineHeight={"1.5"}
          // pt={"10"}
        >
          Hello World !
        </Box>
        <Box
          fontSize={["lg", "xl", "2xl", "3xl", "4xl"]}
          letterSpacing={3}
          fontWeight={[700, 500]}
          flexWrap="wrap"
          fontFamily={"open sans"}
        >
          My name is Taha
        </Box>
        <Divider w={[240, 280, 280, 380, 400]} />
        <Flex
          w={["full", "60vw", "46vw"]}
          fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          fontWeight={[600, 400]}
          fontFamily={"tajawal"}
        >
          I'm a &nbsp; <Hero />
          developper
        </Flex>

        <motion.div
          style={{ margin: "auto" }}
          whileHover={{
            y: [-1, 4, -1],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <Button
            color="white"
            letterSpacing={1}
            fontSize={"20"}
            fontWeight={["400", "500"]}
            position={"relative"}
            top={["2", "5"]}
            left={["auto", "auto", "-6", "-58px", "-135px"]}
            my={["4", "auto", 0]}
            variant="solid"
            // p={["2", "4"]}
            // w={["38vw", "34vw", "28vw"]}
            // h={["7vh", "9vh"]}
            px={["74px", "74px", "100px", "32"]}
            py={["5", "5", "6", "8"]}
            bg={buttonLight}
            _hover={{ bg: buttonLightHover }}
            _active={{ bg: buttonLightHover }}
          >
            PROJECTS
          </Button>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Home;
