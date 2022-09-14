import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  const colorOn = useColorModeValue("#282c34", "gray.50");
  const textColorOn = useColorModeValue("white", "#282c34");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w={"full"}
      h={"16"}
      zIndex={99}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={"row"}
      bg={textColorOn}
      position="fixed"
      shadow={"lg"}
    >
      <Box
        alignItems="center"
        letterSpacing={3}
        fontSize={24}
        m={5}
        color={colorOn}
      >
        Taha
      </Box>
      <Flex w={600} h={"16"} alignItems="center" justifyContent="space-between">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
        <motion.div
          whileHover={{ x: [0, -10], scale: 1.5, transition: { duration: 1 } }}
        >
          <Button
            marginLeft={5}
            bg={colorMode !== "light" ? "teal.800" : "blue.500"}
            _hover={{
              bg: colorMode !== "light" ? "teal.900" : "blue.400",
            }}
            onClick={toggleColorMode}
            borderRadius="0 0 0 100%"
            h={"16"}
            w={"16"}
            p={12}
          >
            {colorMode !== "light" ? (
              <motion.p
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5, 0] }}
                transition={{ duration: 1.5 }}
              >
                <MoonIcon w={7} h={7} ml={"6"} />
              </motion.p>
            ) : (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
                style={{ marginLeft: 20 }}
              >
                <SunIcon color={"gold"} w={7} h={7} />
              </motion.div>
            )}
          </Button>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Navbar;
