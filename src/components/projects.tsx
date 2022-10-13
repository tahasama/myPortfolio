import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  ListItem,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import proj1 from "../images/proj/proj1/proj1.jpeg";
import proj1n from "../images/proj/proj1/proj1n1.png";

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      h="120vh"
      bg={bglOnLight}
      clipPath={[
        "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 12%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 17%, 100% 0, 100% 100%, 0 100%, 0 0)",
      ]}
      mt={["-70vh", "-40vh", "-45vh", "-45vh"]}
      zIndex={2}
    >
      <Flex flexDir={"column"} top={40} position={"relative"} m={5}>
        <Flex
          flexDir={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          w={"100%"}
        >
          <Img
            src={colorMode !== "light" ? proj1n : proj1}
            alt="devNight"
            borderRadius={"3xl"}
            w={"40%"}
          />
          <Box mx={10}>
            <Text fontSize="2xl">
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
        </Flex>{" "}
        <Flex flexDir={"row"}>
          {" "}
          <Box>rrrrrrrrrr</Box>
          <Box>cccccccc</Box>
        </Flex>{" "}
        <Flex flexDir={"row"}>
          {" "}
          <Box>rrrrrrrrrr</Box>
          <Box>cccccccc</Box>
        </Flex>{" "}
        <Flex flexDir={"row"}>
          {" "}
          <Box>rrrrrrrrrr</Box>
          <Box>cccccccc</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Projects;
