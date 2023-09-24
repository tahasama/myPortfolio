import {
  Box,
  Button,
  Flex,
  Text,
  Img,
  Spinner,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import homeGif from "../images/homeGIf.gif";
import homeGifN from "../images/homeGIfN.gif";

const Loading = () => {
  const { colorMode } = useColorMode();
  const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const textColor = useColorModeValue("white", "");

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate loading data
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 9); // Adjust the interval speed as needed

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Flex
      //   pos={"relative"}
      //   inset={0}
      bgColor={bglOnLight}
      color={textColor}
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
        {loading ? (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
          >
            {/* Increase the size of the Spinner using 'boxSize' */}
            <Spinner pos={"absolute"} boxSize={"32"} thickness="4px" />

            {/* Increase the font size of the Text using 'fontSize' */}
            <Text pos={"absolute"} fontSize="4xl">
              {progress}%
            </Text>
          </Flex>
        ) : (
          <Img src={colorMode === "light" ? homeGif : homeGifN} w={"97vh"} />
        )}
      </Flex>
    </Flex>
  );
};

export default Loading;
