import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import Home2 from "./components/home2";

function App() {
  const colorOnLight = useColorModeValue("gray.800", "gray.200");
  const bglOnLights = useColorModeValue("blue.300", "gray.900");

  return (
    <Box bg={bglOnLights} h="140vh" color={colorOnLight}>
      <Navbar />
      <Home />
      {/* <Home2 /> */}
    </Box>
  );
}

export default App;
