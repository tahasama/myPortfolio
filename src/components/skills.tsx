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
import expoLight from "../svg/logo-wordmark-light.png";
import expo from "../svg/logo-wordmark.png";
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";

// import bubbles from "../images/bubbles.jpg";
import palm1 from "../images/palm1.png";

import { motion, useTransform, useViewportScroll } from "framer-motion";
// import Projects from "./projects";
import { Element } from "react-scroll";
import { useState } from "react";
import { ParallaxText } from "./ParallaxText";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgOnLight = useColorModeValue(
    "linear( blue.200, blue.100)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const bglCardHead = useColorModeValue("purple.300", "purple.500");
  const bglCard = useColorModeValue("purple.700", "purple.900");

  const [isMobile, setIsMobile] = useState(false);

  function reportWindowSize() {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = reportWindowSize;
  console.log(window.onresize);

  return (
    <Box h={["100%"]}>
      {/* {colorMode !== "dark" && !isMobile && (
        <Flex
          flexDirection={"row"}
          position={"absolute"}
          w={"100%"}
          // bgColor={"red"}
          justifyContent={"space-between"}
          // top={"-20"}
          // mt={["0vh", "0vh", "-227vh", "-270vh", "-130vh"]}
          zIndex={1}
        >
          <Img
            src={palm1}
            overflow={"hidden"}
            w={["100%", "30%", "29%", "25%", "20%"]}
            mx={[6, 0, 0, 0, 0]}
          />
          <Img
            src={palm1}
            overflow={"hidden"}
            w={["100%", "30%", "29%", "25%", "20%"]}
            transform={"scaleX(-1)"}
            mx={[6, 0, 0, 0, 0]}
          />
        </Flex>
      )} */}
      <Element name="Skills"></Element>

      <Box bgColor={"blue.200"} mt={0}>
        <svg
          fill="#9DECF9"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,7.23C931.37,7.23,1200,54.48,1200,112.77V0H0V112.77C0,54.48,268.63,7.23,600,7.23Z"
            className="shape-fill"
            // bgColor="#90CDF4"
          ></path>
        </svg>
      </Box>

      <Flex
        h={"100%"}
        // top={32}
        // w={"100%"}
        flexDir={["column", "column", "column", "column"]}
        fontFamily={"roboto"}
        bgGradient={bgOnLight}
        // mt={}
        // clipPath={[
        //   // "ellipse(59% 65% at 40% 65%)",

        //   "ellipse(300% 100% at 47% 100%)",
        //   "ellipse(150% 100% at 47% 100%)",
        //   "ellipse(150% 100% at 47% 100%)",
        //   "ellipse(140% 100% at 50% 100%)",
        //   "ellipse(130% 100% at 45% 100%)",
        // ]}
        // mt={["-30vh", "-60vh", "-60vh", "-65vh", "-65vh"]}
        // mt={["-140vh", "-130vh", "-75vh", "-75vh", "-75vh"]}
        // h={["1700px", "1700px", "1400px", "1700px", "1400px"]}
        // h={"100%"}
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
          justifyContent={"center"}
          fontSize={"20"}
          fontWeight={"600"}
          fontFamily={"Quicksand"}
          // mt={["-13vh", "-13vh", "-14vh", "-22vh", "-18vh"]}
          // mt={"-20"}
          transform={["scale(0.78)", "scale(0.8)", "scale(0.8)", "scale(1)"]}
          mx={[0, 0, "40"]}
          // p={5}
        >
          <Flex flexDir={"column"} alignItems={"center"} m={"2"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
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
                whileInView={{ scaleX: [1, -1, 1] }}
                transition={{ duration: 1 }}
                style={{
                  color: colorMode !== "light" ? "gray.400" : "white",
                }}
              >
                {colorMode === "light" ? (
                  <Img
                    src={cloud}
                    h="28"
                    filter={"grayscale(0%) brightness(1.12)"}
                    transform={"scale(0.85)"}
                  />
                ) : (
                  <Img
                    src={cloudN}
                    h="20"
                    filter={"grayscale(100%) brightness(.8)"}
                    transform={"scale(0.85)"}
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
          <Flex alignItems={"center"} flexDir={"column"} m={"2"}>
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
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
                whileInView={{ scaleX: [1, -1, 1] }}
                transition={{ duration: 1 }}
                style={{
                  color: colorMode !== "light" ? "black" : "white",
                }}
              >
                {colorMode === "light" ? (
                  <Img
                    src={resN}
                    // h={["8.8vh", "7.8vh", "7vh", "8vh", "7vh"]}
                    h={16}
                    filter={"grayscale(100%) brightness(2)"}
                    m={0}
                    transform={"scale(0.85)"}
                  />
                ) : (
                  <Img
                    src={resD}
                    color="purple.500"
                    // h={["9vh", "7.4vh", "9vh", "9vh", "7.7vh"]}
                    h={16}
                    filter={"grayscale(100%) brightness(2)"}
                    transform={"scale(0.85)"}
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
              // mt={["0", "12", "0", "32"]}
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
                whileInView={{ scaleX: [1, -1, 1] }}
                transition={{ duration: 1 }}
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
              // mt={["0", "12", "0", "32"]}
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
                whileInView={{ scaleX: [1, -1, 1] }}
                transition={{ duration: 1 }}
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
        ////////////////////////
        <Box>
          <ParallaxText baseVelocity={-0.001}>Framer Motion</ParallaxText>
          <ParallaxText baseVelocity={0.001}>Scroll velocity</ParallaxText>
        </Box>
        {/* <Box>gggggggggg</Box> */}
      </Flex>
    </Box>
  );
};

export default Skills;
