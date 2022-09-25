import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Radio,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Element } from "react-scroll";
import Skills from "./skills";

const About = () => {
  const bgOnLight = useColorModeValue("green.300", "gray.900");
  // const bgGradieantOnLight = useColorModeValue(
  //   "linear(to-r, orange.400, orange.400)",
  //   "linear(to-r, blue.700, ,blue.700)"
  // );

  const [selected, setSelected] = useState("");

  const { colorMode } = useColorMode();

  const radioValue = (e: any) => setSelected(e.target.value);

  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      //   justifyContent={"center"}
      flexDirection={["column"]}
      h={"130vh"}
      //   w="100vw"
      //   bgGradient={bgGradieantOnLight}
      bg={bgOnLight}
      fontFamily={"roboto"}
      top={"-25vh"}
    >
      <Element name="About"></Element>

      <Flex
        flexDirection={["column"]}
        // w={"100%"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={["0vh", "22vh"]}
        zIndex={"1"}
      >
        <Flex
          // position={"relative"}
          justifyContent={"space-around"}
          top={["15px", "10px"]}
          fontWeight={"500"}
          fontFamily={"ms madi"}
          zIndex={"1"}
          textAlign="center"
          w={["90%", "30%"]}
          // ml={["6", "5", "0"]}
        >
          <Flex
            flexDirection={["column"]}
            position={"relative"}
            alignItems={"center"}
            // left={["-14%", "-10.5%"]}
            // w={["12", "80vw"]}
          >
            <Box>Shortest</Box>
            <TriangleDownIcon />
            <Radio
              onChange={radioValue}
              value=""
              defaultChecked={true}
              isChecked={selected === "" ? true : false}
              m={"1"}
            />
          </Flex>

          <Flex
            flexDirection={["column"]}
            position={"relative"}
            alignItems={"center"}
            // left={["-13%", "-7.5%"]}
            // w={["12", "auto"]}
          >
            <Box> Shorter</Box>
            <TriangleDownIcon />
            <Radio
              onChange={radioValue}
              value="shorter"
              isChecked={selected === "shorter" ? true : false}
              m={"1"}
            />
          </Flex>
          <Flex
            flexDirection={["column"]}
            position={"relative"}
            alignItems={"center"}
            // left={["-7.5%", "-1%"]}
            // w={["12", "auto"]}
          >
            <Box>Short</Box>
            <TriangleDownIcon />
            <Radio
              onChange={radioValue}
              value="short"
              isChecked={selected === "short" ? true : false}
              m={"1"}
            />
          </Flex>

          <Flex
            flexDirection={["column"]}
            position={"relative"}
            alignItems={"center"}
            // left={["1%", "-1.5%"]}
            // w={["12", "auto"]}
          >
            <Box> Full </Box>

            <TriangleDownIcon />
            <Radio
              onChange={radioValue}
              value="full"
              isChecked={selected === "full" ? true : false}
              m={"1"}
            />
          </Flex>
        </Flex>

        {/* <Flex w={"70vw"} justifyContent={"space-between"}>
          <Box
            position={"relative"}
            h={"14px"}
            w={["25px", "42px"]}
            borderRadius={"2xl"}
            bgColor={colorMode === "light" ? "blue.500" : "blue.200"}
            left={["5.5%", "0%"]}
            top={"31px"}
            fontSize={"30"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={["25px", "42px"]}
            borderRadius={"2xl"}
            bgColor={
              slideValue >= 26
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={["-3%", "-5%"]}
            top={"31px"}
            fontSize={"40"}
            // transform={"rotate(-90deg)"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={["25px", "42px"]}
            borderRadius={"2xl"}
            bgColor={
              slideValue >= 57
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={["-6.5%", "-5.5%"]}
            top={"31px"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={"42px"}
            borderRadius={"2xl"}
            bgColor={
              slideValue >= 84
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={["-7%", "-13%"]}
            top={"31px"}
          ></Box>
        </Flex> */}
        <Flex flexDirection={["row"]}>
          {/* <Box my={["3"]} mx={["3"]} fontSize={["sm", "md"]}>
            Shorter
          </Box>
          <Box></Box>
          <Box my={["3"]} mx={["3"]} fontSize={["sm", "md"]}>
            Longer
          </Box> */}
        </Flex>
        {(selected === "" ||
          selected === "full" ||
          selected === "short" ||
          selected === "shorter") && (
          <Box
            // w={"100%"}
            //   display="inline"
            fontSize={["20px", "20px", "26px"]}
            fontWeight={["500", "400"]}
            fontFamily="roboto slab"
            //   color={colorMode === "light" ? "gray.900" : "gray.100"}
            //   position={"relative"}
            textAlign="center"
            my={"3"}
            mx={"2"}
            letterSpacing="wider"
            w={"97vw"}
          >
            I'm a self thaught Frontend focused Web Developer
          </Box>
        )}
        <Flex
          flexDirection={"column"}
          fontSize={["17px", "23px"]}
          fontWeight={["400", "300"]}
          color={colorMode === "light" ? "gray.800" : "gray.200"}
          position={"relative"}
          h={"full"}
          overflow={"hidden"}
          transition={"all .2s ease-out"}
          lineHeight={["6", "9"]}
          letterSpacing={"wide"}
          fontFamily="roboto slab"
          mx={["2", "5"]}
          justifyContent={"center"}
          alignItems={"center"}

          // bg={"yellow"}
        >
          {(selected === "full" ||
            selected === "short" ||
            selected === "shorter") && (
            <motion.div
              animate={{ x: [-1000, 20, 0, 10, 0], opacity: [0.5, 0.8, 1] }}
              transition={{ duration: 2 }}
            >
              <Box
                // m={3}
                px={3}
                py={2}
                // bgGradient={
                //   colorMode === "light"
                //     ? "linear(to-br, green.400, teal.400, blue.300)"
                //     : "linear(to-br, gray.900, gray.900, purple.900)"
                // }
                style={{ textIndent: 40 }}
                // border={`thick double ${
                //   colorMode === "light" ? "#3182CE" : "#90CDF4"
                // }`}
                // boxShadow={` ${
                //   colorMode === "light"
                //     ? " -10px 10px 5px green"
                //     : " -7px 7px 7px #2C5282"
                // }`}
                // borderRadius={"10"}
              >
                I can build creative user friendly interfaces (but also full
                backend for full control) of Websites and Web Applications,
                bringing both the technical and visual aspects of a product.
              </Box>
            </motion.div>
          )}
          {(selected === "full" || selected === "short") && (
            <motion.div
              animate={{ x: [1000, -20, 0, -10, 0], opacity: [0.5, 0.8, 1] }}
              transition={{ duration: 2 }}
            >
              {" "}
              <Box
                // m={3}
                px={3}
                py={2}
                // bgGradient={
                //   colorMode === "light"
                //     ? "linear(to-br, green.400, teal.400, blue.300)"
                //     : "linear(to-br, gray.900, gray.900, purple.900)"
                // }
                style={{ textIndent: 40 }}
                // border={`thick double ${
                //   colorMode === "light" ? "#3182CE" : "#90CDF4"
                // }`}
                // boxShadow={` ${
                //   colorMode === "light"
                //     ? " -10px 10px 5px green"
                //     : " -7px 7px 7px #2C5282"
                // }`}
                // borderRadius={"10"}
              >
                I started learning to code in mid 2020, with python then moved
                to Javascript all the way to MERN Stack, where i fell in love
                with the infinite possibility of creating and renovating
                incredible projects.
              </Box>
            </motion.div>
          )}
          {selected === "full" && (
            <motion.div
              animate={{ x: [-1000, 20, 0, 10, 0], opacity: [0.5, 0.8, 1] }}
              transition={{ duration: 1.5 }}
            >
              <Box
                // m={3}
                px={3}
                py={2}
                // bgGradient={
                //   colorMode === "light"
                //     ? "linear(to-br, green.400, teal.400, blue.300)"
                //     : "linear(to-br, gray.900, gray.900, purple.900)"
                // }
                style={{ textIndent: 40 }}
                // border={`thick double ${
                //   colorMode === "light" ? "#3182CE" : "#90CDF4"
                // }`}
                // boxShadow={` ${
                //   colorMode === "light"
                //     ? " -10px 10px 5px #276749"
                //     : " -7px 7px 7px #2C5282"
                // }`}
                // borderRadius={"10"}
              >
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills then
                don't hesitate to contact me.
              </Box>
            </motion.div>
          )}
          <Button
            // h={"16"}
            // w={"40"}
            m={"6"}
            py={"5vh"}
            px={"7vw"}
            bg={colorMode === "light" ? "orange.500" : "blue.600"}
            _hover={{
              bg: `${colorMode === "light" ? "orange.600" : "blue.700"}`,
              transform: "translate(-5px,5px)",
              boxShadow: "0px 0px 0px #276749",
            }}
            _active={{
              bg: `${colorMode === "light" ? "orange.600" : "blue.700"}`,
              transform: "translate(5px,5px)",
            }}
            color={"white"}
            letterSpacing={1}
            fontSize={"24"}
            fontFamily={"calibri"}
            fontWeight={["400", "500"]}
            boxShadow={` ${
              colorMode === "light"
                ? " -10px 10px 5px #276749"
                : " -7px 7px 3px #1A365D"
            }`}
          >
            Get In Touch!
          </Button>
        </Flex>
      </Flex>
      <Skills />
    </Flex>
  );
};

export default About;
