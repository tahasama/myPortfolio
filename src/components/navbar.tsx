import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const colorOn = useColorModeValue("#282c34", "gray.50 ");
  const textColorOn = useColorModeValue("blue.300", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w={"100vw"}
      h={"16"}
      zIndex={99}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={"row"}
      bg={textColorOn}
      position="fixed"
    >
      <Box
        alignItems="center"
        letterSpacing={3}
        fontSize={24}
        m={6}
        color={colorOn}
      >
        Taha
      </Box>
      <Flex w={600} h={"16"} alignItems="center" justifyContent="space-between">
        <Flex
          w={["0.5", "full"]}
          // mx={5}
          visibility={["hidden", "visible"]}
          alignItems="center"
          justifyContent="space-between"
          // opacity={[0, 1]}
        >
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Projects</Box>
          <Box>Contact</Box>
        </Flex>
        <motion.div
          whileHover={{ x: [0, -10], scale: 1.6, transition: { duration: 1 } }}
        >
          <Button
            marginLeft={5}
            bg={colorMode !== "light" ? "teal.900" : "blue.400"}
            _hover={{
              bg: colorMode !== "light" ? "gray.900" : "blue.300",
            }}
            onClick={toggleColorMode}
            borderRadius="0 0 0 100%"
            h={"16"}
            w={"16"}
            p={12}
          >
            {colorMode !== "light" ? (
              <motion.p
                initial={{ y: 0, x: -5 }}
                animate={{ y: [-5, 5, -5, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Tooltip
                  label="Dark Mode"
                  aria-label="A tooltip"
                  bgColor={textColorOn}
                  color={colorOn}
                  mt={4}
                  boxShadow={" 0px 2px 12px white"}
                  borderRadius={5}
                >
                  <MoonIcon w={7} h={7} ml={"6"} />
                </Tooltip>
              </motion.p>
            ) : (
              <motion.div
                initial={{ y: 0, x: -5 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
                style={{ marginLeft: 20 }}
              >
                <Tooltip
                  label="Light Mode"
                  aria-label="A tooltip"
                  bgColor={textColorOn}
                  color={colorOn}
                  mt={2}
                  boxShadow={" 0px 2px 12px gray"}
                  borderRadius={5}
                >
                  <SunIcon color={"gold"} w={7} h={7} />
                </Tooltip>
              </motion.div>
            )}
          </Button>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default Navbar;
