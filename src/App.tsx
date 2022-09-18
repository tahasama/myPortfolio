import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Home from "./components/home";

function App() {
  const bglOnLight = useColorModeValue("gray.100", "#282c34");
  const colorOnLight = useColorModeValue("#282c34", "gray.100");
  const bglOnLights = useColorModeValue("blue.300", "gray.900");

  return (
    <Box h="full">
      <Navbar />
      {/* <Hero /> */}
      <Home />
    </Box>
  );
}

export default App;
