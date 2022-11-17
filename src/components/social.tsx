import { Box, Link, useColorMode, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";

const Social = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        pos={"absolute"}
        // transform={"translateY(68%) translateX(20%)"}
        zIndex={3}
        // borderRadius={50}
        blur={"50px"}
        // opacity={0.5}
        // spacing={[8, -3]}
        justifyContent={"center"}
        h={"100vh"}
        m={"8px 18px"}
        top={["44", "40", "36", "32", "28"]}
      >
        <VStack
          pos={"absolute"}
          top={["-5", "32", "24", "32", "40"]}
          bottom={["auto", 53, "auto"]}
          left={["4", "8", "7", "10", "8"]}
          spacing={[0, -1, 0, -1, 0]}
          // flexDir={["row", "column", "column", "column", "column"]}
          // transform={"rotate(90deg)"}
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
              border={
                colorMode !== "dark" ? "5px solid #9B2C2C" : "5px solid #0987A0"
              }
              transform={"rotate(45deg)"}
            >
              <Box
                transform={"rotate(-45deg)"}
                fontSize={[24, 24, 30, 36]}
                color={colorMode !== "dark" ? "gray.100" : "gray.300"}
                m={[1, 2]}
              >
                <FaLinkedinIn />
              </Box>
            </Box>
          </Link>
          <Box
            h={[5, 8, 6, 7, 8]}
            w={[5, 8, 6, 7, 8]}
            borderRadius={[5, 8, 7, 6, 8]}
            border={
              colorMode !== "dark" ? "5px solid #9B2C2C" : "5px solid #0987A0"
            }
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
              border={
                colorMode !== "dark" ? "5px solid #C53030" : "5px solid #086F83"
              }
              transform={"rotate(45deg)"}
            >
              <Box
                transform={"rotate(-45deg)"}
                fontSize={[30, 30, 36, 42]}
                color={colorMode !== "dark" ? "gray.100" : "gray.300"}
                m={[1, 1]}
              >
                <FaGithub />
              </Box>
            </Box>{" "}
          </Link>
          <Box
            h={[5, 8, 6, 7, 8]}
            w={[5, 8, 6, 7, 8]}
            borderRadius={[5, 8, 7, 6, 8]}
            border={
              colorMode !== "dark" ? "5px solid #C53030" : "5px solid #086F83"
            }
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
              border={
                colorMode !== "dark" ? "5px solid #E53E3E" : "5px solid #065666"
              }
              transform={"rotate(45deg)"}
            >
              <Box
                transform={"rotate(-45deg)"}
                fontSize={[28, 28, 34, 42]}
                color={colorMode !== "dark" ? "gray.100" : "gray.300"}
                m={1}
              >
                <AiOutlineMail />
              </Box>
            </Box>
          </LinkScroll>
          <Box
            h={[5, 8, 6, 7, 8]}
            w={[5, 8, 6, 7, 8]}
            borderRadius={[5, 8, 7, 6, 8]}
            border={
              colorMode !== "dark" ? "5px solid #E53E3E" : "5px solid #065666"
            }
            transform={[
              "rotate(45deg) translateY(20px) translateX(-20px);",
              "rotate(45deg) translateY(25px) translateX(-25px);",
            ]}
          ></Box>{" "}
        </VStack>

        <Box
          // visibility={["visible", "hidden", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[24, 0, 28, 44, 56]}
          w={[24, 0, 28, 44, 56]}
          borderRadius={[8, 8, 10, 10, 10]}
          border={
            colorMode !== "dark" ? "5px solid #ED8936" : "5px solid #38A169"
          }
          transform={"rotate(45deg)"}
          top={["-44", "-32", "-28", "-32", "-32"]}
          left={["20", "80", "64", "72", "80"]}
        ></Box>
        <Box
          // visibility={["visible", "hidden", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[6, 6, 6, 6, 6]}
          w={[6, 6, 6, 6, 6]}
          borderRadius={[5, 5, 5, 5, 5]}
          border={
            colorMode !== "dark" ? "5px solid #DD6B20" : "5px solid #319795"
          }
          transform={"rotate(45deg)"}
          top={["-7", "24", "16", "24", "28"]}
          left={["20", "44", "36", "44", "48"]}
          mx={[0, 0, -2, -1]}
        ></Box>
        <Box
          // visibility={["visible", "hidden", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[7, 0, 16, 20, 24]}
          w={[7, 0, 16, 20, 24]}
          borderRadius={[4, 8, 10, 10, 10]}
          border={
            colorMode !== "dark" ? "5px solid #C05621" : "5px solid #2C7A7B"
          }
          transform={"rotate(45deg)"}
          top={["-16", "2", "2", "2", "12"]}
          left={["6", "56", "48", "56", "60"]}
          m={-1}
          opacity={[0, 0, 1]}
        ></Box>
        <Box
          // visibility={["hidden", "hidden", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[0, 0, 32, 36, 40]}
          w={[0, 0, 32, 36, 40]}
          borderRadius={[8, 8, 10, 12, 12]}
          border={
            colorMode !== "dark" ? "5px solid #9C4221" : "5px solid #4FD1C5"
          }
          transform={"rotate(45deg)"}
          top={["-32", "-32", "-32", "-32", "-28"]}
          left={["52", "52", "40", "52", "56"]}
          opacity={[0, 0, 1]}
        ></Box>
        <Box
          // visibility={["visible", "visible", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[10, 16, 12, 16, 16]}
          w={[10, 16, 12, 16, 16]}
          borderRadius={[8, 8, 10, 12, 12]}
          border={
            colorMode !== "dark" ? "5px solid #F6AD55" : "5px solid #2F855A"
          }
          transform={"rotate(45deg)"}
          top={["-28", "8", "8", "8", "12"]}
          left={["4", "44", "40", "44", "48"]}
          mx={-0}
          my={-2}
        ></Box>
        <Box
          // visibility={["visible", "visible", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[8, 12, 10, 12, 12]}
          w={[8, 12, 10, 12, 12]}
          borderRadius={[7, 8, 10, 12, 12]}
          border={
            colorMode !== "dark" ? "5px solid #ED8936" : "5px solid #319795"
          }
          transform={"rotate(45deg)"}
          top={["-28", "-10", "-10", "-10", "-8"]}
          left={["-1", "48", "40", "48", "48"]}
          // my={1}
        ></Box>
        <Box
          // visibility={["hidden", "visible", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[28, 28, 24, 28, 32]}
          w={[28, 28, 24, 28, 32]}
          borderRadius={[8, 8, 10, 16, 16]}
          border={
            colorMode !== "dark" ? "5px solid #DD6B20" : "5px solid #38B2AC"
          }
          transform={"rotate(45deg)"}
          top={["-12", "-12", "-12", "-12", "-8"]}
          left={["16", "16", "12", "16", "16"]}
          opacity={[0, 1]}
        ></Box>
        <Box
          // visibility={["visible", "visible", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[12, 16, 12, 16, 20]}
          w={[12, 16, 12, 16, 20]}
          borderRadius={[8, 8, 10, 16, 16]}
          border={
            colorMode !== "dark" ? "5px solid #F6AD55" : "5px solid #48BB78"
          }
          transform={"rotate(45deg)"}
          top={["-20", "16", "12", "16", "20"]}
          left={["10", "20", "16", "20", "20"]}
        ></Box>
        <Box
          // visibility={["visible", "visible", "visible", "visible", "visible"]}
          pos={"absolute"}
          h={[16, 16, 12, 16, 20]}
          w={[16, 16, 12, 16, 20]}
          borderRadius={[8, 8, 10, 16, 16]}
          border={
            colorMode !== "dark" ? "5px solid #ED8936" : "5px solid #319795"
          }
          transform={"rotate(45deg)"}
          top={["-24", "-3", "-3", "-3", "0"]}
          left={["20", "2", "2", "2", "0"]}
        ></Box>
      </Box>
    </>
  );
};

export default Social;
