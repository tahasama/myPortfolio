import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  const bglOnLight = useColorModeValue("gray.100", "#282c34");
  const colorOnLight = useColorModeValue("#282c34", "gray.100");

  return (
    <Box h="container.xl" bg={bglOnLight} color={colorOnLight}>
      <Navbar />
      <Hero />
    </Box>
  );
}

export default App;
