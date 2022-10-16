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
// import nodeL from "../svg/node.png";
import expressL from "../svg/express.png";
import reduxL from "../svg/redux.png";
import gitL from "../svg/git.png";
import githubD from "../svg/githubD.png";
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
import { relative } from "path";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgOnLight = useColorModeValue(
    "linear( red.200 0%, pink.300 80%)",
    "linear( gray.900 0%, gray.900 80%)"
  );

  return (
    <Flex
      w={"100%"}
      flexDir={["column", "column", "column", "column"]}
      fontFamily={"roboto"}
      bgGradient={bgOnLight}
      clipPath={[
        // "ellipse(59% 65% at 40% 65%)",
        "circle(50.7% at 49% 50%)",
        "ellipse(100% 100% at 47% 100%)",
        "ellipse(100% 100% at 38% 100%)",
        "ellipse(100% 100% at 45% 100%)",
      ]}
      mt={["0", "20"]}
      h={["600vh", "300vh", "180vh", "260vh"]}
    >
      {/* skills */}
      <Flex mt={["96", "64"]} flexDir={["column", "row", "row", "row"]} mx={10}>
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={12}
          position={"relative"}
          m={["8", "8", "6", "8"]}
        >
          <Box
            mt={["24", "2"]}
            fontSize={["sm", "2xl"]}
            fontFamily={"arial"}
            w={["40vw", "25vw"]}
            bgColor={"purple.700"}
            borderTopRadius={"18"}
            textAlign={"center"}
            p={3}
          >
            Frontend
          </Box>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <Box bgColor={"purple.900"} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "450px", "490px", "460px"]}
                  w={["40vw", "40vw", "25vw"]}
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
                    "scale(0.1)",
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
                    >
                      <Img
                        src={colorMode === "light" ? reactD : reactN}
                        w={["60%", "100%", "100%", "40%"]}
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
                        w={["40%", "50%", "50%", "30%"]}
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
                        w={["250vw", "100vw"]}
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
                        w={["50%", "60%", "60%", "30%"]}

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
                        w={["200vw", "100vw"]}
                      >
                        Chakra ui
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </motion.div>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={12}
          position={"relative"}
          m={["8", "8", "6", "8"]}
        >
          <Box
            mt={["24", "2"]}
            fontSize={["sm", "sm", "22px", "22px"]}
            fontFamily={"arial"}
            w={["40vw", "25vw"]}
            bgColor={"purple.700"}
            borderTopRadius={"18"}
            textAlign={"center"}
            px={3}
            py={4}
          >
            Backend & Baas
          </Box>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <Box bgColor={"purple.900"} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "450px", "490px", "460px"]}
                  w={["40vw", "40vw", "25vw"]}
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
                    "scale(0.1)",
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
                        w={["60%", "100%", "90%", "45%"]}
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
                        w={["180vw", "75vw"]}
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
                          "scale(0.8)",
                          "scale(0.8)",
                          "scale(2.0)",
                          "scale(1.8)",
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
                        FireBase
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </motion.div>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={12}
          position={"relative"}
          m={["8", "8", "6", "8"]}
        >
          <Box
            mt={["24", "2"]}
            fontSize={["sm", "16px", "16px", "16px", "22px"]}
            fontFamily={"arial"}
            w={["40vw", "25vw"]}
            bgColor={"purple.700"}
            borderTopRadius={"18"}
            textAlign={"center"}
            px={3}
            py={[4, 4, "10px", 6, 5]}
          >
            Version Control Containerization
          </Box>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <Box bgColor={"purple.900"} borderBottomRadius={"40"} py={30}>
              {" "}
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
              >
                <Flex
                  h={["490px", "450px", "490px", "460px"]}
                  w={["40vw", "40vw", "25vw"]}
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
                    "scale(0.1)",
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
                        src={colorMode === "light" ? githubD : githubN}
                        w={["50%", "60%", "90%", "80%"]}
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
                        w={["60%", "100%", "80%", "40%"]}
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
                        Docker
                      </Box>
                    </Grid>{" "}
                  </motion.div>
                </Flex>
              </motion.div>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
