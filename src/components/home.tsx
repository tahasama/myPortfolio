import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
  keyframes,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Hero from "./hero";
import devNight from "../images/devNight2.png";
import devNight2 from "../images/devNight.png";
import dev from "../images/dev.png";
import dev1 from "../images/devdev.png";
import CloudNstars from "./cloudNstars";
import { motion } from "framer-motion";
import { useState } from "react";

const flip = keyframes`
from,to
0%   {transform: scaleX(1);}
25% { opacity(.8);}
50% {opacity(.4);}
75% { opacity(.8);}
100% {transform: scaleX(-1);}
`;

const Home = () => {
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("orange.500", "teal.500");
  const buttonLightHover = useColorModeValue("orange.600", "teal.600");
  const { colorMode, toggleColorMode } = useColorMode();

  const [pic, setPic] = useState(true);

  const enterF = () => {
    setPic(!pic);
  };

  return (
    <Flex
      alignItems={"center"}
      flexDirection={["column-reverse", "column-reverse", "row"]}
      h={"100vh"}
      bg={bglOnLight}
    >
      <CloudNstars />
      <Flex
        position={"relative"}
        left={["0", "0", "-5", "-6", "9"]}
        mx={16}
        mt={[0, 50]}
        // top={["-16", 0]}
        zIndex={99}
        onMouseOver={() => enterF()}
        h={["32%", "40%", "45%", "55%", "50%"]}
        // boxShadow={"0px 0px 50px #2C5282"}
        cursor={"pointer"}
        transition="animation 5s ease-in-out "
        onClick={toggleColorMode}
        borderRadius={"3xl"}
        border={"white"}
        _hover={{ animation: `${flip} .5s ease-in-out` }}
        // w={"400px"}
        w={"auto"}
      >
        {colorMode !== "light" ? (
          <Img
            src={pic ? devNight2 : devNight}
            alt="devNight"
            borderRadius={"3xl"}
            boxShadow={pic ? "0px 0px 50px #2C5282" : "none"}
          />
        ) : (
          <Img
            src={pic ? dev : dev1}
            filter={pic ? "brightness(1)" : "brightness(1.3)"}
            alt="devDay2"
            borderRadius={"3xl"}
          />
        )}
      </Flex>
      <Flex
        zIndex={2}
        flexDirection="column"
        position="relative"
        alignItems={["center", "start"]}
        lineHeight={"taller"}
        top={["-20", 0]}
        w={["full", "auto"]}
        left={["0", "0", "-16", "-7", "45px"]}
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
          position={"relative"}
          // alignItems="start"
          w={["288px", "60vw", "46vw"]}
          fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          fontWeight={[600, 400]}
          fontFamily={"tajawal"}
          left={["4", "0"]}
        >
          I'm a &nbsp;
          <Hero />
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
            left={["0", "auto", "-6", "-58px", "-135px"]}
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
