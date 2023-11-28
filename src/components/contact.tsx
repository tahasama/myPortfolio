import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  Textarea,
  useColorMode,
  useColorModeValue,
  VStack,
  Text,
  useClipboard,
  Box,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import copyRight from "../images/copyright.png";
import copyRightN from "../images/copyrightN.png";

const service = process.env.REACT_APP_SERVICE || "";
const key = process.env.REACT_APP_KEY;

const Contact = () => {
  const bgOnLight = useColorModeValue(
    "linear( teal.300 0%,gray.200 90%, white)",
    "linear( gray.800 0%, gray.900 40%)"
  );
  const bgPlaceHolder = useColorModeValue("gray.200", "gray.600");
  const { colorMode } = useColorMode();
  const { onCopy, hasCopied } = useClipboard("taha.maatof@gmail.com");

  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(service, "template_alun2fr", form.current, key).then(
      (result): any => {
        console.log(result.text);
      },
      (error): any => {
        console.log(error.text);
      }
    );
    form.current.reset();
  };
  return (
    <Box mt={-10}>
      <Box bgColor={colorMode !== "light" ? "gray.800" : "teal.300"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill={colorMode !== "light" ? "#171923" : "#76E4F7"}
        >
          <path
            d="M0 0L1200 0 307.75 114.72 0 0z"
            className="shape-fill"
          ></path>
        </svg>
      </Box>

      <Element name="Contact"></Element>

      <VStack position={"relative"} bgGradient={bgOnLight} p={12}>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FormControl mt={12} w={[72, 6 / 7, 4 / 7, 3 / 7, 3 / 7]}>
            <FormLabel p={2}>Name</FormLabel>
            <Input
              type="text"
              name="from_name"
              p={5}
              border={"2px"}
              borderColor="gray.200"
              bgColor={bgPlaceHolder}
              placeholder="lucky !"
            />
            <FormLabel p={2} mt={4}>
              Email
            </FormLabel>
            <Input
              type="email"
              name="from_email"
              p={5}
              border={"2px"}
              borderColor="gray.200"
              bgColor={bgPlaceHolder}
              placeholder="example: i-want-to-hire@you.com"
            />
            <FormLabel p={2} mt={4}>
              Message
            </FormLabel>
            <Textarea
              name="message"
              p={5}
              border={"2px"}
              borderColor="gray.200"
              bgColor={bgPlaceHolder}
              placeholder="say Hii !!"
              rows={5}
            />
            <VStack>
              <Button
                mt={10}
                w={[4 / 7, 4 / 7, 3 / 7, 3 / 7, 3 / 7]}
                type="submit"
                bgColor={"teal.400"}
                py={6}
                letterSpacing={"wider"}
                fontSize={18}
              >
                Send
              </Button>
            </VStack>
          </FormControl>
        </form>

        <Flex
          py={[7, 10]}
          gap={7}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={["column", "column", "row"]}
        >
          <Text
            fontFamily={"lato"}
            fontSize={21}
            lineHeight={4}
            letterSpacing={2}
            fontWeight={500}
            bgGradient={
              colorMode !== "dark"
                ? "linear(to-l, #7928CA, #FF0080)"
                : "linear(to-r, cyan.500, pink.600)"
            }
            bgClip={"text"}
            h={"6"}
          >
            taha.maatof@gmail.com
          </Text>

          <Button
            bgColor={colorMode !== "dark" ? "blue.400" : "blue.600"}
            onClick={onCopy}
            value={"taha.maatof@gmail.com"}
            borderRadius={40}
            transform="scale(1.2)"
            _active={{
              bgColor: colorMode !== "dark" ? "blue.600" : "blue.800",
            }}
            _hover={{ bgColor: colorMode !== "dark" ? "blue.500" : "blue.700" }}
            top={-1}
          >
            {hasCopied ? "Copied!" : "Copy E-mail"}
          </Button>
        </Flex>
        <Flex
          pos={"relative"}
          justifyContent={"center"}
          bottom={0}
          alignItems={"center"}
          textAlign="center"
          flexDir={["column", "column", "row"]}
          fontSize={18}
          letterSpacing={4}
        >
          <Text>Made with passion by Maatof Taha </Text>

          {colorMode !== "dark" ? (
            <Img
              src={copyRight}
              w={["5%", "5%", "2.5%"]}
              h={["5%", "5%", "2.5%"]}
              mx={0}
            />
          ) : (
            <Img
              src={copyRightN}
              w={["3%", "3%", "1%"]}
              h={["3%", "3%", "1%"]}
              mx={2}
            />
          )}
          <Text textAlign="center">2022</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Contact;
