import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Projects = () => {
  const bglOnLight = useColorModeValue("rgba(111,134,198,255)", "gray.900");

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
    >
      <Flex position={"relative"} top={"40"}>
        Projects
      </Flex>
    </Box>
  );
};

export default Projects;
