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

// import proj1 from "../images/proj/proj1/proj1.jpeg";
// import proj1n from "../images/proj/proj1/proj1n1.png";
import proj1 from "../images/proj/proj1/QualityApp.png";
import proj2 from "../images/proj/proj2/EditorApp.png";

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      h={["380vh", "220vh"]}
      bg={bglOnLight}
      clipPath={[
        "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 10%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 12%, 100% 0, 100% 100%, 0 100%, 0 0)",
        "polygon(26% 12%, 100% 0, 100% 100%, 0 100%, 0 0)",
      ]}
      mt={["-140vh", "-40vh", "-45vh", "-50vh", "-55vh"]}
      zIndex={2}
    >
      <Flex flexDir={"column"} top={80} position={"relative"} mx={5} gap={20}>
        <Flex
          flexDir={["column", "column", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          w={"100%"}
          mx={2}
        >
          <Img
            src={proj1}
            alt="devNight"
            borderRadius={"3xl"}
            w={["100%", "100%", "45%", "55%", "40%"]}
          />
          <Box mx={10} w={"full"}>
            <Text fontSize="2xl" textAlign={"center"} mb={2}>
              Quality Control App : An app for construction projects
            </Text>
            <UnorderedList style={{ textIndent: 10 }} ml={[0, 0, 0, 0, 32]}>
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
        <Flex
          flexDir={["column-reverse", "column-reverse", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          w={"100%"}
          mx={2}
        >
          <Box w={"full"}>
            <Text fontSize="2xl" textAlign={"center"} mb={2}>
              Online Editor : An app for creating simple Projects
            </Text>
            <UnorderedList style={{ textIndent: 10 }} ml={[0, 0, 0, 0, 36]}>
              <ListItem>
                {" "}
                Create project with Vanilla Html/Css/Jacasript
              </ListItem>
              <ListItem> Create project with React</ListItem>
              <ListItem>import any package</ListItem>{" "}
              <ListItem>see immediate result</ListItem>{" "}
              <ListItem>Create/Read/Update/Delete own projects</ListItem>
              <ListItem>See/Clone/Like other users projects</ListItem>{" "}
            </UnorderedList>
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
