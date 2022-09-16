import {
  Box,
  Divider,
  Flex,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import Hero from "./hero";
import devNight from "../images/devNight2.png";
import devDay from "../images/devDay.jpg";
import CloudNstars from "./cloudNstars";

const Home = () => {
  const colorOnLight = useColorModeValue("blue.100", "purple.900");
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const { colorMode } = useColorMode();

  return (
    <Flex
      alignItems={"center"}
      //   justifyContent={"center"}
      h={"100vh"}
      bg={bglOnLight}
      _before={{
        content: "''",
        position: "absolute",
        display: "block",
        top: 0,
        left: 0,
        h: [0, "100vh"],
        w: "full",
        bg: colorOnLight,
        borderRadius: "0% 0% 0% 100%",
        mt: "65px",
        transform: " rotate(180deg)",
        zIndex: 1,
        // shadow: "2xl",
      }}
    >
      {/* {s.map((v: any) => ( */}
      {/* <Box position={"absolute"} top={`${v}px`} left={`${v * 30}px`}> */}
      <CloudNstars />

      {/* ))} */}
      {colorMode !== "light" ? (
        <Img
          // position={"absolute"}
          mx={5}
          mt={50}
          zIndex={99}
          src={devNight}
          alt="devNight"
          h={["0%", "38%", "40%", "55%", "50%"]}
          borderRadius={"5%"}
        ></Img>
      ) : (
        <Img
          // position={"absolute"}
          mx={[3, 5]}
          mt={50}
          zIndex={99}
          src={devDay}
          alt="devDay"
          h={["0%", "40%", "50%", "55%", "50%"]}
          borderRadius={"5%"}
        ></Img>
      )}
      <Flex
        // bg={"white"}
        zIndex={2}
        flexDirection="column"
        // float={"right"}
        // position="absolute"
        left={[2, 3, 12, 24]}
        mx={[-3, 0, -2, 5]}
        lineHeight={"taller"}
      >
        {/* {cloud} */}
        {/* <Cloud /> */}
        {/* <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          //   w={["100vw", "auto"]}
          bg={"red"}
        > */}
        <Box
          fontSize={["lg", "xl", "2xl", "3xl", "4xl", "5xl"]}
          letterSpacing={3}
          fontWeight={[500, 400]}
          // mt={[-20, 0, 0, 0]}
          flexWrap="wrap"
        >
          Hey! My name is Taha
        </Box>
        <Box>
          <Divider />
        </Box>
        {/* <Box fontSize="4xl"> My name is Taha</Box> */}
        <Flex
          fontSize={["md", "lg", "xl", "2xl", "3xl"]}
          fontWeight={[600, 500]}
          // flexWrap="wrap"
        >
          I'm a &nbsp;
          <Hero />
          developper
        </Flex>
        {/* </Flex> */}
      </Flex>
    </Flex>
  );
};

export default Home;
