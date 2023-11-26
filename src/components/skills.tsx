import {
  Box,
  Text,
  Flex,
  Grid,
  Img,
  useColorMode,
  useColorModeValue,
  DarkMode,
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
import { SiChakraui, SiExpo } from "react-icons/si";

// import bubbles from "../images/bubbles.jpg";
import palm1 from "../images/palm1.png";

import { motion } from "framer-motion";
// import Projects from "./projects";
import { Element } from "react-scroll";
import { useState } from "react";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgOnLight = useColorModeValue(
    "linear( blue.200, blue.200, blue.100)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const bglCardHead = useColorModeValue("white", "gray.400");
  const bglCardHead2 = useColorModeValue("gray.500", "gray.400");
  const bglCard = useColorModeValue("blue.400", "blue.700");

  const [isMobile, setIsMobile] = useState(false);

  function reportWindowSize() {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = reportWindowSize;
  console.log(window.onresize);

  return (
    <Box mt={-14}>
      <Element name="Skills"></Element>
      <Box bgColor={colorMode !== "light" ? "#171923" : "#9DECF9"}>
        <div>
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 270"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="wave-gradients"
                gradientTransform="rotate(90)"
              >
                <stop
                  stop-color={colorMode !== "light" ? "#1A202C" : "#90CDF4"}
                  offset="0%"
                ></stop>
                <stop
                  stop-color={colorMode !== "light" ? "#171923" : "#90CDF4"}
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#wave-gradients)"
              d="M0,108L80,130.5C160,153,320,198,480,184.5C640,171,800,99,960,58.5C1120,18,1280,9,1440,13.5C1600,18,1760,36,1920,58.5C2080,81,2240,108,2400,126C2560,144,2720,153,2880,135C3040,117,3200,72,3360,85.5C3520,99,3680,171,3840,202.5C4000,234,4160,225,4320,202.5C4480,180,4640,144,4800,117C4960,90,5120,72,5280,67.5C5440,63,5600,72,5760,72C5920,72,6080,63,6240,85.5C6400,108,6560,162,6720,189C6880,216,7040,216,7200,216C7360,216,7520,216,7680,202.5C7840,189,8000,162,8160,135C8320,108,8480,81,8640,63C8800,45,8960,36,9120,31.5C9280,27,9440,27,9600,36C9760,45,9920,63,10080,90C10240,117,10400,153,10560,175.5C10720,198,10880,207,11040,180C11200,153,11360,90,11440,58.5L11520,27L11520,270L11440,270C11360,270,11200,270,11040,270C10880,270,10720,270,10560,270C10400,270,10240,270,10080,270C9920,270,9760,270,9600,270C9440,270,9280,270,9120,270C8960,270,8800,270,8640,270C8480,270,8320,270,8160,270C8000,270,7840,270,7680,270C7520,270,7360,270,7200,270C7040,270,6880,270,6720,270C6560,270,6400,270,6240,270C6080,270,5920,270,5760,270C5600,270,5440,270,5280,270C5120,270,4960,270,4800,270C4640,270,4480,270,4320,270C4160,270,4000,270,3840,270C3680,270,3520,270,3360,270C3200,270,3040,270,2880,270C2720,270,2560,270,2400,270C2240,270,2080,270,1920,270C1760,270,1600,270,1440,270C1280,270,1120,270,960,270C800,270,640,270,480,270C320,270,160,270,80,270L0,270Z"
            ></path>
          </svg>
        </div>
      </Box>
      <Flex
        flexDir={["column", "column", "column", "column"]}
        fontFamily={"roboto"}
        bgGradient={bgOnLight}
      >
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={[0, 0, 10, 0, 0]}
          position={"relative"}
          // justifyContent={"center"}
          // alignItems={"center"}
          fontSize={"28"}
          fontWeight={"600"}
          fontFamily={"Quicksand"}
          placeItems={"center"}
          color={bglCardHead}
          // mt={["-13vh", "-13vh", "-14vh", "-22vh", "-18vh"]}
          // mt={"-20"}
          transform={["scale(0.78)", "scale(0.8)", "scale(0.8)", "scale(.8)"]}
          mx={[0, 0, 0, 20]}
          // p={5}
          mt={5}
        >
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            m={[0, 0, 0, "2"]}
            w={100}
            transform={["scale(.8)", "scale(.8)", "scale(1)"]}
          >
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
              h={["135px", "135px", "110px", "110px"]}
              w={["150px", "150px", "120px", "130px"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor={bglCard}
            >
              <motion.div
                whileInView={{ scaleX: [-1, 1] }}
                transition={{ duration: 0.7 }}
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
              fontSize={[21, 25]}
              fontWeight={500}
              mx={["0", "0"]}
              h={"44"}
              w={"48"}
            >
              User friendly and easy to use
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            flexDir={"column"}
            m={[0, 0, "2"]}
            w={100}
            transform={["scale(.8)", "scale(.8)", "scale(1)"]}
          >
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
              h={["135px", "135px", "110px", "110px"]}
              w={["150px", "150px", "120px", "130px"]}
              mx={"5"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor={bglCard}
              textAlign={"center"}
            >
              <motion.div
                whileInView={{ scaleX: [-1, 1] }}
                transition={{ duration: 0.7 }}
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
              fontSize={[21, 25]}
              fontWeight={500}
              mx={["0", "0"]}
              h={"44"}
              w={"48"}
            >
              layouts that works on any device
            </Box>
          </Flex>

          <Flex
            flexDir={"column"}
            alignItems={"center"}
            m={[0, 0, "2"]}
            w={100}
            transform={["scale(.8)", "scale(.8)", "scale(1)"]}
          >
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
              h={["135px", "135px", "110px", "110px"]}
              w={["150px", "150px", "120px", "130px"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor={bglCard}
            >
              <motion.div
                whileInView={{ scaleX: [-1, 1] }}
                transition={{ duration: 0.7 }}
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
              fontSize={[21, 25]}
              fontWeight={500}
              mx={["0", "0"]}
              h={"44"}
              w={"48"}
            >
              from idea to great product
            </Box>
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            m={[0, 0, "2"]}
            w={100}
            transform={["scale(.8)", "scale(.8)", "scale(1)"]}
          >
            <Flex
              clipPath={
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
              }
              // mt={["0", "12", "0", "32"]}
              h={["135px", "135px", "110px", "110px"]}
              w={["150px", "150px", "120px", "130px"]}
              mx={"5"}
              bg={"white"}
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
              color="blue.50"
              bgColor={bglCard}
            >
              <motion.div
                whileInView={{ scaleX: [-1, 1] }}
                transition={{ duration: 0.7 }}
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
              fontSize={[21, 25]}
              fontWeight={500}
              mx={["0", "0"]}
              h={"44"}
              w={"48"}
            >
              full stack and databases
            </Box>
          </Flex>
        </Grid>
        {/* </motion.div> */}
        {/* skills */}

        <Flex
          position={"relative"}
          w={"100%"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={["-20", -2]}
        >
          {/* <ParallaxText baseVelocity={-5}> */}
          <Flex
            w={["100%", "80%"]}
            position={"relative"}
            justifyContent={"space-around"}
            alignItems={"center"}
            textAlign={"center"}
            flexWrap={"wrap"}
            fontSize={"6xl"}
            color={colorMode !== "light" ? "gray" : "white"}
            // gap={[20, 20, 0]}
            gap={[5, 10, 0]}
            mt={[0, 0, 12]}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-react-original"></i>
              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                React js
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <SiExpo />
              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Expo
              </Box>
            </Grid>{" "}
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-typescript-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                TypeScript
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-redux-original"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Redux
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-tailwindcss-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Tailwind
              </Box>
            </Grid>{" "}
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <SiChakraui />
              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Chakra UI
              </Box>
            </Grid>{" "}
          </Flex>
          {/* </ParallaxText> */}
          <br />
          <br />
          {/* <br /> */}
          {/* <ParallaxText baseVelocity={5}> */}
          <Flex
            // w={["86vw", "60vw", "30vw", "25vw"]}
            w={["100%", "80%"]}
            // mt={["0", "2", "8", "24", "24"]}
            position={"relative"}
            justifyContent={"space-around"}
            alignItems={"center"}
            textAlign={"center"}
            flexWrap={"wrap"}
            fontSize={"6xl"}
            color={colorMode !== "light" ? "gray" : "white"}
            gap={[5, 10, 0]}
          >
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-mongodb-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Mongo db
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-firebase-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Firebase
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-express-original"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Express Js
              </Box>
            </Grid>

            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-git-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Git
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-github-original"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                GitHub
              </Box>
            </Grid>
            <Grid
              templateRows={["repeat(2, 1fr)"]}
              justifyItems={"center"}
              alignItems={"center"}
              h={100}
              w={100}
              transform={["scale(.8)", "scale(.8)", "scale(1)"]}
            >
              <i className="devicon-docker-plain"></i>

              <Box textAlign={"center"} color={bglCardHead2} fontSize={"xl"}>
                Docker
              </Box>
            </Grid>
          </Flex>
          {/* </ParallaxText> */}
        </Flex>
        {/* <Box>gggggggggg</Box> */}
      </Flex>
    </Box>
  );
};

export default Skills;
