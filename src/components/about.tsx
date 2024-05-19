import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  Radio,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Element, Link } from "react-scroll";

const About = () => {
  const bgOnLight = useColorModeValue(
    "linear( #3AC9CD, cyan.200)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const [selected, setSelected] = useState("shorter");
  const { colorMode } = useColorMode();
  const radioValue = (e: any) => setSelected(e.target.value);

  return (
    <Box
      position={"relative"}
      alignItems={"center"}
      bgGradient={bgOnLight}
      fontFamily={"roboto"}
      h={"fit-content"}
      justifyContent={"center"}
    >
      <Element name="About"></Element>
      <Box filter="auto" brightness={colorMode === "light" ? "" : "80%"}>
        <svg
          fill={colorMode !== "light" ? "#171923" : "#63B3ED"}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1200 10 1200 0 0 0 0 80z"
            className="shape-fill"
          ></path>
        </svg>
      </Box>
      <Flex flexDir={"column"} alignItems={"center"}>
        <Flex
          justifyContent={"center"}
          fontFamily={"ms madi"}
          zIndex={"1"}
          w={["72", "80", "sm", "md"]}
          gap={10}
          fontSize={["xs", "md", "md", "lg", "lg"]}
          bgGradient={
            colorMode !== "light"
              ? "linear(  whiteAlpha.200, whiteAlpha.100)"
              : "linear(  blackAlpha.100, blackAlpha.200)"
          }
          p={[1, 1, 4]}
          rounded={"xl"}
          m={3}
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
          position={"relative"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
          fontSize={["md", "md", "lg", "xl", "2xl"]}
          fontWeight={["400", "300", "300"]}
          color={colorMode === "light" ? "gray.800" : "gray.200"}
          transition={"all .2s ease-out"}
          lineHeight={["6", "9"]}
          letterSpacing={"wide"}
          fontFamily="roboto slab"
          pb={20}
          mt={-10}
          mx={[3, 3, 16]}
        >
          {(selected === "" ||
            selected === "full" ||
            selected === "short" ||
            selected === "shorter") && (
            <Box
              flexDirection={"column"}
              fontWeight={["400", "300", "300"]}
              color={colorMode === "light" ? "gray.800" : "gray.300"}
              position={"relative"}
              overflow={"hidden"}
              transition={"all .2s ease-out"}
              lineHeight={["6", "9"]}
              letterSpacing={"wide"}
              fontFamily="roboto slab"
              mt={selected === "" ? 40 : 20}
              textAlign={"center"}
            >
              I'm a self thaught Developer
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
                px={0}
                py={2}
                style={{ textIndent: 40 }}
                color={colorMode === "light" ? "gray.800" : "gray.300"}
              >
                Hi there! I'm a<Text as={"b"}> Web</Text> and
                <Text as={"b"}> mobile</Text> App Developer with a passion for
                creating user-friendly interfaces and building solid backends
                for seamless user experiences, bringing both the technical and
                visual aspects of a product.
              </Text>
            </motion.div>
          )}
          {(selected === "full" || selected === "short") && (
            <motion.div
              animate={{ x: [1000, -20, 0, -10, 0], opacity: [0.5, 0.8, 1] }}
              transition={{ duration: 2 }}
            >
              <Box
                px={0}
                py={2}
                style={{ textIndent: 40 }}
                color={colorMode === "light" ? "gray.800" : "gray.300"}
              >
                I'm self-taught and started learning to code in mid-2021. Since
                then, I've gained proficiency in Python and JavaScript and have
                been exploring different technologies like the
                <Text as={"b"}> MERN Stack </Text> and{" "}
                <Text as={"b"}> React Native/Expo </Text> universe. I'm excited
                about the possibilities of building creative and innovative
                projects.
              </Box>
            </motion.div>
          )}
          {selected === "full" && (
            <motion.div
              animate={{ x: [-1000, 20, 0, 10, 0], opacity: [0.5, 0.8, 1] }}
              transition={{ duration: 1.5 }}
            >
              <Box
                px={0}
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
              my={["8", "12", "8", "16", "12"]}
              py={["7", "7", "9"]}
              px={["8vw", "7vw"]}
              bg={colorMode === "light" ? "#fa5E3E" : "blue.600"}
              _hover={{
                bg: `${colorMode === "light" ? "#fa5E3E" : "blue.700"}`,
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
                  ? " -10px 10px 5px #4d4a4a"
                  : " -7px 7px 3px #1A365D"
              }`}
            >
              Get In Touch!
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
