import {
  Box,
  Flex,
  HStack,
  Link,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { relative } from "path";

const Social = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        zIndex={99}
        pos={["absolute", "absolute", "absolute", "initial"]}
        // top={["7", "28", 0]}
        // bottom={["auto", 53, "0"]}
        // left={[5, "10"]}
        flexDir={["row", "row", "column"]}
        // left={[10, 10, 10, "auto"]}
        // top={[24, 24, 24, "0"]}
        gap={[0, -1, 0, 1, 0]}
        // bgColor={"red.400"}
        mr={[0, 0, 0, 0, 10]}
        ml={3}
        bottom={[16, 16, "auto"]}
        top={["auto", "auto", "6.3rem"]}
        left={["auto", "auto", 10]}
        // right={'50%'}
      >
        <Link
          href="https://www.linkedin.com/in/taha-maatof-126058129/"
          isExternal
        >
          <Box
            h={[10, 10, "54px", "60px", 16]}
            w={[10, 10, "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
            borderWidth={["4px", "4px", "5px"]}
            transform={"rotate(45deg)"}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[24, 24, 34, 40, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[1, 1, 1, 1.5, 1.5]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
                <FaLinkedinIn />
              </motion.div>
            </Box>
          </Box>
        </Link>
        <Box
          h={[6, 6, 6, 7, 8]}
          w={[6, 6, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
          borderWidth={["4px", "4px", "5px"]}
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
          pos={"relative"}
          left={[7, 7, 2, 0]}
          bottom={[-8, -8, 0]}
        ></Box>
        <Box
          h={[6, 6, 6, 7, 8]}
          w={[6, 6, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
          borderWidth={["4px", "4px", "5px"]}
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
          visibility={["visible", "visible", "hidden", "hidden"]}
          pos={"absolute"}
          left={1}
          bottom={7}
        ></Box>
        <Link href="https://github.com/tahasama" isExternal>
          <Box
            h={[10, 10, "54px", "60px", 16]}
            w={[10, 10, "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#C53030" : "#086F83"}
            borderWidth={["4px", "4px", "5px"]}
            transform={"rotate(45deg)"}
            zIndex={99}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[28, 28, 36, 40, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[0.5, 0.5, 1, 1.5, 1.5]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
                <FaGithub />
              </motion.div>
            </Box>
          </Box>{" "}
        </Link>
        <Box
          h={[6, 6, 6, 7, 8]}
          w={[6, 6, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#C53030" : "#086F83"}
          borderWidth={["4px", "4px", "5px"]}
          transform={[
            "rotate(45deg) translateY(-20px) translateX(20px);",
            "rotate(45deg) translateY(-25px) translateX(25px);",
          ]}
          visibility={["hidden", "hidden", "visible", "visible"]}
          mx={[0, 0, 5, 8]}
        ></Box>{" "}
        <LinkScroll to="Contact" smooth>
          <Box
            cursor={"pointer"}
            h={[10, 10, "54px", "60px", 16]}
            w={[10, 10, "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
            borderWidth={["4px", "4px", "5px"]}
            transform={"rotate(45deg)"}
            ml={[0, 0, 0]}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[28, 28, 34, 40, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[0.5, 0.5, 1, 1.5, 1.5]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
                <AiOutlineMail />
              </motion.div>
            </Box>
          </Box>
        </LinkScroll>
        <Box
          h={[6, 6, 6, 7, 8]}
          w={[6, 6, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
          borderWidth={["4px", "4px", "5px"]}
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
          pos={"relative"}
          left={[-9, -9, 0]}
          bottom={[4, 4, 0]}
        ></Box>{" "}
        <Box
          h={[6, 6, 6, 7, 8]}
          w={[6, 6, 6, 7, 8]}
          borderRadius={[5, 8, 7, 6, 8]}
          borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
          borderWidth={["4px", "4px", "5px"]}
          transform={[
            "rotate(45deg) translateY(20px) translateX(-20px);",
            "rotate(45deg) translateY(25px) translateX(-25px);",
          ]}
          visibility={["visible", "visible", "hidden"]}
          pos={"absolute"}
          right={-7}
          bottom={-4}
        ></Box>{" "}
      </Flex>
    </>
  );
};

export default Social;
