import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
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

const About = () => {
  //   const bgOnLight = useColorModeValue("blue.300", "gray.900");
  const bgGradieantOnLight = useColorModeValue(
    "linear(to-b, blue.300, blue.100, blue.50)",
    "linear(to-b, gray.900, #0f2027, #0f2027)"
  );
  const [slideValue, setSlideValue] = useState(40);
  const [hoverx, setHoverx] = useState(false);

  const { colorMode } = useColorMode();

  console.log(slideValue);
  const sliderValue = (v: any) => {
    setSlideValue(v);
    // v >= 30 && setcolor("green");
  };
  // breaking points 23, 51 and

  const hovery = () => {
    setHoverx(!hoverx);
    console.log(hoverx);
  };

  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      //   justifyContent={"center"}
      flexDirection={["column"]}
      h={"100vh"}
      bgGradient={bgGradieantOnLight}
      fontFamily={"roboto"}
    >
      <Element name="About"></Element>
      <Flex
        flexDirection={["column"]}
        w={"800px"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"14vh"}
      >
        <motion.div
          whileHover={{
            y: [-1, 4, -1],
            transition: { duration: 1, repeat: Infinity },
          }}
          animate={{
            y: hoverx ? [-1, 4, -1] : [0, 0, 0],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Flex
            w={"70vw"}
            position={"relative"}
            justifyContent={"space-around"}
            top={"10px"}
          >
            <Flex
              flexDirection={["column"]}
              position={"relative"}
              alignItems={"center"}
              left={"-10.5%"}
            >
              <Box>who I am</Box>
              <TriangleDownIcon />
            </Flex>

            <Flex
              flexDirection={["column"]}
              position={"relative"}
              alignItems={"center"}
              left={"-8.5%"}
            >
              <Box> What i can do</Box>
              <TriangleDownIcon />
            </Flex>
            <Flex
              flexDirection={["column"]}
              position={"relative"}
              alignItems={"center"}
              left={"-1.5%"}
            >
              <Box> how i did it</Box>
              <TriangleDownIcon />
            </Flex>

            <Flex
              flexDirection={["column"]}
              position={"relative"}
              alignItems={"center"}
              left={"-2%"}
            >
              <Box> what i want to do </Box>
              <TriangleDownIcon />
            </Flex>
          </Flex>
        </motion.div>
        <Flex w={"70vw"} justifyContent={"space-between"}>
          <Box
            position={"relative"}
            h={"14px"}
            w={"14px"}
            bgColor={colorMode === "light" ? "blue.500" : "blue.200"}
            left={"0%"}
            top={"31px"}
            borderRadius={"100%"}
            fontSize={"30"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={"14px"}
            bgColor={
              slideValue >= 26
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={"-6.5%"}
            top={"31px"}
            borderRadius={"100%"}
            fontSize={"40"}
            transform={"rotate(-90deg)"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={"14px"}
            bgColor={
              slideValue >= 57
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={"-8%"}
            top={"31px"}
            borderRadius={"100%"}
          ></Box>
          <Box
            position={"relative"}
            h={"14px"}
            w={"14px"}
            bgColor={
              slideValue >= 84
                ? colorMode === "light"
                  ? "blue.500"
                  : "blue.200"
                : "gray.200"
            }
            left={"-15%"}
            top={"31px"}
            borderRadius={"100%"}
          ></Box>
        </Flex>
        <Flex flexDirection={["row"]}>
          <Box m={"3"}>Shorter</Box>
          <Slider
            w={"70vw"}
            aria-label="slider-ex-1"
            value={slideValue}
            position={"relative"}
            alignItems={"center"}
            onChange={(v) => sliderValue(v)}
            onMouseEnter={hovery}
            onMouseLeave={hovery}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box m={"3"}>Longer</Box>
        </Flex>
        <Box
          fontSize={"28"}
          fontWeight={"300"}
          fontFamily="roboto slab"
          color={colorMode === "light" ? "gray.900" : "gray.100"}
          position={"relative"}
          mb={"3"}
          letterSpacing="wider"
        >
          I'm a self thaught Frontend focused Web Developer
        </Box>
        <Box
          fontSize={"24"}
          fontWeight={"200"}
          color={colorMode === "light" ? "gray.800" : "gray.200"}
          position={"relative"}
          h={slideValue * 5}
          transition={"all .2s ease-out"}
          overflow={"hidden"}
          lineHeight="9"
          letterSpacing={"wide"}
          fontFamily="roboto slab"
        >
          <Box m={3} style={{ textIndent: 40 }}>
            who can build creative user friendly interfaces (but also full
            backend for full control) of Websites and Web Applications, bringing
            both the technical and visual aspects of a product.
          </Box>
          <Box m={3} style={{ textIndent: 40 }}>
            I started learning to code in mid 2020, with python then moved to
            Javascript all the way to MERN Stack, where i fell in love with the
            infinite possibility of creating and renovating incredible projects.
          </Box>
          <Box m={3} style={{ textIndent: 40 }}>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills then
            don't hesitate to contact me.
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
