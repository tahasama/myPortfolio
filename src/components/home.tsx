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
// import dev from "../images/dev3.jpg";
import dev from "../images/dev4.jpg";
// import devNight2 from "../images/dev.webp";
// import devDay from "../images/devDay2.jpg";
import CloudNstars from "./cloudNstars";
// import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Home = () => {
  // const colorOnLight = useColorModeValue("blue.100", "purple.900");
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("cyan.600", "teal.500");
  const buttonLightHover = useColorModeValue("cyan.700", "teal.600");
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems={"center"}
      //   justifyContent={"center"}
      flexDirection={["column-reverse", "column-reverse", "row"]}
      h={"100vh"}
      bg={bglOnLight}

      // _before={{
      //   content: "''",
      //   position: "absolute",
      //   display: "block",
      //   top: "65px",
      //   left: 0,
      //   h: [0, 0, "full"],
      //   // h: [0, 0, "full"],

      //   w: "full",
      //   bg: colorOnLight,
      //   borderRadius: "0% 0% 0% 100%",
      //   // mt: "65px",
      //   transform: " rotate(180deg)",
      //   zIndex: 1,
      // }}
    >
      <CloudNstars />

      {colorMode !== "light" ? (
        <Img
          position={"relative"}
          mx={16}
          mt={[0, 50]}
          top={["-10", 0]}
          zIndex={2}
          src={devNight}
          alt="devNight"
          h={["45%", "45%", "45%", "55%", "50%"]}
          borderRadius={"5%"}
        ></Img>
      ) : (
        <Img
          position={"relative"}
          mx={16}
          mt={[0, 50]}
          top={["-10", 0]}
          zIndex={2}
          src={dev}
          alt="devDay2"
          h={["45%", "45%", "45%", "55%", "50%"]}
          borderRadius={"5%"}
          border="4px"
          borderColor={"teal.300"}
        ></Img>
      )}
      <Flex
        zIndex={2}
        flexDirection="column"
        position="relative"
        lineHeight={"taller"}
        top={["-20", 0]}
        w="auto"
        // alignItems={["center", "baseline"]}
      >
        <Box
          color={colorMode === "light" ? "green.600" : "green.300"}
          fontFamily={"VT323"}
          fontSize={"2xl"}
        >
          Hello World !
        </Box>
        <Box
          fontSize={["lg", "xl", "2xl", "3xl", "4xl", "5xl"]}
          letterSpacing={3}
          fontWeight={[700, 600]}
          flexWrap="wrap"
        >
          My name is Taha
        </Box>
        <Box>
          <Divider w={[300, 280, 320, 380, 400]} />
        </Box>
        <Flex
          w={["full", "47vw"]}
          fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          fontWeight={[600, 500]}
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
            position={"relative"}
            // alignContent="center"
            top={["8"]}
            m={["auto", "auto", 0]}
            variant="solid"
            p={0}
            w={["38vw", "34vw", "28vw"]}
            h={["7vh", "9vh"]}
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
