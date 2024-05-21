import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Img,
  keyframes,
  List,
  ListItem,
  Slide,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import logoNight from "../images/logoN1.png";
import logoDay from "../images/logoD.png";
import logo from "../images/logo.png";
import logon from "../images/logon.png";
import logo1 from "../images/logos/wwj3.png";
import { Link } from "react-scroll";
import { useState } from "react";

const anime = keyframes`
from,to
0% {transform:rotate(-360deg); }
40% {color: red;transform:scale(.7) rotate(360deg); }
 
100%{transform:rotate(-360deg);}
`;

const Navbar = () => {
  const colorOn = useColorModeValue("#282c34", "gray.50 ");
  const textColorOn = useColorModeValue("blue.300", "gray.900");
  const navTextColorOn = useColorModeValue("gray.200", "gray.400");
  const navNav = useColorModeValue(
    "linear(to-b, blue.300,blue.400, blue.500)",
    "linear(to-b, gray.900, gray.800, teal.900)"
  );

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const navi = ["Home", "About", "Skills", "Projects", "Contact"];
  const [change, setChange] = useState(false);

  const changeIcon = () => {
    onToggle();
    setTimeout(() => {
      setChange(!change);
    }, 10);
  };

  return (
    <Flex
      w={"full"}
      h={["16", "20"]}
      zIndex={98}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={"row"}
      bg={textColorOn}
      position="fixed"
      filter="auto"
      brightness={colorMode === "light" ? "" : "80%"}
    >
      <Button
        onClick={() => {
          changeIcon();
        }}
        mt={"-3px"}
        ml={"14px"}
        visibility={["visible", "visible", "hidden"]}
        h={"12"}
        role="group"
        zIndex={99}
        w={"fit-content"}
        // bgColor={"red.500"}
      >
        {!change ? (
          <HamburgerIcon
            boxSize={7}
            mx={-1}
            _groupFocus={{ animation: !isOpen && `${anime} 1.3s ease-in-out ` }}
          />
        ) : (
          <CloseIcon
            boxSize={5}
            mx={0}
            _groupFocus={{ animation: isOpen && `${anime} 1.3s ease-in-out ` }}
          />
        )}
      </Button>
      <Slide direction="left" in={isOpen} style={{ top: "64px" }}>
        <Box
          position={"absolute"}
          w={"full"}
          h={"100vh"}
          p={1}
          color={colorOn}
          bgGradient={navNav}
          opacity={1}
          visibility={["visible", "visible", "hidden"]}
        >
          <List
            fontSize={"2xl"}
            spacing={"8"}
            mt={10}
            fontWeight={500}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"90%"}
          >
            {navi.map((n: any) => (
              <motion.div whileHover={{ scale: 1.03, y: [-1, 1, -1] }} key={n}>
                <Link to={n} onClick={onToggle} smooth key={n}>
                  <ListItem
                    m={3}
                    cursor={"pointer"}
                    p={1}
                    fontFamily="serif"
                    // boxShadow={" 0px 2px 0px 0px white"}
                    fontSize={"2xl"}
                    textAlign={"center"}
                    rounded={5}
                    w={"70vw"}
                    onClick={changeIcon}
                  >
                    <Text as={"u"} textUnderlineOffset={4}>
                      {n}
                    </Text>
                  </ListItem>
                </Link>
              </motion.div>
            ))}
          </List>
        </Box>
      </Slide>
      <Flex
        justifyContent={"center"}
        position={"absolute"}
        left={["0%", "0%", -4, -2, 0]}
        w={["100%", "100%", "auto"]}
        // w={["53%", "40%", "33%", "30%", "24%", "20%"]}
        // mt={colorMode !== "light" ? 2 : -2}
        // ml={colorMode !== "light" ? 0 : -2}
        mt={[1.5, 0]}
        // bgColor={"red.500"}
      >
        <Box position={"relative"}>
          <Link to={"Home"} smooth>
            <Img
              visibility={["visible"]}
              src={colorMode === "light" ? logo1 : logo1}
              // src={logo}
              filter={
                colorMode !== "light" ? "brightness(110%)" : "brightness(110%)"
              }
              // transform={colorMode !== "light" ? "scale(1)" : "scale(.89)"}
              alt="devDay2"
              cursor={"pointer"}
              w={[44]}
              // backdropBrightness={"70%"}
              zIndex={0}
              // h={16}
            ></Img>
          </Link>
          <Text
            position={"absolute"}
            top={["58px", "53px"]}
            left={[10, 10]}
            fontSize={["10px", "12px"]}
            color={"white"}
            fontFamily={"ubuntu"}
          >
            {" "}
            code by
          </Text>
        </Box>
      </Flex>
      <Flex h={"16"} alignItems="center" justifyContent="space-between">
        <Flex
          w={["0", "0", "full"]}
          visibility={["hidden", "hidden", "visible"]}
          alignItems="center"
          justifyContent="space-between"
          m={"4"}
        >
          <List display={"flex"} flexDirection={"row"}>
            {navi.map((n: any) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 0.9,
                  x: 2,
                }}
                key={n}
              >
                <ListItem
                  mx={[0, 0, 2, 2, 4]}
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
                  key={n}
                >
                  <Link to={n} smooth onClick={() => setChange(!change)}>
                    {n}
                  </Link>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Flex>
        <motion.div
          whileHover={{ x: [0, -10], scale: 1.7, transition: { duration: 1 } }}
        >
          <Button
            bg={colorMode !== "light" ? "teal.900" : "blue.500"}
            _hover={{
              bg: colorMode !== "light" ? "gray.900" : "blue.300",
            }}
            onClick={toggleColorMode}
            borderRadius="0 0 0 100%"
            h={["6", "10"]}
            w={["6", "10"]}
            py={["8", "12"]}
            px={["8", "12"]}
            mt={["-4", "0"]}
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
