// import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  background,
  Box,
  Button,
  Flex,
  // HStack,
  Img,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { MdSettings } from "react-icons/md";

// import proj1 from "../images/proj/proj1/proj1.jpeg";
// import proj1n from "../images/proj/proj1/proj1n1.png";
import proj1 from "../images/proj/proj1/QualityApp.png";
import resp from "../images/proj/proj1/resp.png";
import proj2 from "../images/proj/proj2/EditorApp.png";
import phone from "../images/proj/proj2/phone.png";
import { Element } from "react-scroll";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
// import { useState } from "react";
// import underwater from "../images/underwater.png";
import water from "../images/bubble.png";
import { SetStateAction, useState } from "react";

type HoverState = {
  [key: string]: boolean;
};

const Projects = () => {
  // const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const bgOnLight = useColorModeValue(
    "linear(blue.300, cyan.300)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const { colorMode } = useColorMode();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box h={"100%"}>
      <Element name="Projects"></Element>
      <Box bgColor={colorMode !== "light" ? "gray.900" : "blue.100"}>
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 420"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stop-color={colorMode !== "light" ? "#2D3748" : "#BEE3F8"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,126L60,147C120,168,240,210,360,231C480,252,600,252,720,245C840,238,960,224,1080,238C1200,252,1320,294,1440,273C1560,252,1680,168,1800,154C1920,140,2040,196,2160,210C2280,224,2400,196,2520,161C2640,126,2760,84,2880,119C3000,154,3120,266,3240,273C3360,280,3480,182,3600,147C3720,112,3840,140,3960,126C4080,112,4200,56,4320,77C4440,98,4560,196,4680,217C4800,238,4920,182,5040,196C5160,210,5280,294,5400,322C5520,350,5640,322,5760,280C5880,238,6000,182,6120,161C6240,140,6360,154,6480,182C6600,210,6720,252,6840,252C6960,252,7080,210,7200,196C7320,182,7440,196,7560,224C7680,252,7800,294,7920,315C8040,336,8160,336,8280,301C8400,266,8520,196,8580,161L8640,126L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stop-color={colorMode !== "light" ? "#1A202C" : "#90CDF4"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
            fill="url(#sw-gradient-1)"
            d="M0,294L60,259C120,224,240,154,360,140C480,126,600,168,720,203C840,238,960,266,1080,252C1200,238,1320,182,1440,154C1560,126,1680,126,1800,154C1920,182,2040,238,2160,238C2280,238,2400,182,2520,154C2640,126,2760,126,2880,133C3000,140,3120,154,3240,147C3360,140,3480,112,3600,140C3720,168,3840,252,3960,266C4080,280,4200,224,4320,231C4440,238,4560,308,4680,287C4800,266,4920,154,5040,112C5160,70,5280,98,5400,91C5520,84,5640,42,5760,56C5880,70,6000,140,6120,182C6240,224,6360,238,6480,238C6600,238,6720,224,6840,182C6960,140,7080,70,7200,91C7320,112,7440,224,7560,231C7680,238,7800,140,7920,126C8040,112,8160,182,8280,203C8400,224,8520,196,8580,182L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stop-color={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: 0.8 }}
            fill="url(#sw-gradient-2)"
            d="M0,294L60,252C120,210,240,126,360,140C480,154,600,266,720,280C840,294,960,210,1080,175C1200,140,1320,154,1440,168C1560,182,1680,196,1800,224C1920,252,2040,294,2160,287C2280,280,2400,224,2520,231C2640,238,2760,308,2880,308C3000,308,3120,238,3240,238C3360,238,3480,308,3600,329C3720,350,3840,322,3960,315C4080,308,4200,322,4320,294C4440,266,4560,196,4680,175C4800,154,4920,182,5040,217C5160,252,5280,294,5400,266C5520,238,5640,140,5760,126C5880,112,6000,182,6120,196C6240,210,6360,168,6480,168C6600,168,6720,210,6840,217C6960,224,7080,196,7200,161C7320,126,7440,84,7560,70C7680,56,7800,70,7920,119C8040,168,8160,252,8280,266C8400,280,8520,224,8580,196L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
        </svg>
      </Box>
      <Box
        // h={["1750px", "250vh", "185vh", "220vh", "200vh"]}
        bgGradient={bgOnLight}
        zIndex={2}
        // mt={40}
        w={"full"}
      >
        <Flex
          flexDir={"column"}
          // top={[80, 80, "60", 80, 60]}
          position={"relative"}
          gap={[24, 24, 40]}
          pt={20}
          top={40}
          pb={16} ///////////////////////////////
        >
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            mt={["-28vh", "-20vh", "-20vh", "-20vh", "-20vh"]}
            // bg={isHovered ? "blackAlpha.400" : "blackAlpha.100"}
            rounded={"3xl"}
            p={2}
            position="relative"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            transition="all 1s"
          >
            <Box w={"full"} flex={2}>
              <VStack
                // width="100%"
                position={"relative"}
                // style={{ textIndent: 40 }}
                fontSize={["20", "22", "18", "24", "24"]}
                mb={2}
                flex={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontSize={["20", "22", "18", "24", "24"]}
                  fontWeight={900}
                  fontFamily={"Raleway"}

                  // color={
                  //   colorMode === "light" && !isHovered
                  //     ? "gray.800"
                  //     : colorMode === "light" && isHovered
                  //     ? "white"
                  //     : "gray.300"
                  // }
                >
                  Storyat
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={["18", "20", "16", "22", "22"]}
                  fontWeight={900}
                  fontFamily={"Raleway"}

                  // color={
                  //   colorMode === "light" && !isHovered
                  //     ? "gray.800"
                  //     : colorMode === "light" && isHovered
                  //     ? "white"
                  //     : "gray.300"
                  // }
                >
                  A mobile app for for sharing and reacting
                </Text>

                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 32]}
                  fontSize={["17", "18", "14", "16", "20"]}
                  lineHeight={"8"}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Share a story, a situation, ....
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Share images photos, ...
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    React to others stories
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Comments and reply to comments
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Get notification for comments, reactions
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Profile with all user contribution, updates, ...
                  </ListItem>{" "}
                </List>

                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  // width="100%"
                >
                  <Text
                    color={colorMode !== "light" ? "green.500" : "red.700"}
                    fontSize={[16, 16, 17, 18]}
                    textAlign={["center", "center", "start"]}
                    fontWeight={"medium"}
                    // style={{ marginTop: 40 }}
                    mb={3}
                  >
                    for quick access please use <b>email : t@t.com</b> ,and
                    <b> passsword : tttttt</b>{" "}
                  </Text>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.storyat"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <Button
                      bgColor={colorMode !== "light" ? "teal.600" : "pink.500"}
                      _hover={{
                        bg: colorMode !== "light" ? "green.700" : "pink.600",
                      }}
                      size={"lg"}
                      w={["100%", "100%", "100%", "xl"]}
                      py={30}
                      letterSpacing={"wider"}
                    >
                      Go to app
                    </Button>
                  </Link>
                </Flex>
              </VStack>
            </Box>
            <Flex flex={2} justifyContent={"center"}>
              <Img
                src={phone}
                alt="devNight"
                borderRadius={"3xl"}
                w={["50%", "50%", "40%", "37%", "25%"]}
                ml={[0, 0, 12, 0, 0]}
                // zIndex={55}
                mb={[5, 5, 0]}
              />
            </Flex>
          </Flex>

          <Flex
            flexDir={["column", "column", "row", "row", "row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            // mt={["-8vh", "-4vh", "-10vh", "0vh", "0vh"]}
            gap={8}
          >
            <Img
              src={proj1}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "47%"]}
              ml={[0, 0, 12, 0, 0]}
              // zIndex={55}
              bgColor={"blackAlpha.100"}
              p={3}
            />

            <Flex
              w={"full"}
              gap={4}
              flexDir={"column"}
              // bgColor={"yellow"}
              // justifyContent={"center"}
              style={{ overflow: "hidden", width: "100%" }}
            >
              <VStack
                width="100%"
                position={"relative"}
                // style={{ textIndent: 40 }}
                fontSize={["20", "22", "18", "24", "24"]}
                mb={2}
                fontFamily={"Raleway"}
                fontWeight={900}
                mt={4}
              >
                <Text
                  fontSize={["20", "22", "18", "24", "24"]}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  Quality Control App :
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={["18", "20", "16", "22", "22"]}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  An app for big construction sites projects
                </Text>
              </VStack>
              <List
                style={{ textIndent: 10 }}
                ml={[0, 0, 0, 0, 40]}
                fontSize={["17", "18", "14", "16", "20"]}
                lineHeight={"8"}
                color={colorMode === "light" ? "gray.800" : "gray.300"}
              >
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Full Storage and arrangement of the documentation{" "}
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Tracking of quantities of the used materiel,
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  The advancement of the projects and its pace
                </ListItem>{" "}
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Inspection reports (Laboratory, Topography, etc... )
                </ListItem>{" "}
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Data Management (Procedures, plans, and Updates )
                </ListItem>
              </List>
              <Flex
                w={"full"}
                // justifyContent={"end"}
                alignItems={"center"}
                flexDirection={"column"}
                // ml={[0, 0, 0, 0, 16]}
                // bgColor={"red"}
              >
                <Text
                  color={colorMode !== "light" ? "green.400" : "red.600"}
                  fontSize={[14, 14, 15, 17]}
                  textAlign={["center", "center", "start"]}
                >
                  ! ALL Data and Files in this project are fake and are just for
                  demonstration !
                </Text>
                <Text
                  color={colorMode !== "light" ? "green.500" : "red.700"}
                  fontSize={[16, 16, 17, 18]}
                  textAlign={["center", "center", "start"]}
                  fontWeight={"medium"}
                  // style={{ marginTop: 40 }}
                  mb={3}
                >
                  for quick access please use <b>email : t@t.com</b> ,and
                  <b> passsword : tttttt</b>{" "}
                </Text>

                <Button
                  bgColor={colorMode !== "light" ? "teal.600" : "pink.500"}
                  _hover={{
                    bg: colorMode !== "light" ? "green.700" : "pink.600",
                  }}
                  size={"lg"}
                  w={["100%", "100%", "100%", "75%"]}
                  py={30}
                  letterSpacing={"wider"}
                  // ml={[0, 0, 0, 0, 28]}
                >
                  <Link
                    href="https://qualityc.netlify.app/"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    Go to app
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            // mt={["-8vh", "-4vh", "-10vh", "0vh", "0vh"]}
          >
            <Flex
              w={"full"}
              gap={4}
              // bgColor={"yellow"}
              // justifyContent={"center"}
              flexDir={"column"}
              style={{ overflow: "hidden", width: "100%" }}
            >
              <VStack
                width="100%"
                position={"relative"}
                // style={{ textIndent: 40 }}
                fontSize={["20", "22", "18", "24", "24"]}
                mb={2}
                fontFamily={"Raleway"}
                fontWeight={900}
                mt={4}
              >
                <Text
                  fontSize={["20", "22", "18", "20", "24"]}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  Online Editor App :
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={["18", "22", "18", "20", "24"]}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  An app for creating simple WebDev Projects
                </Text>
              </VStack>
              <List
                style={{ textIndent: 10 }}
                ml={[0, 0, 0, 0, 32]}
                fontSize={["17", "18", "14", "16", "20"]}
                lineHeight={"8"}
                color={colorMode === "light" ? "gray.800" : "gray.300"}
              >
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Create project with Vanilla Html / Css / Javacasript
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Create project with React
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Import any package
                </ListItem>{" "}
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  See immediate result
                </ListItem>{" "}
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  Create/Read/Update/Delete own projects
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdSettings}
                    color={colorMode !== "light" ? "green.500" : "pink.500"}
                  />
                  See/Clone/Like other users projects
                </ListItem>{" "}
              </List>
              <Flex
                w={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                // ml={[0, 0, 0, 0, 16]}
                // bgColor={"red"}
              >
                <Text
                  color={colorMode !== "light" ? "green.500" : "red.700"}
                  fontSize={[16, 16, 17, 18]}
                  textAlign={["center", "center", "start"]}
                  fontWeight={"medium"}
                  // style={{ marginTop: 40 }}
                  mb={3}
                >
                  for quick access please use <b>email : t@t.com</b> ,and
                  <b> passsword : tttttt</b>{" "}
                </Text>

                <Button
                  bgColor={colorMode !== "light" ? "teal.600" : "pink.500"}
                  _hover={{
                    bg: colorMode !== "light" ? "green.700" : "pink.600",
                  }}
                  size={"lg"}
                  w={["100%", "100%", "100%", "75%"]}
                  py={30}
                  letterSpacing={"wider"}
                  // ml={[0, 0, 0, 0, 28]}
                >
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    Go to app
                  </Link>
                </Button>
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Img
                src={proj2}
                alt="devNight"
                borderRadius={"3xl"}
                ml={[0, 0, 0, 0, 0]}
                // zIndex={55}
                bg={"blackAlpha.100"}
                p={3}
              />
            </Flex>
          </Flex>

          {/* <Flex
            flexDir={["column", "column", "row", "row", "row"]}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            // mt={["-8vh", "-4vh", "-10vh", "0vh", "0vh"]}
            // backgroundColor={"green"}
          >
            <Img
              src={resp}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "47%"]}
              ml={[0, 0, 0, 0, 0]}
              margin={0}
            />
            <Box w={"full"} overflow={"hidden"}>
              <motion.div
                whileInView={{
                  scale: [0.6, 1],
                  opacity: [0, 1],
                }}
                style={{ overflow: "hidden" }}
              >
                <VStack
                  position={"relative"}
                  fontSize={["20", "22", "18", "24", "24"]}
                  mb={2}
                  fontFamily={"Raleway"}
                  fontWeight={900}
                >
                  <Text
                    fontSize={["20", "22", "18", "20", "24"]}
                    color={colorMode === "light" ? "gray.800" : "gray.300"}
                  >
                    Portfolio
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={["18", "22", "18", "20", "24"]}
                    color={colorMode === "light" ? "gray.800" : "gray.300"}
                  >
                    My personal portfolio
                  </Text>
                </VStack>
                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 32]}
                  fontSize={["17", "18", "14", "16", "20"]}
                  lineHeight={"8"}
                  color={colorMode === "light" ? "gray.800" : "gray.300"}
                >
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Responsive portfolio
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Dark / Light mode
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Animations
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Links to deployed Apps and Github
                  </ListItem>{" "}
                </List>
                <Flex
                  position="relative"
                  justifyContent={"center"}
                  alignItems={["center"]}
                  w={"full"}
                  ml={[0, 0, 0, 0, -6]}
                >
                  <Link
                    href="http://tahadev.com/"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["5", "5", "6", "6", "6"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      mx={3}
                      colorScheme={
                        colorMode !== "light" ? "linkedin" : "facebook"
                      }
                      letterSpacing={"wider"}
                    >
                      Go to app
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["5", "5", "6", "6", "6"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[6, 6, 6, 6, 6]}
                      my={10}
                      // mx={[1, 1, 4, 4, 4]}
                      colorScheme={colorMode !== "light" ? "teal" : "pink"}
                      letterSpacing={"wider"}
                      mx={3}
                    >
                      Case study
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Box>
          </Flex> */}

          <VStack
            visibility={["hidden", "hidden", "hidden", "hidden", "hidden"]}
          >
            <Text textAlign={"center"} fontSize={"xl"}>
              Please visit my Github repository for more Projects
            </Text>
            <Button colorScheme="yellow" mx={12}>
              Github Repo
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
