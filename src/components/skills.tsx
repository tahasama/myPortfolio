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

// import bubbles from "../images/bubbles.jpg";
// import palm1 from "../images/palm1.png";

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

  // const { scrollY } = useViewportScroll();

  // const x2 = useTransform(
  //   scrollY,
  //   [900, 1000, 1200, 1300],
  //   [-900, -450, -450, -900]
  // );
  // const y2 = useTransform(scrollY, [800, 1000], [0, -100]);

  // const x3 = useTransform(
  //   scrollY,
  //   [900, 1000, 1200, 1300],
  //   [1000, 550, 550, 1000]
  // );
  // const y3 = useTransform(scrollY, [900, 1000], [0, -100]);

  return (
    <>
      <Element name="Skills"></Element>

      <Flex
        // w={"100%"}
        flexDir={["column", "column", "column", "column"]}
        fontFamily={"roboto"}
        bgGradient={bgOnLight}
        clipPath={[
          // "ellipse(59% 65% at 40% 65%)",
          "circle(50.7% at 49% 50%)",
          "circle(50.7% at 49% 50%)",
          "ellipse(100% 100% at 47% 100%)",
          "ellipse(100% 100% at 50% 100%)",
          "ellipse(100% 100% at 45% 100%)",
        ]}
        mt={["-100vh", "-100vh", "-80vh", "-85vh", "-80vh"]}
        // mt={["-140vh", "-130vh", "-75vh", "-75vh", "-75vh"]}
        h={["3300px", "3000px", "260vh", "290vh", "280vh"]}
        // h={"100%"}
        py={"28"}
      >
        {/* <Element name="Skills"></Element> */}
        {/* <motion.div style={{ margin: 0, padding: 0, width: "100%" }}> */}
        {/* <Element name="Skills"></Element> */}
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          // gap={[0, 4]}
          position={"relative"}
          justifyContent={"space-evenly"}
          fontSize={"20"}
          fontWeight={"600"}
          fontFamily={"Quicksand"}
          mt={["52vh", "72vh", "24vh", "10vh", "10vh"]}
          transform={["scale(0.78)", "scale(0.8)", "scale(0.8)", "scale(1)"]}
          mx={"40"}
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
        {/* </motion.div> */}
        {/* skills */}

        <Flex
          mt={["-12", "-6", "32", "32", "40"]}
          flexDir={["column", "column", "row", "row", "row"]}
          gap={[3, 10, 0]}
          justifyContent={"space-around"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            mt={["-10", "0", "0", "0", "0"]}
          >
            <Box
              mt={["20", "3"]}
              fontSize={["xl", "xl", "lg", "xl"]}
              fontFamily={"arial"}
              w={["86vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              p={[3, 3, 4, 5, 4]}
            >
              Frontend
            </Box>

            <Box
              bgColor={bglCard}
              borderBottomRadius={"40"}
              py={0}
              h={["70%", "70%", "100%", "80%", "100%"]}
            >
              <Flex
                w={["86vw", "60vw", "30vw", "25vw"]}
                mt={["3", "2", "8", "6", "4"]}
                position={"relative"}
                justifyContent={"space-around"}
                alignItems={"center"}
                textAlign={"center"}
                flexDir={["row", "row", "column"]}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={colorMode === "light" ? reactD : reactN}
                      w={["74px", "74px", "48px", "58px", "68px"]}
                      filter={"brightness(.92)"}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"}>
                      React Js
                    </Box>
                  </Grid>
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={ts}
                      w={["64px", "64px", "48px", "48px", "58px"]}
                      filter={"brightness(.92)"}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"} mt={1}>
                      TypeScript
                    </Box>
                  </Grid>
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={reduxL}
                      w={["70px", "70px", "38px", "48px", "58px"]}
                      filter={"brightness(.92)"}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"}>
                      Redux
                    </Box>
                  </Grid>
                </motion.div>
              </Flex>

              <Flex
                w={["86vw", "60vw", "30vw", "25vw"]}
                // mt={["0", "2", "8", "24", "24"]}
                position={"relative"}
                justifyContent={"space-around"}
                alignItems={"center"}
                textAlign={"center"}
                flexDir={["row", "row", "column"]}
                mt={[-3]}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.8 }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={tailwind}
                      w={["70px", "70px", "48px", "58px", "68px"]}
                      mb={2}
                      mt={[0, 0, 7, 4, 4]}
                    />
                    <Box textAlign={"center"} color={"gray.400"} mt={-8}>
                      Tailwind css
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
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={chakra}
                      w={["70px", "70px", "48px", "58px", "68px"]}
                      mb={[-1]}
                      mt={[0, 0, -4, -4, -7]}
                    />
                    <Box
                      textAlign={"center"}
                      color={"gray.400"}
                      mt={[-6, 0, 2, -1, -1]}
                    >
                      Chakra ui
                    </Box>
                  </Grid>{" "}
                </motion.div>
              </Flex>
            </Box>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            mt={["-10", "0", "0", "0", "0"]}
          >
            <Box
              mt={["2", "2"]}
              fontSize={["xl", "xl", "lg", "xl"]}
              fontFamily={"arial"}
              w={["86vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              p={[3, 3, 4, 5, 4]}
            >
              Backend & Baas
            </Box>

            <Box
              bgColor={bglCard}
              borderBottomRadius={"40"}
              py={0}
              h={["60%", "80%", "90%", "80%", "90%"]}
            >
              <Flex
                w={["86vw", "60vw", "30vw", "25vw"]}
                mt={["1", "2", "20", "12", "20"]}
                position={"relative"}
                justifyContent={"space-around"}
                alignItems={"center"}
                textAlign={"center"}
                flexDir={["row", "row", "column"]}
                p={[0, 0, 0, 6, 0]}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={colorMode === "light" ? expressL : expressL}
                      w={["60px", "60px", "44px", "54px", "64px"]}
                      filter={"brightness(.92)"}
                      mb={2}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"} mt={-7}>
                      Express Js
                    </Box>
                  </Grid>
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={firebase}
                      w={["110px", "110px", "90px", "100px", "110px"]}
                      filter={"brightness(.92)"}
                    ></Img>
                    <Box
                      textAlign={"center"}
                      color={"gray.400"}
                      mt={[-12, -12, 0, -8, -6]}
                    >
                      Firebase
                    </Box>
                  </Grid>
                </motion.div>
              </Flex>

              <Flex
                w={["86vw", "60vw", "30vw", "25vw"]}
                // mt={["0", "2", "8", "24", "24"]}
                position={"relative"}
                justifyContent={"space-around"}
                alignItems={"center"}
                textAlign={"center"}
                flexDir={["row", "row", "column"]}
                mt={[-7, -7, 0, 0, 0]}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.8 }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                    mt={["-12", "-12", "-12", "-28", "-12"]}
                    py={[6, 6, 6, 16, 6]}
                  >
                    <Img
                      src={colorMode === "light" ? mongoN : mongoN}
                      w={["160px", "480px", "130px", "140px", "150px"]}
                      // mb={20}
                      // h={"80px"}
                    />
                    <Box
                      textAlign={"center"}
                      color={"gray.400"}
                      mt={["-24", "-24", -16, -16, -16]}
                    >
                      Mongo db
                    </Box>
                  </Grid>{" "}
                </motion.div>
              </Flex>
            </Box>
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            mt={["-10", "0", "0", "0", "0"]}
          >
            <Box
              mt={["10", "2"]}
              fontSize={["xl", "xl", "lg", "xl"]}
              fontFamily={"arial"}
              w={["86vw", "60vw", "30vw", "25vw"]}
              bgColor={bglCardHead}
              borderTopRadius={"18"}
              textAlign={"center"}
              p={[3, 3, 1, 1, "1px"]}
            >
              <Text> Version Control </Text>
              <Text>Containerization</Text>
            </Box>

            <Box
              bgColor={bglCard}
              borderBottomRadius={"40"}
              py={0}
              h={["100%", "100%", "90%", "80%", "90%"]}
            >
              <Flex
                w={["86vw", "60vw", "30vw", "25vw"]}
                mt={["3", "2", "20", "20", "20"]}
                position={"relative"}
                justifyContent={"space-around"}
                alignItems={"center"}
                textAlign={"center"}
                flexDir={["row", "row", "column"]}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={colorMode === "light" ? gitL : gitL}
                      w={["60px", "500px", "50px", "60px", "70px"]}
                      filter={"brightness(.92)"}
                      mb={2}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"} mt={-4}>
                      Git
                    </Box>
                  </Grid>
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={colorMode === "light" ? githubN : githubN}
                      w={["65px", "500px", "44px", "54px", "64px"]}
                      filter={"brightness(.92)"}
                      mb={1}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"} mt={-4}>
                      GitHub
                    </Box>
                  </Grid>
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    templateRows={["repeat(2, 1fr)"]}
                    justifyItems={"center"}
                    alignItems={"center"}
                  >
                    <Img
                      src={docker}
                      w={["68px", "500px", "50px", "60px", "70px"]}
                      filter={"brightness(.92)"}
                    ></Img>
                    <Box textAlign={"center"} color={"gray.400"} mt={-4}>
                      Docker
                    </Box>
                  </Grid>
                </motion.div>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Skills;
