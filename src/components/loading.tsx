import { Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Loading = () => {
  const { colorMode } = useColorMode();
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const textColor = useColorModeValue("white", "teal.500");

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 9);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Flex
      bgColor={bglOnLight}
      w={"auto"}
      height={"full"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          {colorMode !== "light" ? (
            window.innerWidth > 786 ? (
              <motion.p
                initial={{ y: -36, x: 0, opacity: 1, color: "#CBD5E0" }}
                animate={{
                  y: 40 - window.innerHeight / 2,
                  x: -57 + window.innerWidth / 2,
                  scale: 0.09,
                }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <MoonIcon w={350} h={350} ml={["20"]} />
              </motion.p>
            ) : (
              <motion.p
                initial={{ y: 0, x: -5 }}
                animate={{ y: [-5, 5, -5, 0] }}
                transition={{ duration: 1.5 }}
              >
                <MoonIcon w={320} h={320} ml={["20"]} mt={"-50px"} />
              </motion.p>
            )
          ) : window.innerWidth > 786 ? (
            <motion.div
              initial={{
                y: 0,
                x: -10,
                opacity: 1,
                color: "white",
              }}
              animate={{
                y: 40 - window.innerHeight / 2,
                x: -70 + window.innerWidth / 2,
                scale: 0.1,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                easings: ["easeIn", "easeOut"],
              }}
              style={{ marginLeft: 20 }}
            >
              <SunIcon w={350} h={350} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 0, x: -5 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5 }}
              style={{ marginLeft: 20 }}
            >
              {" "}
              <SunIcon w={320} h={320} color={"white"} />
            </motion.div>
          )}
          <Text pos={"absolute"} fontSize="4xl" color={textColor}>
            {progress}%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Loading;
