import { Box, Flex, Text, Image, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export const Carousel = ({ slides }: any) => {
  const { colorMode } = useColorMode();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="fit-content"
      overflow="hidden"
      pos="relative"
      rounded={"2xl"}
      bgColor={colorMode !== "light" ? "gray.700" : "blue.300"}
    >
      <Flex h="440px" maxWidth={"full"} {...carouselStyle}>
        {slides.map((slide: any, sid: any) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
            <Text
              color="white"
              fontSize="xs"
              p="8px 12px"
              pos="absolute"
              top="0"
            >
              {sid + 1} / {slidesCount}
            </Text>
            <Image
              src={slide.img}
              alt="carousel image"
              boxSize="full"
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>
      <Text
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          width: "auto",
          marginTop: "-22px",
          padding: "16px",
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          transition: "0.6s ease",
          borderRadius: "0 3px 3px 0",
          userSelect: "none",
        }}
        _hover={{
          opacity: 0.8,
          bg: "black",
        }}
        left="0"
        onClick={prevSlide}
      >
        &#10094;
      </Text>
      <Text
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          width: "auto",
          marginTop: "-22px",
          padding: "16px",
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          transition: "0.6s ease",
          borderRadius: "0 3px 3px 0",
          userSelect: "none",
        }}
        _hover={{
          opacity: 0.8,
          bg: "black",
        }}
        right="0"
        onClick={nextSlide}
      >
        &#10095;
      </Text>
    </Flex>
  );
};
