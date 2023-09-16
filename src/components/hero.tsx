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
    <Flex
      w={["full", "full", "full", "full", "full"]}
      pos={"relative"}
      alignItems={"center"}
      justifyContent={"start"}
      color={"white"}
      flexDir={["column", "column", "column", "row"]}
      ml={[-5, -3, 0]}
    >
      <Text
        fontSize={["2xl", "4xl", "4xl", "6xl", "7xl"]}
        p={0}
        mt={[0, 0, 2, -2]}
        // textAlign={"center"}
      >
        I'm a
      </Text>
      {texts.map((word, index) => (
        <Box
          key={index}
          // textAlign={"center"}
          transition={"all"}
          ml={[0, 0, 0, 40]}
          transitionDuration={"1s"}
          pos={"absolute"}
          fontWeight={"bold"}
          fontFamily={"body"}
          letterSpacing={2}
          opacity={index === currentIndex ? 1 : 0}
          // mt={index === currentIndex - 1 ? 4 : 0}
          // bg={"red.500"}
          fontSize={["2xl", "4xl", "4xl", "5xl", "6xl"]}
          mt={
            index === (currentIndex === 0 ? texts.length - 1 : currentIndex - 1)
              ? 12
              : [10, 12, 16, 0]
          }
        >
          &nbsp;
          {word}
        </Box>
      ))}
    </Flex>
  );
};

export default Hero;
