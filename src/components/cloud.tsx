import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Cloud = ({ delay }: any) => {
  const colorOn = useColorModeValue("gray.50 ", "gray.500");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <motion.div
      className="box"
      initial={{ x: 0 }}
      animate={{ x: [4, -4, 4] }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
      }}
    >
      <Box
        bg={colorOn}
        w={"150px"}
        h={"50px"}
        borderRadius={150}
        boxShadow={
          colorMode === "light"
            ? "-2px 2px 1px 0.5px #CBD5E0"
            : "-2px 2px 1px 0.5px #4A5568"
        }
        _before={{
          content: "''",
          position: "absolute",
          bg: colorOn,
          w: "85px",
          h: "75px",
          top: "-50px",
          borderRadius: "50%",
          right: "25px",
        }}
        _after={{
          content: "''",
          position: "absolute",
          bg: colorOn,
          w: "50px",
          h: "50px",
          top: "-30px",
          borderRadius: "50%",
          left: "25px",
        }}
      ></Box>{" "}
    </motion.div>
  );
};

export default Cloud;
