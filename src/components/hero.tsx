import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
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
  }, [texts]);

  return (
    <Flex w={["full"]} pos={"relative"} alignItems={"center"} color={"white"}>
      <Text fontSize={"7xl"}>I'm a</Text>
      {texts.map((word, index) => (
        <Box
          key={index}
          transition={"all"}
          ml={"40"}
          transitionDuration={"1s"}
          pos={"absolute"}
          fontWeight={"bold"}
          fontFamily={"body"}
          letterSpacing={2}
          opacity={index === currentIndex ? 1 : 0}
          // mt={index === currentIndex - 1 ? 4 : 0}
          // bg={"red.500"}
          fontSize={"6xl"}
          mt={
            index === (currentIndex === 0 ? texts.length - 1 : currentIndex - 1)
              ? 5
              : 0
          }
        >
          {/* &nbsp; */}
          {word}
        </Box>
      ))}
    </Flex>
  );
};

export default Hero;
