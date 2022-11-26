import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
// import Social from "./components/social";

function App() {
  const colorOnLight = useColorModeValue("gray.800", "gray.200");
  // const bglOnLight = useColorModeValue("blue.300", "gray.900");

  return (
    <Box color={colorOnLight}>
      <Navbar />
      {/* <Box
        position={"relative"}
        // zIndex={99}
        h="100vh"
      >
        <Text
          top={80}
          position={"relative"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"14vw"}
          // bgColor={colorOnLight}
          bg={bglOnLight}
          h="100vh"
          fontFamily={"Raleway"}
        >
          {" "}
          maatof taha
        </Text>
      </Box> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
