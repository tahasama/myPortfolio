import { Box, Link, useColorMode, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

const Social = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <VStack
        zIndex={99}
        pos={"relative"}
        top={["-7", "32", "24", "32", "40"]}
        bottom={["auto", 53, "0"]}
        left={["0", "2", "-4", "-5", "10"]}
        spacing={[0, -1, 0, -1, 0]}
      >
        <Link
          href="https://www.linkedin.com/in/taha-maatof-126058129/"
          isExternal
        >
          <Box
            h={[12, 12, "54px", 16, 16]}
            w={[12, 12, "54px", 16, 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[24, 24, 30, 36]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[1, 2]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
                <FaLinkedinIn />
              </motion.div>
            </Box>
          </Box>
        </Link>
        <Box
          h={[5, 8, 6, 7, 8]}
          w={[5, 8, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
          borderWidth="5px"
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
        ></Box>
        <Link href="https://github.com/tahasama" isExternal>
          <Box
            h={[12, 12, "54px", 16, 16]}
            w={[12, 12, "54px", 16, 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#C53030" : "#086F83"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
            zIndex={99}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[30, 30, 36, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[1, 1]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
                <FaGithub />
              </motion.div>
            </Box>
          </Box>{" "}
        </Link>
        <Box
          h={[5, 8, 6, 7, 8]}
          w={[5, 8, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#C53030" : "#086F83"}
          borderWidth="5px"
          // transform={"rotate(45deg)"}
          transform={[
            "rotate(45deg) translateY(-20px) translateX(20px);",
            "rotate(45deg) translateY(-25px) translateX(25px);",
          ]}
        ></Box>{" "}
        <LinkScroll to="Contact" smooth>
          <Box
            cursor={"pointer"}
            h={[12, 12, "54px", 16, 16]}
            w={[12, 12, "54px", 16, 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
            // zIndex="99"
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[28, 28, 34, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={1}
              // zIndex="99"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 45 }}
                // style={{ zIndex: "99" }}
              >
                <AiOutlineMail />
              </motion.div>
            </Box>
          </Box>
        </LinkScroll>
        <Box
          h={[5, 8, 6, 7, 8]}
          w={[5, 8, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
          borderWidth="5px"
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
        ></Box>{" "}
      </VStack>
      {/* <Box ml={[0, 0, 4, 3, 4]} zIndex={1}>
        <Box
          pos="relative"
          h={[24, 24, 28, 44, 56]}
          w={[24, 24, 28, 44, 56]}
          borderRadius={[8, 8, 10, 10, 10]}
          borderColor={colorMode !== "dark" ? "#ED8936" : "#38A169"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-23em", "-20em", "-21em", "-23.5em", "-25em"]}
          left={["28", "16", "64", "72", "80"]}
        />
        <Box
          pos="relative"
          h={6}
          w={6}
          borderRadius={5}
          borderColor={colorMode !== "dark" ? "#DD6B20" : "#319795"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-20em", "-21em", "-17.5em", "-20.5em", "-24.5em"]}
          left={["28", "12", "36", "44", "48"]}
          mx={[-1, 0, -2, -1]}
        />
        <Box
          pos="relative"
          h={[7, 0, 16, 20, 24]}
          w={[7, 0, 16, 20, 24]}
          borderRadius={[4, 8, 10, 10, 10]}
          borderColor={colorMode !== "dark" ? "#C05621" : "#2C7A7B"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-26em", "-20em", "-22.5em", "-27.5em", "-30em"]}
          left={["6", "6", "48", "56", "60"]}
          m={-1}
          opacity={[0, 0, 1]}
        />
        <Box
          pos="relative"
          h={[0, 0, 32, 36, 40]}
          w={[0, 0, 32, 36, 40]}
          borderRadius={[8, 8, 10, 12, 12]}
          borderColor={colorMode !== "dark" ? "#9C4221" : "#4FD1C5"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-28em", "-28em", "-34.5em", "-41em", "-46em"]}
          left={["52", "52", "40", "52", "56"]}
          opacity={[0, 0, 1]}
        />
        <Box
          pos="relative"
          h={[10, 16, 12, 16, 16]}
          w={[10, 16, 12, 16, 16]}
          borderRadius={[8, 8, 10, 12, 12]}
          borderColor={colorMode !== "dark" ? "#F6AD55" : "#2F855A"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-28.7em", "-20em", "-33em", "-40em", "-46em"]}
          left={["10", "10", "40", "44", "48"]}
          mx={-0}
          my={-2}
        />
        <Box
          pos="relative"
          h={[8, 12, 10, 12, 12]}
          w={[8, 12, 10, 12, 12]}
          borderRadius={[7, 8, 10, 12, 12]}
          borderColor={colorMode !== "dark" ? "#ED8936" : "#319795"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-30.2em", "-30.2em", "-39em", "-47.5em", "-54em"]}
          left={["5", "5", "40", "48", "48"]}
        />
        <Box
          pos="relative"
          h={[28, 28, 24, 28, 32]}
          w={[28, 28, 24, 28, 32]}
          borderRadius={[8, 8, 10, 16, 16]}
          borderColor={colorMode !== "dark" ? "#DD6B20" : "#38B2AC"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-28em", "-34em", "-42em", "-51em", "-57em"]}
          left={["1", "40", "12", "16", "16"]}
          opacity={[0, 1]}
        />
        <Box
          pos="relative"
          h={[12, 16, 12, 16, 20]}
          w={[12, 16, 12, 16, 20]}
          borderRadius={[8, 8, 10, 16, 16]}
          borderColor={colorMode !== "dark" ? "#F6AD55" : "#48BB78"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-37.4em", "-36.4em", "-42em", "-51em", "-58em"]}
          left={["20", "24", "16", "20", "20"]}
          m={-1}
        />
        <Box
          pos="relative"
          h={[16, 16, 12, 16, 20]}
          w={[16, 16, 12, 16, 20]}
          borderRadius={[8, 8, 10, 16, 16]}
          borderColor={colorMode !== "dark" ? "#ED8936" : "#319795"}
          borderWidth="5px"
          transform="rotate(45deg)"
          top={["-41em", "-37em", "-49em", "-60em", "-68em"]}
          left={["28", "24", "0", "0", "0"]}
        />
      </Box> */}
    </>
  );
};

export default Social;
