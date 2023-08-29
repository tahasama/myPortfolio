import { Box, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

// const typing = keyframes`
// from {
//   max-width: 0;
// }
// to {
//   max-width: 150px;
// }
// `;

// const blink = keyframes`
// from {
//   border-right: 2px solid rgba(255, 255, 255, 0.75);
// }
// to {
//   border-right: 2px solid rgba(255, 255, 255, 0);
// }
// `;

// const slide = keyframes`
// from {
//   top: -100px;
// }
// to {
//   top: 0;
// }
// `;

const texts = [
  "Web & Mobile Dev",
  "UX/UI Design Coder ",
  "Self-Taught Learner",
  "MERN Stack Developer",
  "React Native Enthusiast",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box w={["auto"]} letterSpacing={1}>
      <motion.div
        key={texts[currentIndex]}
        initial={{ opacity: 1, y: 0 }} // Initial state of the animation
        animate={{ opacity: 0, y: 20 }} // Animation target
        transition={{ duration: 0.5, delay: 0.5 }} // Duration of the fade animation in seconds
      >
        <Text
        // w={["36", "36", "56"]}
        // letterSpacing={[currentIndex !== 0 && currentIndex !== 4 ? 3 : 0]}
        >
          {texts[currentIndex]}
        </Text>
      </motion.div>
    </Box>
  );
};

export default Hero;
