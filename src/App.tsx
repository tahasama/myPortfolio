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
  }, 2800);

  return (
    <Box color={colorOnLight} bg={bglOnLight}>
      {loading ? (
        <Loading />
      ) : (
        <AnimatePresence>
          {/* Content for the active tab */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
