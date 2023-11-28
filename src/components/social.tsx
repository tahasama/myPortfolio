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
        top={["-20", "-7", "24", "28", "40"]}
        bottom={["auto", 53, "0"]}
        left={[5, "10"]}
        spacing={[0, -1, 0, 1, 0]}
      >
        <Link
          href="https://www.linkedin.com/in/taha-maatof-126058129/"
          isExternal
        >
          <Box
            h={[12, "54px", "54px", "60px", 16]}
            w={[12, "54px", "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#9B2C2C" : "#0987A0"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[24, 32, 30, 34, 36]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[2, 2, 2, 2, 2.5]}
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
            h={[12, "54px", "54px", "60px", 16]}
            w={[12, "54px", "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#C53030" : "#086F83"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
            zIndex={99}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[30, 34, 36, 40, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[1, 1, 1, 1.5, 1.5]}
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
          transform={[
            "rotate(45deg) translateY(-20px) translateX(20px);",
            "rotate(45deg) translateY(-25px) translateX(25px);",
          ]}
        ></Box>{" "}
        <LinkScroll to="Contact" smooth>
          <Box
            cursor={"pointer"}
            h={[12, "54px", "54px", "60px", 16]}
            w={[12, "54px", "54px", "60px", 16]}
            borderRadius={[8, 8, 10, 12, 10]}
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.900"}
            borderColor={colorMode !== "dark" ? "#E53E3E" : "#065666"}
            borderWidth="5px"
            transform={"rotate(45deg)"}
          >
            <Box
              transform={"rotate(-45deg)"}
              fontSize={[28, 34, 34, 40, 42]}
              color={colorMode !== "dark" ? "gray.100" : "gray.300"}
              m={[1, 1, 1, 1.5, 1.5]}
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 45 }}>
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
    </>
  );
};

export default Social;
