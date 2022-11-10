import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
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
    <>
      <Flex
        position={"relative"}
        alignItems={"center"}
        flexDirection={["column"]}
        h={
          selected === ""
            ? ["120vh", "100vh", "120vh", "120vh", "122vh"]
            : selected === "shorter"
            ? ["125vh", "125vh", "140vh", "140vh", "127vh"]
            : selected === "short"
            ? ["155vh", "155vh", "160vh", "160vh", "137vh"]
            : ["165vh", "175vh", "180vh", "175vh", "150vh"]
        }
        bg={bgOnLight}
        fontFamily={"roboto"}
        top={["-20vh", "-20vh", "-30vh", "-36vh", "-32vh"]}
        // transform={["scale(1)", "scale(0.8)", "scale(0.8)", "scale(1)"]}
        overflow={"hidden"}
      >
        <Element name="About"></Element>

        {colorMode !== "dark" && (
          <Box top={"20"}>
            <Birds />
          </Box>
        )}

        <Flex
          flexDirection={["column"]}
          // w={"100%"}
          position={"relative"}
          alignItems={"center"}
          justifyContent={"center"}
          // zIndex={"99"}
          top={["30vh", "30vh", "25vh", "25vh", "25vh"]}
          overflow={"hidden"}
        >
          <Flex
            justifyContent={"space-around"}
            fontWeight={"500"}
            fontFamily={"ms madi"}
            zIndex={"1"}
            textAlign="center"
            w={["100%", "full", "full", "container.md"]}
            mt={"0"}
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

          <Flex flexDirection={["row"]}>
            {(selected === "" ||
              selected === "full" ||
              selected === "short" ||
              selected === "shorter") && (
              <Box
                fontSize={["20px", "20px", "26px"]}
                fontWeight={["500", "400"]}
                fontFamily="roboto slab"
                textAlign="center"
                my={"7"}
                mx={"2"}
                letterSpacing="wider"
                w={"auto"}
              >
                I'm a self thaught Frontend focused Web Developer
              </Box>
            )}
          </Flex>
          <Flex
            flexDirection={"column"}
            fontSize={["17px", "19px", "23px"]}
            fontWeight={["400", "300", "300"]}
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
          >
            {(selected === "full" ||
              selected === "short" ||
              selected === "shorter") && (
              <motion.div
                animate={{ x: [-1000, 20, 0, 10, 0], opacity: [0.5, 0.8, 1] }}
                transition={{ duration: 2 }}
              >
                <Box px={3} py={2} style={{ textIndent: 40 }}>
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
                <Box px={3} py={2} style={{ textIndent: 40 }}>
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
                <Box px={3} py={2} style={{ textIndent: 40 }}>
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills then don't hesitate to contact me.
                </Box>
              </motion.div>
            )}
            <Link to="Contact" smooth>
              <Button
                m={"6"}
                py={["3.5vh", "5vh"]}
                px={["8vw", "7vw"]}
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
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
