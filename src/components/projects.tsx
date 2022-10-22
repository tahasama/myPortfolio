import { ExternalLinkIcon } from "@chakra-ui/icons";
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

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");
  const { colorMode } = useColorMode();

  return (
    <Box
      h={["220vh", "220vh", "160vh", "140vh", "140vh"]}
      bg={bglOnLight}
      clipPath={[
        "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 8%, 100% 0, 100% 100%, 0 100%, 0 0)",
      ]}
      mt={["-152vh", "-150vh", "-40vh", "-70vh", "-50vh"]}
      zIndex={2}
    >
      <Flex flexDir={"column"} top={80} position={"relative"} gap={20}>
        <Flex
          flexDir={["column", "column", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          w={"97%"}
          mx={[2, 2, 2, 2, 10]}
          mt={["-28vh", "-25vh", "-20vh", "-20vh", "-5vh"]}
        >
          <Img
            src={proj1}
            alt="devNight"
            borderRadius={"3xl"}
            w={["100%", "100%", "45%", "55%", "40%"]}
          />
          <Box mx={10} w={"full"}>
            <Text
              fontSize="28"
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
              fontSize="lg"
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
              alignItems="center"
              w={"full"}
              // bgColor="red.200"
              // style={{ textIndent: 10 }}
              ml={[0, 0, 0, 0, -16]}
            >
              <Link
                href="https://thacoder.netlify.app/"
                isExternal
                colorScheme="pink"
                fontSize={"xl"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  px={"16"}
                  py={6}
                  my={10}
                  mx={4}
                  colorScheme={colorMode !== "light" ? "linkedin" : "facebook"}
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
                  px={"16"}
                  py={6}
                  my={10}
                  mx={4}
                  colorScheme={colorMode !== "light" ? "teal" : "pink"}
                >
                  Code
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>{" "}
        <Flex
          flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          w={"97%"}
          mx={[2, 2, 5, 0, 0]}
        >
          <Box w={"100%"}>
            <Text
              fontSize="28"
              textAlign={"center"}
              mb={2}
              fontFamily={"Raleway"}
              fontWeight={900}
            >
              Online Editor : An app for creating simple Projects
            </Text>
            <List
              style={{ textIndent: 10 }}
              ml={[0, 0, 0, 0, 48]}
              fontSize="lg"
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
              position="relative"
              // justifyContent={"center"}
              alignItems="center"
              w={"full"}
              // bgColor="red.200"
              // style={{ textIndent: 10 }}
              ml={[0, 0, 0, 0, 48]}
            >
              <Link
                href="https://thacoder.netlify.app/"
                isExternal
                colorScheme="pink"
                fontSize={"xl"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  px={"16"}
                  py={6}
                  my={10}
                  mx={4}
                  colorScheme={colorMode !== "light" ? "linkedin" : "facebook"}
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
                  px={"16"}
                  py={6}
                  my={10}
                  mx={4}
                  colorScheme={colorMode !== "light" ? "teal" : "pink"}
                >
                  Code
                </Button>
              </Link>
            </Flex>
          </Box>
          <Img
            src={proj2}
            alt="devNight"
            borderRadius={"3xl"}
            w={["100%", "100%", "45%", "55%", "40%"]}
          />
        </Flex>{" "}
        {/* <Flex
          flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          w={"100%"}
        >
          <Box mx={10} w={"full"}>
            <Text fontSize="2xl" textAlign={"center"}>
              Quality Control App : An app for construction projects
            </Text>
            <UnorderedList style={{ textIndent: 10 }}>
              <ListItem>
                {" "}
                Full Storage and arrangement of the documentation{" "}
              </ListItem>
              <ListItem> tracking of quantities of the used materiel,</ListItem>
              <ListItem>
                the advancement of the projects and its pace
              </ListItem>{" "}
              <ListItem>
                {" "}
                every Quality inspection With necessary Laboratory and
                Topography assistance
              </ListItem>{" "}
              <ListItem>Procedures, plans, and Updates</ListItem>
              <ListItem>detailed works</ListItem>{" "}
            </UnorderedList>
          </Box>
          <Img
            src={proj1}
            alt="devNight"
            borderRadius={"3xl"}
            w={["100%", "100%", "40%", "40%", "40%"]}
          />
        </Flex> */}
      </Flex>
    </Box>
  );
};

export default Projects;
