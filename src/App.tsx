import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";

function App() {
  const colorOnLight = useColorModeValue("gray.800", "gray.200");

  return (
    <Box color={colorOnLight}>
      <Navbar />
      <Home />
      <About />
    </Box>
  );
}

export default App;
