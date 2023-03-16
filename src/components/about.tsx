import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  // Img,
  Radio,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Element, Link } from "react-scroll";
// import Projects from "./projects";
// import Skills from "./skills";
import Birds from "./birds";
// import bbb from "../images/bbb.png";
// import mmm from "../images/mmm.png";

const About = () => {
  const bgOnLight = useColorModeValue("green.300", "gray.900");
  const [selected, setSelected] = useState("");
  const { colorMode } = useColorMode();
  const radioValue = (e: any) => setSelected(e.target.value);

  // const x1 = useTransform(scrollY, [0, 100], [250, 1500]);
  // const y1 = useTransform(scrollY, [0, 100], [-150, -450]);
  // const x3 = useTransform(scrollY, [0, 10], [0, 0]);
  // const o1 = useTransform(scrollY, [0, 100], [0, 1]);
  // const y3 = useTransform(scrollY, [0, 100], [-200, 200]);
  // const y2 = useTransform(scrollX, [0, 300], [0, -100]);

  return (
    <Box
      h={"100%"}
      mt={[-16, -20, -20, -24, colorMode !== "dark" ? -20 : -48]}
      // zIndex={-1}
      position={"relative"}
      alignItems={"center"}
      // flexDirection={["column"]}
      // h={
      //   selected === ""
      //     ? ["100vh", "100vh", "120vh", "120vh", "60vh"]
      //     : selected === "shorter"
      //     ? ["125vh", "125vh", "140vh", "140vh", "70vh"]
      //     : selected === "short"
      //     ? ["155vh", "155vh", "160vh", "160vh", "80vh"]
      //     : ["165vh", "175vh", "180vh", "175vh", "100vh"]
      // }
      bg={bgOnLight}
      fontFamily={"roboto"}
      // top={["-20vh", "-43vh", "-30vh", "-36vh", "-32vh"]}
      // transform={["scale(1)", "scale(0.8)", "scale(0.8)", "scale(1)"]}
      overflow={"hidden"}
      justifyContent={"center"}
      // h={"100%"}
      clipPath={[
        "polygon(0 6%, 100% 0, 100% 100%, 0% 100%);",
        "polygon(0 7%, 100% 0, 100% 100%, 0% 100%);",
      ]}
    >
      <Element name="About"></Element>
      {colorMode !== "dark" && (
        <Box>
          <Birds />
        </Box>
      )}
      {/* <Box
        opacity={[0, 0, 1]}
        position={"absolute"}
        borderRadius={"50%"}
        bgColor={colorMode !== "dark" ? "green.200" : "blue.900"}
        w="25%"
        left={10}
        top={52}
        overflow={"hidden"}
      >
        <Img
          src={bbb}
          w="100%"
          filter={
            colorMode !== "dark"
              ? "none"
              : "brightness(.7) grayscale(35%)  saturate(75%)"
          }
        />
      </Box> */}
      {/* <Img src={mmm} /> */}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={"500"}
        fontFamily={"ms madi"}
        zIndex={"1"}
        textAlign="center"
        w={["100%", "full", "full"]}
        position={"absolute"}
        top={[colorMode !== "dark" ? 16 : 16, 24, 32]}
        // paddingX={[colorMode !== "dark" ? 5 : 0, 7]}
        gap={[10, 9, 24, 28, 36]}
        fontSize={["xs", "lg", "sm", "sm", "lg"]}

        // mt={"0"}
      >
        <Flex
          flexDirection={["column"]}
          position={"relative"}
          alignItems={"center"}
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

      <Flex
        flexDirection={["column"]}
        // w={"100%"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        // zIndex={"99"}
        // top={["30vh", "30vh", "25vh", "25vh", "25vh"]}
        overflow={"hidden"}
        fontSize={["md", "md", "lg", "lg", "2xl"]}
        // w={"7xl"}
        // fontSize={["17px", "19px", "23px"]}
        fontWeight={["400", "300", "300"]}
        color={colorMode === "light" ? "gray.800" : "gray.200"}
        // h={"full"}
        transition={"all .2s ease-out"}
        lineHeight={["6", "9"]}
        letterSpacing={"wide"}
        fontFamily="roboto slab"
        mx={["2", "2", "24", "60", "96"]}
        // mr={["2", "2", "24", "40", "6"]}
        // m={0}
        // top={[colorMode !== "dark" ? 16 : 40, colorMode !== "dark" ? 32 : 56]}
        top={colorMode === "light" ? [20, 20, 44, 40] : [40, 20, 48, 56]}
        // pb={
        //   selected === ""
        //     ? ["28"]
        //     : selected === "shorter"
        //     ? ["28"]
        //     : selected === "short"
        //     ? ["28"]
        //     : ["28"]
        // }
        // pb={colorMode !== "dark" ? 36 : 48}
        pb={80}
      >
        {(selected === "" ||
          selected === "full" ||
          selected === "short" ||
          selected === "shorter") && (
          <Box
            flexDirection={"column"}
            // fontSize={["17px", "19px", "23px"]}
            fontWeight={["400", "300", "300"]}
            color={colorMode === "light" ? "gray.800" : "gray.300"}
            position={"relative"}
            // h={"full"}
            overflow={"hidden"}
            transition={"all .2s ease-out"}
            lineHeight={["6", "9"]}
            letterSpacing={"wide"}
            fontFamily="roboto slab"
            mx={["2", "5"]}
            // m={0}
            justifyContent={"center"}
            alignItems={"center"}
          >
            I'm a self thaught Frontend focused Web Developer
          </Box>
        )}
        {(selected === "full" ||
          selected === "short" ||
          selected === "shorter") && (
          <motion.div
            animate={{ x: [-1000, 20, 0, 10, 0], opacity: [0.5, 0.8, 1] }}
            transition={{ duration: 2 }}
          >
            <Text
              w={["90vw", "auto"]}
              px={0}
              py={2}
              style={{ textIndent: 40 }}
              color={colorMode === "light" ? "gray.800" : "gray.300"}
            >
              I can build creative user friendly interfaces (but also full
              backend ) of <Text as={"b"}>Web</Text> and{" "}
              <Text as={"b"}>mobile</Text> Applications, bringing both the
              technical and visual aspects of a product.
            </Text>
          </motion.div>
        )}
        {(selected === "full" || selected === "short") && (
          <motion.div
            animate={{ x: [1000, -20, 0, -10, 0], opacity: [0.5, 0.8, 1] }}
            transition={{ duration: 2 }}
          >
            <Box
              w={["90vw", "auto"]}
              px={3}
              py={2}
              style={{ textIndent: 40 }}
              color={colorMode === "light" ? "gray.800" : "gray.300"}
            >
              I started learning to code in mid 2021, with python then moved to
              Javascript all the way to <Text as={"b"}>MERN Stack</Text> and
              then <Text as={"b"}>React Native / Expo</Text> World, where i fell
              in love with the infinite possibility of creating and renovating
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
              w={["90vw", "auto"]}
              px={3}
              py={2}
              style={{ textIndent: 40 }}
              color={colorMode === "light" ? "gray.800" : "gray.300"}
            >
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills then
              don't hesitate to contact me.
            </Box>
          </motion.div>
        )}
        <Link to="Contact" smooth>
          <Button
            // pb={40}
            my={["8", "12", "8", "16", "12"]}
            py={["7", "7", "9"]}
            px={["8vw", "7vw"]}
            bg={colorMode === "light" ? "red.500" : "blue.600"}
            _hover={{
              bg: `${colorMode === "light" ? "red.600" : "blue.700"}`,
              transform: "translate(-5px,5px)",
              boxShadow: "0px 0px 0px #276749",
            }}
            _active={{
              bg: `${colorMode === "light" ? "red.700" : "blue.800"}`,
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
        </Link>
      </Flex>
    </Box>
  );
};

export default About;
