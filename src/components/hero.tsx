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
  "Frontend-Focused",
  "Mobile Apps",
  "Self-thaught",
  "MERN-Stack",
  "Problem-solving",
  // "Curious & Creative",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      w={"auto"}
      // overflow={"hidden"}
      // whiteSpace={"nowrap"}
      letterSpacing={1}
      // animation={`${typing} 1.5s steps(10) infinite, ${blink} 1.5s steps(10) infinite, ${slide} 3s steps(4) infinite `}
    >
      <motion.div
        key={texts[currentIndex]}
        initial={{ opacity: 1, y: 0 }} // Initial state of the animation
        animate={{ opacity: 0, y: 20 }} // Animation target
        // exit={{ opacity: 0, y: 20 }} // Exit animation
        transition={{ duration: 0.5, delay: 1 }} // Duration of the fade animation in seconds
      >
        <Text
          w={"56"}
          letterSpacing={currentIndex !== 0 && currentIndex !== 4 ? 5 : 0}
        >
          {texts[currentIndex]}
        </Text>
      </motion.div>
    </Box>
  );
};

export default Hero;
