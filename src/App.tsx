import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  const colorOnLight = useColorModeValue("gray.800", "gray.200");

  return (
    <Box color={colorOnLight}>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
    </Box>
  );
}

export default App;
