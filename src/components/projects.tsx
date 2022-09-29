import { Box, Flex } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box
      h="120vh"
      bg={"rgba(111,134,198,255)"}
      clipPath={"polygon(26% 17%, 100% 0, 100% 100%, 0 100%, 0 0)"}
      mt={"-80vh"}
    >
      <Flex position={"relative"} top={"40"}>
        Projects
      </Flex>
    </Box>
  );
};

export default Projects;
