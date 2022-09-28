import {
  Box,
  Flex,
  Grid,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import reactD from "../svg/reactD.png";
import reactN from "../svg/reactD1.png";
import mongoN from "../svg/mongo.png";
import mongoD from "../svg/mon2.png";
import nodeL from "../svg/node.png";
import expressL from "../svg/express.png";
import reduxL from "../svg/redux.png";
import gitL from "../svg/git.png";
import githubD from "../svg/githubD.png";
import githubN from "../svg/githubN.png";
import html from "../svg/html.png";
import css from "../svg/css.png";
import js from "../svg/js.png";
import firebase from "../svg/firebase.png";
import docker from "../svg/docker.png";
import ts from "../svg/ts.png";
import resD from "../svg/resD.png";
import resN from "../svg/resN.png";
import mui from "../svg/mui.png";
import tailwind from "../svg/tailwind.png";
import chakra from "../svg/chakra.png";
import cloudN from "../svg/cloudN.png";
import cloud from "../svg/cloud.png";
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

import { motion } from "framer-motion";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgOnLight = useColorModeValue("red.200", "gray.900");

  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      flexDirection={["column"]}
      h={"150vh"}
      fontFamily={"roboto"}
      top={["0vh", "0vh"]}
      bg={bgOnLight}
      clipPath={[
        "ellipse(100% 100% at 47% 100%)",
        "ellipse(100% 100% at 47% 100%)",
        "ellipse(100% 100% at 38% 100%)",
        "ellipse(100% 100% at 35% 100%)",
      ]}
      mt={"-10vh"}
    >
      <motion.div>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={[0, 4]}
          justifyContent={"center"}
          fontSize={"20"}
          fontWeight={"600"}
          fontFamily={"Quicksand"}
          mt={["0vh", "4vh"]}
          textAlign={"center"}
          transform={["scale(0.8)", "scale(1)"]}
        >
          <Flex flexDir={"column"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              mt={["0", "32"]}
              h={["18vh", "10vh", "15vh", "18vh"]}
              w={["34vw", "10vw", "12vw", "10vw"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor="purple.500"
              textAlign={"center"}
            >
              <motion.div
                whileInView={{ scaleX: [1, -1, 1, -1, 1] }}
                transition={{ duration: 2 }}
                style={{
                  color: colorMode !== "light" ? "black" : "white",
                }}
              >
                {colorMode === "light" ? (
                  <Img
                    src={resN}
                    h={["9vh", "9vh", "7vh", "9vh"]}
                    filter={"grayscale(100%) brightness(2)"}
                    m={0}
                  />
                ) : (
                  <Img
                    src={resD}
                    color="purple.500"
                    h="9vh"
                    filter={"grayscale(100%) brightness(2)"}
                    m={0}
                  />
                )}
              </motion.div>{" "}
            </Flex>
            <Box textAlign={"center"} m={"3"}>
              Responsive
            </Box>
            <Box
              textAlign={"center"}
              fontSize="18"
              fontWeight={500}
              mx={["4", "0"]}
            >
              layouts that works on any device
            </Box>
          </Flex>
          <Flex flexDir={"column"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              mt={["0", "32"]}
              h={["18vh", "10vh", "15vh", "18vh"]}
              w={["34vw", "10vw", "12vw", "10vw"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor="purple.500"
            >
              <motion.div
                whileInView={{ scaleX: [1, -1, 1, -1, 1] }}
                transition={{ duration: 2 }}
                style={{ color: colorMode !== "light" ? "gray.400" : "white" }}
              >
                {colorMode === "light" ? (
                  <Img
                    src={cloud}
                    h="15vh"
                    filter={"grayscale(0%) brightness(1.12)"}
                  />
                ) : (
                  <Img
                    src={cloudN}
                    h="11vh"
                    filter={"grayscale(100%) brightness(.8)"}
                  />
                )}
              </motion.div>
            </Flex>{" "}
            <Box textAlign={"center"} m={"3"}>
              Intuitive
            </Box>
            <Box
              textAlign={"center"}
              fontSize="18"
              fontWeight={500}
              mx={["4", "0"]}
            >
              User friendly and easy to use
            </Box>
          </Flex>
          <Flex flexDir={"column"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              mt={["0", "32"]}
              h={["18vh", "10vh", "15vh", "18vh"]}
              w={["34vw", "10vw", "12vw", "10vw"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor="purple.500"
            >
              <motion.div
                whileInView={{ scaleX: [-1, 1, -1, 1, -1, 1] }}
                transition={{ duration: 2 }}
                style={{ color: colorMode !== "light" ? "black" : "white" }}
              >
                <AiOutlineBulb size={"72"} />
              </motion.div>
            </Flex>
            <Box textAlign={"center"} m={"3"}>
              Creative
            </Box>
            <Box
              textAlign={"center"}
              fontSize="18"
              fontWeight={500}
              mx={["4", "0"]}
            >
              from idea to great product
            </Box>
          </Flex>
          <Flex flexDir={"column"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              mt={["0", "32"]}
              h={["18vh", "10vh", "15vh", "18vh"]}
              w={["34vw", "10vw", "12vw", "10vw"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor="purple.500"
            >
              <motion.div
                whileInView={{ scaleX: [1, -1, 1, -1, 1] }}
                transition={{ duration: 2 }}
                style={{ color: colorMode !== "light" ? "black" : "white" }}
              >
                <IoIosRocket size={"72"} />
              </motion.div>
            </Flex>{" "}
            <Box textAlign={"center"} m={"3"}>
              Dynamic
            </Box>
            <Box
              textAlign={"center"}
              fontSize="18"
              fontWeight={500}
              mx={["4", "0"]}
            >
              full stack and databases
            </Box>
          </Flex>
        </Grid>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <Grid
          templateColumns={[
            "repeat(4, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={0}
          w={["100%"]}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
          fontFamily={"Quicksand"}
          fontWeight={"700"}
          fontSize={["10px", "18"]}
          mt={["0vh", "30vh", "24vh", "14vh"]}
          transform={["scale(0.98)", "scale(0.9)"]}
        >
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="100%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={expressL} w="56.3%" />
              <Box m={"3"}>Express Js</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.1 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              {colorMode === "light" ? (
                <Img src={mongoD} w="56%" />
              ) : (
                <Img src={mongoN} />
              )}
              <Box m={"3"}>Mongodb</Box>
            </Grid>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.15 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img
                src={colorMode === "light" ? reactD : reactN}
                w="63%"
                filter={"brightness(.92)"}
              />
              <Box m={"3"}>React Js</Box>
            </Grid>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.2 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={nodeL} w="56%" />
              <Box m={"3"}>Node Js</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.25 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={reduxL} w="58.8%" />
              <Box m={"3"}>Redux</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.3 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={gitL} w="56%" />
              <Box m={"3"}>Git</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.35 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img
                src={colorMode === "light" ? githubD : githubN}
                w="56%"
                filter={"brightness(.92)"}
              />
              <Box m={"3"}>GitHub</Box>
            </Grid>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.4 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="41%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={html} w="45%" />
              <Box m={"3"}>Html</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.45 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="41%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={css} w="45%" />
              <Box m={"3"}>Css</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={js} w="56.5%" />
              <Box m={"3"}>Javascript</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.55 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={firebase} w="70%" />
              <Box m={"3"}>FireBase</Box>
            </Grid>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.6 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={docker} w="56.5%" />
              <Box m={"3"}>Docker</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.65 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={ts} w="56.5%" />
              <Box m={"3"}>TypeScript</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.7 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={mui} w="72%" />
              <Box m={"3"}>Material ui</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.75 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={tailwind} w="94.5%" />
              <Box m={"3"}>Tailwind ui</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.8 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Img src={chakra} w="57%" />
              <Box m={"3"}>Chakra ui</Box>
            </Grid>{" "}
          </motion.div>
        </Grid>
      </motion.div>
    </Flex>
  );
};

export default Skills;
