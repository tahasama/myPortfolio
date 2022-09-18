import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Slide,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const colorOn = useColorModeValue("#282c34", "gray.50 ");
  const textColorOn = useColorModeValue("blue.300", "gray.900");
  const navTextColorOn = useColorModeValue("gray.200", "gray.400");
  const navNav = useColorModeValue(
    "linear(to-b, blue.300,blue.400, blue.500)",
    "linear(to-b, gray.900, gray.800, teal.500)"
  );

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const navi = ["Home", "About", "Projects", "Contact"];

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
      <Button
        onClick={onToggle}
        ml={3}
        visibility={["visible", "visible", "hidden"]}
      >
        {!isOpen ? (
          <HamburgerIcon boxSize={8} />
        ) : (
          <CloseIcon boxSize={5} mx={1} />
        )}
      </Button>
      <Slide direction="left" in={isOpen} style={{ top: "10%" }}>
        <Box
          position={"absolute"}
          // p="40px"
          w={"full"}
          h={"full"}
          color={colorOn}
          bgGradient={navNav}
          // roundedRight="md"
          // shadow="md"
          visibility={["visible", "visible", "hidden"]}
        >
          <List
            fontSize={"xl"}
            spacing={"8"}
            mt={10}
            fontWeight={600}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"90%"}
          >
            {navi.map((n: any) => (
              <motion.div whileHover={{ scale: 1.03, y: [-1, 1, -1] }}>
                <ListItem
                  m={3}
                  cursor={"pointer"}
                  p={1}
                  fontFamily="ubuntu"
                  boxShadow={" 0px 2px 0px 0px white"}
                  rounded={5}
                  w={"70vw"}
                >
                  {n}
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
      </Slide>

      <Box
        position={"relative"}
        left={[2, 2, 0]}
        alignItems="center"
        letterSpacing={3}
        fontSize="5xl"
        color={colorOn}
        fontFamily={"tangerine"}
        w={["8xl", "8xl", "full"]}
      >
        Maatof Taha
      </Box>
      <Flex w={600} h={"16"} alignItems="center" justifyContent="space-between">
        <Flex
          w={["0", "0", "full"]}
          visibility={["hidden", "hidden", "visible"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <List display={"flex"} flexDirection={"row"}>
            {navi.map((n: any) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 0.9,
                  x: 2,
                }}
              >
                <ListItem
                  m={5}
                  p={1}
                  cursor={"pointer"}
                  fontWeight={600}
                  borderBottom={"4px"}
                  borderRightRadius={5}
                  borderColor={"transparent"}
                  transitionDuration="800ms"
                  sx={{ translateX: 0 }}
                  _hover={{
                    borderBottom: "4px",
                    borderColor: navTextColorOn,
                    sx: { translateX: 0 },
                  }}

                  // boxShadow={" 0px 3px 0px white"}
                >
                  {n}
                </ListItem>
              </motion.div>
            ))}
          </List>
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
