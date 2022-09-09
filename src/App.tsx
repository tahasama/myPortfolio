import {
  Box,
  Button,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import madara from "./images/madara.jpg";

function App() {
  const bglOnLight = useColorModeValue(
    "linear(to-t, green.200, pink.500)",
    "linear(to-t, blue.800, yellow.700)"
  );
  const colorOnLight = useColorModeValue("teal.700", "red.800");
  return (
    <div className="App">
      <header className="">
        <Navbar />
        <Hero />
        <Box fontSize="40px">This is a text</Box>
        <Box fontSize={["12px", "24px", "40px", "56px"]}>
          <Link> This is another text</Link>
        </Box>
        <Box bg="red.200" m={5} w="400px">
          This is a box
        </Box>{" "}
        <Box bg="red.200" m={5} w={[300, 400, 500, 600]}>
          This is another box
        </Box>
        <Box
          m={2}
          fontSize="6xl"
          textAlign={"left"}
          color={colorOnLight}
          w="50%"
          h="200px"
          bgGradient={bglOnLight}
        >
          Tomato
        </Box>
        <Flex align="center" justify="center">
          Flex Container
        </Flex>
        <Box
          border="1px"
          borderRadius={"3xl"}
          w="75%"
          h="500px"
          bgImage={`url(${madara})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          m={5}
          // sx={{ filter: "blur(8px)" }}
          filter="grayscale(80%)"
        />
      </header>
    </div>
  );
}

export default App;
