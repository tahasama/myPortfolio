// import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Img,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { MdSettings } from "react-icons/md";

// import proj1 from "../images/proj/proj1/proj1.jpeg";
// import proj1n from "../images/proj/proj1/proj1n1.png";
import proj1 from "../images/proj/proj1/QualityApp.png";
import proj2 from "../images/proj/proj2/EditorApp.png";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  function reportWindowSize() {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = reportWindowSize;
  console.log(window.onresize);

  return (
    <>
      <Box
        h={["270vh", "250vh", "185vh", "220vh", "200vh"]}
        bg={bglOnLight}
        clipPath={[
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 8%, 100% 0, 100% 100%, 0 100%, 0 0)",
        ]}
        mt={["-202vh", "-160vh", "-50vh", "-80vh", "-60vh"]}
        zIndex={2}
        // mb={40}
      >
        <Element name="Projects"></Element>

        <Flex flexDir={"column"} top={80} position={"relative"} gap={20}>
          <Flex
            flexDir={["column", "column", "row", "row", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            w={"96%"}
            mx={[2, 2, 2, 5, 10]}
            mt={["-28vh", "-25vh", "-20vh", "-20vh", "-20vh"]}
          >
            <Img
              src={proj1}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "45%"]}
              ml={[0, 0, 12, 0, 0]}
              zIndex={55}
            />

            <Box mx={10} w={"full"}>
              <motion.div
                whileInView={{
                  x: isMobile ? ["0px", "0px"] : ["-600px", "0px"],
                  scale: [0.6, 1],
                  opacity: [0, 1],
                }}
                transition={{ ease: "linear" }}
                style={{ overflow: "hidden" }}
              >
                <Text
                  fontSize={["22", "22", "18", "24", "24"]}
                  textAlign={"center"}
                  mb={2}
                  fontFamily={"Raleway"}
                  fontWeight={900}
                >
                  Quality Control App : An app for construction projects
                </Text>
                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 32]}
                  fontSize={["18", "18", "14", "16", "20"]}
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
                    />{" "}
                    tracking of quantities of the used materiel,
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    the advancement of the projects and its pace
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    every Quality inspection With necessary Laboratory and
                    Topography assistance
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Procedures, plans, and Updates
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    detailed works
                  </ListItem>{" "}
                </List>
                <Flex
                  position="relative"
                  justifyContent={"center"}
                  alignItems={["center"]}
                  w={"full"}
                  // bgColor="red.200"
                  // style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, -6]}
                >
                  <Link
                    href="https://thacoder.netlify.app/"
                    isExternal
                    colorScheme="pink"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "16", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[7, 8, 6, 6, 6]}
                      my={10}
                      mx={2}
                      colorScheme={
                        colorMode !== "light" ? "linkedin" : "facebook"
                      }
                      letterSpacing={"wider"}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "16", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[7, 8, 6, 6, 6]}
                      my={10}
                      mx={[1, 1, 4, 4, 4]}
                      colorScheme={colorMode !== "light" ? "teal" : "pink"}
                      letterSpacing={"wider"}
                    >
                      Code
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Box>
          </Flex>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            w={"96%"}
            // mx={[2, 2, 5, 0, 0]}
            mx={[2, 2, 4, 5, -20]}
          >
            <Box w={"100%"} overflow={"inherit"}>
              <motion.div
                whileInView={{
                  x: [isMobile ? "0px" : "400px", "0px"],
                  scale: [0.6, 1],
                  opacity: [0, 1],
                }}
                transition={{ ease: "linear" }}
                style={{ overflow: "hidden" }}
              >
                <Text
                  fontSize={["22", "22", "18", "20", "24"]}
                  textAlign={"center"}
                  my={[4, 4, 2, 2, 2]}
                  fontFamily={"Raleway"}
                  fontWeight={900}
                >
                  Online Editor : An app for creating simple Projects
                </Text>
                <List
                  style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 48]}
                  fontSize={["18", "18", "14", "16", "20"]}
                >
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    Create project with Vanilla Html/Css/Jacasript
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
                    import any package
                  </ListItem>{" "}
                  <ListItem>
                    <ListIcon
                      as={MdSettings}
                      color={colorMode !== "light" ? "green.500" : "pink.500"}
                    />
                    see immediate result
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
                  position="relative"
                  justifyContent={"center"}
                  alignItems={["center"]}
                  // bgColor="red.200"
                  // style={{ textIndent: 10 }}
                  ml={[0, 0, 0, 0, 0]}
                >
                  <Link
                    href="https://thacoder.netlify.app/"
                    isExternal
                    colorScheme="pink"
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "16", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[7, 8, 6, 6, 6]}
                      my={10}
                      mx={2}
                      colorScheme={
                        colorMode !== "light" ? "linkedin" : "facebook"
                      }
                      letterSpacing={"wider"}
                    >
                      Demo
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/tahasama/react-editor"
                    isExternal
                    fontSize={"xl"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      px={["8", "16", "12", "16", "16"]}
                      fontSize={["lg", "lg", "lg", "xl", "xl"]}
                      py={[7, 8, 6, 6, 6]}
                      my={10}
                      mx={[1, 1, 4, 4, 4]}
                      colorScheme={colorMode !== "light" ? "teal" : "pink"}
                      letterSpacing={"wider"}
                    >
                      Code
                    </Button>
                  </Link>
                </Flex>
              </motion.div>
            </Box>
            <Img
              src={proj2}
              alt="devNight"
              borderRadius={"3xl"}
              w={["100%", "100%", "53%", "55%", "45%"]}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Projects;
