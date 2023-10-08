import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import { useState } from "react";
import Loading from "./components/loading";
import { AnimatePresence, motion } from "framer-motion";
// import Social from "./components/social";

function App() {
  const colorOnLight = useColorModeValue("gray.800", "gray.200");
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Box color={colorOnLight} bg={bglOnLight}>
      {loading ? (
        <Loading />
      ) : (
        <AnimatePresence>
          {/* Content for the active tab */}
          <motion.div
          // initial={{ opacity: 0.3 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 1 }}
          >
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      )}
    </Box>
  );
}

export default App;
