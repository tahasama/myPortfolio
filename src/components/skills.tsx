import {
  Box,
  Text,
  Flex,
  Grid,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import reactD from "../svg/reactD.png";
import reactN from "../svg/reactD1.png";
import mongoN from "../svg/mongo.png";
// import mongoD from "../svg/mon2.png";
// import nodeL from "../svg/node.png";
import expressL from "../svg/express.png";
import reduxL from "../svg/redux.png";
import gitL from "../svg/git.png";
// import githubD from "../svg/githubD.png";
import githubN from "../svg/githubN.png";
// import html from "../svg/html.png";
// import css from "../svg/css.png";
// import js from "../svg/js.png";
import firebase from "../svg/firebase.png";
import docker from "../svg/docker.png";
import ts from "../svg/ts.png";
import resD from "../svg/resD.png";
import resN from "../svg/resN.png";
// import mui from "../svg/mui.png";
import tailwind from "../svg/tailwind.png";
import chakra from "../svg/chakra.png";
import cloudN from "../svg/cloudN.png";
import cloud from "../svg/cloud.png";
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

import { motion } from "framer-motion";
// import Projects from "./projects";
import { Element } from "react-scroll";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgOnLight = useColorModeValue(
    "linear( red.200 0%, pink.300 80%)",
    "linear( gray.900 0%, gray.900 80%)"
  );
  const bglCardHead = useColorModeValue("purple.300", "purple.500");
  const bglCard = useColorModeValue("purple.700", "purple.900");

  return (
    <>
      <Element name="Skills"></Element>
      <Flex
        w={"100%"}
        flexDir={["column", "column", "column", "column"]}
        fontFamily={"roboto"}
        bgGradient={bgOnLight}
        clipPath={[
          // "ellipse(59% 65% at 40% 65%)",
          "circle(50.7% at 49% 50%)",
          "circle(50.7% at 49% 50%)",
          "ellipse(100% 100% at 47% 100%)",
          "ellipse(100% 100% at 48% 100%)",
          "ellipse(100% 100% at 45% 100%)",
        ]}
        mt={["-140vh", "-130vh", "-70vh", "-80vh", "-60vh"]}
        // mt={["-140vh", "-130vh", "-75vh", "-75vh", "-75vh"]}
        h={["4900px", "615vh", "230vh", "270vh", "220vh"]}
      >
        {/* <Element name="Skills"></Element> */}
        <motion.div style={{ margin: 0, padding: 0, width: "100%" }}>
          {/* <Element name="Skills"></Element> */}
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
            mt={["97vh", "85vh", "24vh", "10vh", "10vh"]}
            transform={["scale(0.78)", "scale(0.8)", "scale(0.8)", "scale(1)"]}
            mx={"0"}
          >
            <Flex alignItems={"center"} flexDir={"column"} m={"2"}>
              <Flex
                clipPath={
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }
                mt={["0", "12", "0", "32"]}
                h={["135px", "105px", "110px", "110px"]}
                w={["150px", "120px", "120px", "130px"]}
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
                      h={["8.8vh", "9vh", "7vh", "8vh", "7vh"]}
                      filter={"grayscale(100%) brightness(2)"}
                      m={0}
                    />
                  ) : (
                    <Img
                      src={resD}
                      color="purple.500"
                      h={["9vh", "9vh", "9vh", "9vh", "7.7vh"]}
                      filter={"grayscale(100%) brightness(2)"}
                      // transform={"scale(0.9)"}
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
            <Flex flexDir={"column"} alignItems={"center"} m={"2"}>
              <Flex
                clipPath={
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }
                mt={["0", "12", "0", "32"]}
                h={["135px", "105px", "110px", "110px"]}
                w={["150px", "120px", "120px", "130px"]}
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
                  style={{
                    color: colorMode !== "light" ? "gray.400" : "white",
                  }}
                >
                  {colorMode === "light" ? (
                    <Img
                      src={cloud}
                      h={["15vh", "15vh", "15vh", "15vh", "13.7vh"]}
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
            <Flex flexDir={"column"} alignItems={"center"} m={"2"}>
              <Flex
                clipPath={
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }
                mt={["0", "12", "0", "32"]}
                h={["135px", "105px", "110px", "110px"]}
                w={["150px", "120px", "120px", "130px"]}
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
            <Flex flexDir={"column"} alignItems={"center"} m={"2"}>
              <Flex
                clipPath={
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                }
                mt={["0", "12", "0", "32"]}
                h={["135px", "105px", "110px", "110px"]}
                w={["150px", "120px", "120px", "130px"]}
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
        {/* skills */}
        <Flex
          mt={["-20", "10", "32", "32", "32"]}
          flexDir={["column", "column", "row", "row"]}
          mx={[10, 6]}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={12}
            position={"relative"}
            mt={["-10", "0", "0", "0", "0"]}
          >
            <Box
              mt={["24", "2"]}
              // fontSize={["sm", "xl", "xl", "22px"]}
              fontSize={["xl", "xl", "lg", "xl"]}
              fontFamily={"arial"}
              w={["80vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              p={[3, 3, 4, 3, 5]}
            >
              Frontend
            </Box>

            <Box bgColor={bglCard} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "560px", "490px", "460px"]}
                  w={["80vw", "60vw", "30vw", "25vw"]}
                  mt={["0", "24", "-8", "8"]}
                  p={0}
                  position={"relative"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontFamily={"Quicksand"}
                  fontWeight={"700"}
                  fontSize={["10px", "18"]}
                  flexDir={"column"}
                  transform={[
                    "scale(0.14)",
                    "scale(0.14)",
                    "scale(0.1)",
                    "scale(0.14)",
                  ]}
                  gap={[10, 10, 40, 32, 12]}
                  // h={"max-content"}
                  // mt={["-3vh", "10vh", "8vh", "20vh"]}
                  // transform={["scale(1)", "scale(0.9)"]}
                  // opacity={0}
                  // transform={["scale(0.8)", "scale(1)"]}
                  // w="50%"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.2 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      justifyItems={"center"}
                      alignItems={"center"}
                    >
                      <Img
                        src={colorMode === "light" ? reactD : reactN}
                        w={["60%", "55%", "70%", "55%", "45%"]}
                        filter={"brightness(.92)"}
                        // transform={[
                        //   "scale(1)",
                        //   "scale(0.8)",
                        //   "scale(1.1)",
                        //   "scale(0.6)",
                        // ]}
                        // mt={[5, 0]}
                      />
                      <Box
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                        m={5}
                        w={["180vw", "180vw", "69vw"]}
                      >
                        React Js
                      </Box>
                    </Grid>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.4 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                    >
                      <Img
                        src={ts}
                        w={["50%", "60%", "60%", "50%"]}
                        // w="56.5%"
                        // transform={[
                        //   "scale(0.8)",
                        //   "scale(0.8)",
                        //   "scale(0.7)",
                        //   "scale(0.5)",
                        // ]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        TypeScript
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.6 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                    >
                      <Img
                        src={reduxL}
                        // w="63.8%"
                        // transform={[
                        //   "scale(1)",
                        //   "scale(1)",
                        //   "scale(0.9)",
                        //   "scale(0.5)",
                        // ]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        Redux
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.8 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="100%"
                      justifyItems={"center"}
                      alignItems={"center"}
                    >
                      <Img
                        src={tailwind}
                        w={["40%", "40%", "50%", "30%"]}
                        // transform={[
                        //   "scale(0.6)",
                        //   "scale(0.6)",
                        //   "scale(0.6)",
                        //   "scale(0.45)",
                        // ]}
                        // mt={[5, 0]}
                      />
                      <Box
                        m={"5"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                        w={["250vw", "250vw", "100vw"]}
                      >
                        Tailwind css
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 1 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      h="80%"
                      justifyItems={"center"}
                      alignItems={"center"}
                      m={10}
                    >
                      <Img
                        src={chakra}
                        w={["50%", "50%", "60%", "29%"]}

                        // transform={[
                        //   "scale(1)",
                        //   "scale(0.8)",
                        //   "scale(1.1)",
                        //   "scale(0.6)",
                        // ]}
                        // mt={[5, 0]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                        w={["200vw", "200vw", "100vw"]}
                      >
                        Chakra ui
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={12}
            position={"relative"}
            mt={["-16", "0", "0", "0", "0"]}
          >
            <Box
              mt={["24", "2"]}
              // fontSize={["sm", "xl", "xl", "22px"]}
              fontSize={["xl", "xl"]}
              fontFamily={"arial"}
              w={["80vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              p={[3, 3, 4, 3, 5]}
            >
              Backend & Baas
            </Box>

            <Box bgColor={bglCard} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "560px", "490px", "460px"]}
                  w={["80vw", "60vw", "30vw", "25vw"]}
                  mt={["0", "4", "-8", "8"]}
                  p={0}
                  gap={[10, 10, 80, 32, 32]}
                  position={"relative"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontFamily={"Quicksand"}
                  fontWeight={"700"}
                  fontSize={["10px", "18"]}
                  flexDir={"column"}
                  transform={[
                    "scale(0.14)",
                    "scale(0.14)",
                    "scale(0.1)",
                    "scale(0.14)",
                  ]}
                  // h={"max-content"}
                  // mt={["-3vh", "10vh", "8vh", "20vh"]}
                  // transform={["scale(1)", "scale(0.9)"]}
                  // opacity={0}
                  // transform={["scale(0.8)", "scale(1)"]}
                  // w="50%"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.2 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      justifyItems={"center"}
                      alignItems={"center"}
                      mb={44}
                    >
                      <Img
                        src={colorMode === "light" ? expressL : expressL}
                        w={["60%", "50%", "84%", "45%", "39%"]}
                        filter={"brightness(.92)"}
                        // transform={[
                        //   "scale(1)",
                        //   "scale(0.8)",
                        //   "scale(1.1)",
                        //   "scale(0.6)",
                        // ]}
                        // mt={[5, 0]}
                      />
                      <Box
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                        m={0}
                        w={["180vw", "180vw", "76vw", "75vw", "75vw"]}
                      >
                        Express Js
                      </Box>
                    </Grid>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.4 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                      // m={"536px 0 60px 0"}
                    >
                      <Img
                        src={colorMode === "light" ? mongoN : mongoN}
                        // w={["50%", "60%", "60%", "100%"]}
                        // w="56.5%"
                        transform={[
                          "scale(1.7)",
                          "scale(1.7)",
                          "scale(2.0)",
                          "scale(2.1)",
                        ]}
                        mb={16}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        Mongodb
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.6 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                      my={20}
                    >
                      <Img
                        src={firebase}
                        // w="63.8%"
                        transform={[
                          "scale(1.3)",
                          "scale(1.3)",
                          "scale(1.3)",
                          "scale(1.2)",
                          "scale(1.4)",
                        ]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        FireBase
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            flex={12}
            position={"relative"}
            mt={["-20", "0", "0", "0", "0"]}
          >
            <Box
              mt={["24", "2"]}
              // fontSize={["sm", "16px", "16px", "16px", "22px"]}
              fontSize={["xl", "lg", "18px", "18px", "20px"]}
              fontFamily={"arial"}
              w={["80vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              fontWeight={"200"}
              // px={1}
              p={[2, 4, 1, 0, 1]}
              // mx={-10}
            >
              <Text> Version Control </Text>
              <Text>Containerization</Text>
            </Box>

            <Box bgColor={bglCard} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "450px", "490px", "460px"]}
                  w={["80vw", "60vw", "30vw", "25vw", "25vw"]}
                  mt={["0", "4", "-8", "8"]}
                  p={0}
                  position={"relative"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontFamily={"Quicksand"}
                  fontWeight={"700"}
                  fontSize={["10px", "18"]}
                  flexDir={"column"}
                  transform={[
                    "scale(0.14)",
                    "scale(0.16)",
                    "scale(0.1)",
                    "scale(0.14)",
                  ]}
                  gap={[10, 10, 80, 32, 32]}
                  // h={"max-content"}
                  // mt={["-3vh", "10vh", "8vh", "20vh"]}
                  // transform={["scale(1)", "scale(0.9)"]}
                  // opacity={0}
                  // transform={["scale(0.8)", "scale(1)"]}
                  // w="50%"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.4 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                      // my={"90px 0 0px 0"}
                    >
                      <Img
                        src={colorMode === "light" ? githubN : githubN}
                        w={["80%", "70%", "90%", "80%"]}
                        // w="56.5%"
                        // transform={[
                        //   "scale(0.8)",
                        //   "scale(0.8)",
                        //   "scale(0.7)",
                        //   "scale(0.5)",
                        // ]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        GitHub
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.2 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      justifyItems={"center"}
                      alignItems={"center"}
                      m={"180px 0 20px 0"}
                    >
                      <Img
                        src={colorMode === "light" ? gitL : gitL}
                        w={["60%", "90%", "80%", "40%", "35%"]}
                        filter={"brightness(.92)"}
                        // transform={[
                        //   "scale(1)",
                        //   "scale(0.8)",
                        //   "scale(1.1)",
                        //   "scale(0.6)",
                        // ]}
                        // mt={[5, 0]}
                      />
                      <Box
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                        m={5}
                        w={["180vw", "75vw"]}
                      >
                        Git
                      </Box>
                    </Grid>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ delay: 0.6 }}
                  >
                    <Grid
                      templateRows={["repeat(2, 1fr)"]}
                      // h="50%"
                      justifyItems={"center"}
                      alignItems={"center"}
                      my={20}
                    >
                      <Img
                        src={docker}
                        // w="63.8%"
                        transform={[
                          "scale(1)",
                          "scale(0.9)",
                          "scale(1.2)",
                          "scale(0.9)",
                          "scale(1)",
                          // "scale(0.7)",
                        ]}
                      />
                      <Box
                        m={"3"}
                        textAlign={"center"}
                        fontSize={"9xl"}
                        color={"gray.400"}
                      >
                        Docker
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </Flex>
        </Flex>
        <Box
          visibility={["visible", "visible", "hidden", "hidden", "hidden"]}
          mx={5}
        >
          <Text
            fontFamily={"arial"}
            fontSize="2xl"
            textAlign={"center"}
            mt={"32"}
          >
            And everyday learning some more about
          </Text>
          <Text
            fontFamily={"arial"}
            fontSize="2xl"
            textAlign={"center"}
            mt={"16"}
          >
            Design, and planning better UI for a projects.
          </Text>
          <Text
            fontFamily={"arial"}
            fontSize="2xl"
            textAlign={"center"}
            mt={"16"}
          >
            APIs, Best practices, Clean Code...
          </Text>
          <Text
            fontFamily={"arial"}
            fontSize="2xl"
            textAlign={"center"}
            mt={"16"}
          ></Text>
        </Box>
      </Flex>
    </>
  );
};

export default Skills;
