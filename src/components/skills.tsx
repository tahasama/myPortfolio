import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Img,
  keyframes,
  ScaleFade,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
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
import resp from "../svg/resp.png";
import mui from "../svg/mui.png";
import tailwind from "../svg/tailwind.png";
import chakra from "../svg/chakra.png";
import lamp from "../svg/lamps.png";
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { MdSpeed } from "react-icons/md";
import { FcSmartphoneTablet } from "react-icons/fc";
import { DiResponsive } from "react-icons/di";

import { motion } from "framer-motion";

const flip = keyframes`
from,to
0%   {opacity:0}
20%  {opacity:0.2;}
40% { opacity:0.4;}
60% { opacity:0.6;}
80% {opacity:0.8;}
100% {opacity:1;}
`;

const Skills = ({ selected }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgOnLight = useColorModeValue("red.200", "gray.900");

  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      //   justifyContent={"center"}
      flexDirection={["column"]}
      h={"120vh"}
      //   w="100vw"
      //   bgGradient={bgGradieantOnLight}
      fontFamily={"roboto"}
      top={"0vh"}
      bg={bgOnLight}
      //   w="100vw"
      clipPath="ellipse(100% 100% at 24% 100%)"
      mt={"-10vh"}
    >
      <motion.div
      // whileInView={{ opacity: [0, 1] }}
      // transition={{ duration: 2 }}
      >
        <Flex position={"relative"} justifyContent={"space-around"} mx={"36"}>
          <Flex
            clipPath={
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }
            mt={"32"}
            h="20vh"
            w={"11vw"}
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
            >
              {colorMode === "light" ? (
                <Img
                  src={resN}
                  h="10vh"
                  filter={"grayscale(100%) brightness(2)"}
                />
              ) : (
                <Img
                  src={resN}
                  color="purple.500"
                  h="10vh"
                  filter={"grayscale(100%) brightness(2)"}
                />
              )}
            </motion.div>
          </Flex>{" "}
          <Flex
            clipPath={
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }
            mt={"32"}
            h="20vh"
            w={"11vw"}
            mx={"5"}
            bg={"white"}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            color="blue.50"
            bgColor="purple.500"
          >
            <motion.div
              whileInView={{ scaleX: [-1, 1, -1, 1, -1, 1, -1] }}
              transition={{ duration: 2 }}
            >
              <AiOutlineBulb size={"72"} />
            </motion.div>
          </Flex>
          <Flex
            clipPath={
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }
            mt={"32"}
            h="20vh"
            w={"11vw"}
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
            >
              <IoIosRocket size={"72"} />
            </motion.div>
          </Flex>{" "}
          <Flex
            clipPath={
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }
            mt={"32"}
            h="20vh"
            w={"11vw"}
            mx={"5"}
            bg={"white"}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            bgColor="purple.500"
            color="blue.50"
          >
            <motion.div
              whileInView={{ scaleX: [-1, 1, -1, 1, -1, 1, -1] }}
              transition={{ duration: 2 }}
            >
              <MdSpeed size={"72"} color="blue.200" />
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
      {/* <AiOutlineBulb />
          <IoIosRocket color="white" />
          <MdSpeed />
          <FcSmartphoneTablet color="white" size={100} />
        <DiResponsive /> */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <Grid
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={0}
          //   w="100%"
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
          //   h={"10vh"}
          fontFamily={"Quicksand"}
          fontSize={["14", "18"]}
          mt={["22vh", "30vh", "24vh", "16vh"]}
          // animation={`${flip} 2s ease-out`}
        >
          {/* <Divider position={"absolute"} top="175px" /> */}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
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
              //  bg={"white"}
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
            transition={{ delay: 0.2 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
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
            transition={{ delay: 0.3 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={nodeL} w="56%" />
              <Box m={"3"}>Node Js</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.4 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={reduxL} w="58.8%" />
              <Box m={"3"}>Redux</Box>
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
              //  bg={"white"}
            >
              <Img src={gitL} w="56%" />
              <Box m={"3"}>Git</Box>
            </Grid>{" "}
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
              //  bg={"white"}
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
            transition={{ delay: 0.7 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="41%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={html} w="45%" />
              <Box m={"3"}>Html</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.8 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="41%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={css} w="45%" />
              <Box m={"3"}>Css</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.9 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={js} w="56.5%" />
              <Box m={"3"}>Javascript</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={firebase} w="70%" />
              <Box m={"3"}>FireBase</Box>
            </Grid>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1.1 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={docker} w="56.5%" />
              <Box m={"3"}>Docker</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1.2 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={ts} w="56.5%" />
              <Box m={"3"}>TypeScript</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1.3 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={mui} w="72%" />
              <Box m={"3"}>Material ui</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1.4 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
            >
              <Img src={tailwind} w="94.5%" />
              <Box m={"3"}>Tailwind ui</Box>
            </Grid>{" "}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1.5 }}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              h="50%"
              justifyItems={"center"}
              alignItems={"center"}
              //  bg={"white"}
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
