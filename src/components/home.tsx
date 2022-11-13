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
import devNight2 from "../images/devNight4.png";
import dev1 from "../images/dev40.jpg";
import dev2 from "../images/dev11.jpg";
import tt from "../images/tt.jpg";
import tt1 from "../images/tt1.jpg";
import tttt from "../images/tttt.png";
import nnn from "../images/nnn.png";
import nnnight from "../images/nnnight1.png";
import airplane from "../images/airplane.png";
import parachute from "../images/parachute.png";

import CloudNstars from "./cloudNstars";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { Element, Link } from "react-scroll";

const falling = keyframes`
from,to

0%    {
  transform: translateY(0)
  opacity:1;
}
10%    {
  opacity:1;
}
90%    {
  opacity:1;
}
100%  {
  transform: translateY(100px);
}
`;

const Home = () => {
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const buttonLight = useColorModeValue("#dd6358", "teal.500");
  const buttonLightHover = useColorModeValue("#f55c56", "teal.600");
  const { colorMode, toggleColorMode } = useColorMode();

  const [pic, setPic] = useState(true);

  const enterF = () => {
    setTimeout(() => {
      setPic(!pic);
    }, 450);
  };

  const { scrollY } = useViewportScroll();
  // const x1 = useTransform(scrollY, [0, 100], [250, 1500]);
  const x2 = useTransform(scrollY, [0, 100], [-300, 1700]);
  const y2 = useTransform(scrollY, [0, 100], [0, -800]);
  // const y1 = useTransform(scrollY, [0, 100], [-150, -450]);
  const x3 = useTransform(scrollY, [0, 10], [0, 0]);
  // const o1 = useTransform(scrollY, [0, 100], [0, 1]);
  const y3 = useTransform(scrollY, [0, 100, 10000], [-200, 200, 800]);
  // const y2 = useTransform(scrollX, [0, 300], [0, -100]);

  return (
    <Box overflow={"hidden"}>
      <Element name="Home"></Element>
      {colorMode !== "dark" && (
        <motion.div
          style={{
            // x: colorMode !== "light" ? x2 : x1,
            x: x2,
            // background: "salmon",
            // y: colorMode !== "light" ? y2 : y1,
            y: y2,
            width: "100vw",
            // height: "0vw",
            position: "fixed",
            bottom: -80,
            left: 0,
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <Box
            // left={"0"}
            // bgColor={"yellow.400"}
            // zIndex={99}
            w={"20%"}
            overflow={"hidden"}
          >
            <Img src={airplane} overflow={"hidden"} />
          </Box>
        </motion.div>
      )}

      {colorMode !== "dark" && (
        <motion.div
          whileInView={{ rotate: [0.7, -0.7, 0.7] }}
          transition={{ repeat: Infinity }}
          style={{
            // x: colorMode !== "light" ? x2 : x1,
            x: x3,
            // background: "salmon",
            // y: colorMode !== "light" ? y2 : y1,
            y: y3,
            width: "10%",
            // height: "0vw",
            position: "fixed",
            top: 0,
            right: 20,
            zIndex: 2,
            overflow: "hidden",
            // opacity: o1,
            // zIndex: 99,
          }}
        >
          <Img src={parachute} overflow={"hidden"} zIndex={"99"} />
        </motion.div>
      )}

      <Flex
        position={"relative"}
        // alignItems={"center"}
        // flexDirection={["column-reverse", "column-reverse", "row"]}
        // h={"140vh"}
        // bg={bglOnLight}
        // top={"-2"}
        clipPath={[
          "polygon(0 0, 100% 0, 100% 96%, 0 100%)",
          "polygon(0 0, 100% 0, 100% 96%, 0 100%)",
          "polygon(0 0, 100% 0, 100% 86%, 0 100%)",
        ]}
        zIndex={"1"}
        h={["690px", "130vh", "120vh", "125vh", "125vh"]}
        bg={bglOnLight}
        alignItems={"center"}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        top={["0", "-24vh", "10", "0", "0"]}
        // mt={["40", "20"]}
        justifyContent={"center"}
      >
        <Box position={"absolute"} top={["0vh", "30vh", "0vh"]} right={"5"}>
          <CloudNstars />
        </Box>

        <Flex
          // top={[1, -1, -1]}
          visibility={["hidden", "hidden", "visible", "visible", "visible"]}
          position={"relative"}
          alignItems={"center"}
          // left={["0", "0", "-10", "-6", "32"]}
          mx={16}
          top={["0", "-8", "-10", "-10"]}
          // onMouseOver={() => enterF()}
          // w={["70%", "44%", "43%", "38%", "30%"]}
          cursor={"pointer"}
          onClick={toggleColorMode}
          // borderRadius={"3xl"}
          border={"white"}
          // _hover={{ animation: `${flip} 2s ease-in-out` }}
          role="group"
          w={[0, 0, "500px", "500px", "500px"]}
        >
          <motion.div
            whileHover={{
              // scale: [1.2, 1.6, 1],
              rotate: [0, 5, -5, 5, -5, 5, -5, 1],
            }}
            transition={{ type: "spring", stiffness: 1000 }}
          >
            {colorMode !== "light" ? (
              <Img
                src={!pic ? nnnight : nnnight}
                alt="devNight"
                borderRadius={"3xl"}
                boxShadow={pic ? "0px 0px 50px #2C5282" : "none"}
                filter={
                  pic
                    ? "brightness(.7) grayscale(25%)  saturate(65%)"
                    : "brightness(1) grayscale(90%)"
                }
              />
            ) : (
              <Img
                // src={pic ? dev : dev1}
                src={pic ? tttt : tttt}
                // filter={
                //   pic
                //     ? "brightness(3) grayscale(0%)"
                //     : "brightness(.9) grayscale(25%)"
                // }
                alt="devDay2"
                borderRadius={"3xl"}
              />
            )}
            <Flex
              pos={"relative"}
              // justifyContent="center"
              // mt={[-10, -10, 2, 2, 2]}
              fontWeight={"300"}
              fontSize={"xl"}
              fontFamily={"Amiri"}
              w={["0", "full"]}
              p={0}
              m={[-4, 0, 0, 0, 0]}
            >
              <Box
                textAlign={"start"}
                _groupHover={{ animation: `${falling} 1.3s ease-in-out .4s` }}
                // bgColor={"white"}
                // overflow={"visible"}
                opacity={0}
              >
                Efficient Work
              </Box>
              <Box
                textAlign={"center"}
                _groupHover={{ animation: `${falling} 1.7s ease-in-out .6s` }}
                // bgColor={"white"}
                overflow={"visible"}
                opacity={0}
              >
                Great UX
              </Box>
              <Box
                textAlign={"center"}
                _groupHover={{ animation: `${falling} 1.4s ease-in-out .2s` }}
                // bgColor={"white"}
                overflow={"visible"}
                opacity={0}
              >
                Exceptional Apps
              </Box>
              <Box
                textAlign={"end"}
                _groupHover={{ animation: `${falling} 2s ease-in-out .8s` }}
                // bgColor={"white"}
                overflow={"visible"}
                opacity={0}
              >
                Beautiful UI
              </Box>
            </Flex>
          </motion.div>
        </Flex>

        <Flex
          zIndex={2}
          flexDirection="column"
          position="relative"
          alignItems={["center", "center", "start", "start", "start"]}
          lineHeight={"taller"}
          top={["-6vh", "34vh", "-16"]}
          w={["full", "auto"]}
          // left={["0", "4", "-16", "-7", "40"]}
          ml={[0, 0, 0, 0, 0]}
        >
          <Box
            color={colorMode === "light" ? "green.600" : "green.300"}
            fontFamily={"VT323"}
            fontSize={"3xl"}
            lineHeight={"1.5"}
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
            w={["auto", "auto", "40vw", "46vw", "34vw"]}
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
            // style={{ margin: "auto" }}
            whileHover={{
              y: [-1, 4, -1],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <Link to="Projects" smooth>
              <Button
                color="white"
                letterSpacing={1}
                fontSize={"20"}
                fontWeight={["400", "500"]}
                position={"relative"}
                top={["2", "5"]}
                // left={["0", "auto", "-6", "-58px", "-15px"]}
                my={["4", "auto", 0]}
                variant="solid"
                px={["74px", "84px", "100px", "32"]}
                py={["5", "7", "6", "8"]}
                bg={buttonLight}
                _hover={{ bg: buttonLightHover }}
                _active={{ bg: buttonLightHover }}
                // w={"max"}
                // m={["auto"]}
              >
                PROJECTS
              </Button>
            </Link>
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
