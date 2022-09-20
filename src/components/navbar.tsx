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
      w={"full"}
      h={"20"}
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
          w={"full"}
          h={"full"}
          color={colorOn}
          bgGradient={navNav}
          visibility={["visible", "visible", "hidden"]}
        >
          <List
            fontSize={"2xl"}
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
        display={"block"}
        left={[4, 4, 0]}
        alignItems="center"
        letterSpacing={3}
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        color={colorOn}
        fontFamily={colorMode === "light" ? "alex brush" : "tangerine"}
        fontWeight={"200"}
        w={["full"]}
        my={"5"}
      >
        Maatof Taha
      </Box>
      <Flex
        w={"auto"}
        h={"16"}
        alignItems="center"
        justifyContent="space-between"
      >
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
                  mx={[2, 2, 2, 4]}
                  p={1}
                  fontSize={["sm", "sm", "md", "20px"]}
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
                >
                  {n}
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Flex>
        <motion.div
          whileHover={{ x: [0, -10], scale: 1.7, transition: { duration: 1 } }}
        >
          <Button
            ml={4}
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
                  boxShadow={"0px 2px 12px white"}
                  borderRadius={5}
                >
                  <MoonIcon w={8} h={8} ml={["8"]} />
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
                  <SunIcon color={"gold"} w={8} h={8} />
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
