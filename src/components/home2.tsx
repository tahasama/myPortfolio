import { Grid, GridItem } from "@chakra-ui/react";
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
import devDay from "../images/devDay2.jpg";
import CloudNstars from "./cloudNstars";
import { motion } from "framer-motion";

const Home2 = () => {
  const buttonLight = useColorModeValue("yellow.400", "teal.500");
  const buttonLightHover = useColorModeValue("cyan.700", "teal.600");
  const { colorMode } = useColorMode();
  return (
    <Flex h={"100vh"}>
      <CloudNstars />
      <Grid
        h="60%"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(9, 1fr)"]}
        templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"]}
        gap={colorMode === "light" ? 0 : [0, 0, 6, 1]}
        mt={"44"}
        w={"83%"}
        zIndex={2}
      >
        <GridItem
          order={["2", "2", "1"]}
          colSpan={5}
          display={"flex"}
          position={"relative"}
          alignContent={"center"}
          justifyContent={"center"}
          mt={["10", "10", "-12"]}
          ml={["8"]}
        >
          {colorMode !== "light" ? (
            <Img
              src={devNight}
              alt="devNight"
              h={["100%", "56%", "76%"]}
              borderRadius={"5%"}
            ></Img>
          ) : (
            <Img
              src={devDay}
              alt="devDay"
              h={["100%", "56%", "66%"]}
              borderRadius={"5%"}
            ></Img>
          )}
        </GridItem>
        <GridItem
          position="relative"
          colSpan={[8, 4]}
          order={["1", "1", "2"]}
          mt={["0", "-10", "6"]}
          ml={["8", "8", "0"]}
          left={colorMode === "light" ? ["0px", "2px", "10px", "2px"] : "0"}
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
            w={["full", "full", "47vw"]}
            fontSize={["md", "lg", "xl", "2xl", "3xl"]}
            fontWeight={[600, 500]}
          >
            I'm a &nbsp;
            <Hero />
            developper
          </Flex>
          <motion.div
            style={{ display: "flex" }}
            whileHover={{
              y: [-1, 4, -1],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <Button
              top={["8"]}
              m={["auto", "auto", 0]}
              variant="solid"
              p={0}
              w={["38vw", "34vw", "28vw"]}
              h={["7vh", "7vh", "9vh"]}
              bg={buttonLight}
              _hover={{ bg: buttonLightHover }}
              _active={{ bg: buttonLightHover }}
            >
              PROJECTS
            </Button>
          </motion.div>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Home2;
