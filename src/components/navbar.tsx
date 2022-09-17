import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  color,
  Flex,
  Img,
  List,
  ListIcon,
  ListItem,
  Tooltip,
  transition,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const colorOn = useColorModeValue("#282c34", "gray.50 ");
  const textColorOn = useColorModeValue("blue.300", "gray.900");
  const navTextColorOn = useColorModeValue("gray.200", "gray.400");
  const { colorMode, toggleColorMode } = useColorMode();
  const [nav, setNav] = useState(false);
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
      <Box
        position={"absolute"}
        left={0}
        right={0}
        m={2}
        visibility={["visible", "hidden"]}
        cursor={"pointer"}
        onClick={() => setNav(!nav)}
        zIndex={99}
        w={"fit-content"}
        bg="red"
      >
        {nav ? <HamburgerIcon boxSize={8} /> : <CloseIcon boxSize={5} mx={1} />}
      </Box>
      {!nav && (
        <Flex
          visibility={["visible", "hidden"]}
          position="absolute"
          top={0}
          left={0}
          w={"full"}
          h={"100vh"}
          bg={textColorOn}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <List fontSize={"3xl"} spacing={3} fontWeight={600}>
            {navi.map((n: any) => (
              <ListItem
                m={5}
                cursor={"pointer"}
                _hover={{ color: navTextColorOn }}
                p={1}
                boxShadow={" -1px 1px 0px 0px gray"}
              >
                {n}
              </ListItem>
            ))}
          </List>
        </Flex>
      )}

      <Box
        alignItems="center"
        letterSpacing={3}
        fontSize={"5xl"}
        m={[12, 6]}
        color={colorOn}
        fontFamily={"tangerine"}
        w={"5xl"}
      >
        {/* <Img src={} /> */}
        Maatof Taha
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
          <List display={"flex"} flexDirection={"row"}>
            {navi.map((n: any) => (
              <motion.div whileHover={{ scale: 1.03 }}>
                <ListItem
                  m={5}
                  cursor={"pointer"}
                  _hover={{ color: navTextColorOn }}
                  fontWeight={600}
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
