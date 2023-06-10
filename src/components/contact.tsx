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
import tresor from "../images/tresor.png";
import copyRight from "../images/copyright.png";
import copyRightN from "../images/copyrightN.png";

const service = process.env.REACT_APP_SERVICE || "";
const key = process.env.REACT_APP_KEY;

const Contact = () => {
  const bgOnLight = useColorModeValue(
    "linear( teal.200 0%,gray.200 70%, gray.100)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const bgPlaceHolder = useColorModeValue("gray.200", "gray.600");
  const { colorMode } = useColorMode();
  const { onCopy, hasCopied } = useClipboard("taha.maatof@gmail.com");

  //   const bgOnLight = useColorModeValue(
  //     "linear( #ad9ba0 0%, #ad9ba0 80%)",
  //     "linear( gray.900 0%, gray.900 80%)"
  //   );bglOnLight

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
    <>
      <Element name="Contact"></Element>
      {/* <Box
        className="custom-shape-divider-top-1686395892"
        mt={-1}
        bgColor={"#81E6D9"}
        fill="#9DECF9"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </Box> */}
      <VStack
        position={"relative"}
        // h={["110vh", "110vh", "107vh", "110vh", "99vh"]}
        // bgGradient={bgOnLight}
        bgGradient={bgOnLight}
        p={12}
        clipPath={[
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 3%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 7%, 100% 0, 100% 100%, 0 100%, 0 0)",
          "polygon(26% 8%, 100% 0, 100% 100%, 0 100%, 0 0)",
        ]}
        mt={["-10vh", "-14vh", "-75vh", "-85vh", "-18vh"]}
        // clipPath=" polygon(27% 16%, 41% 10%, 55% 35%, 69% 9%, 83% 35%, 100% 8%, 100% 100%, 0 100%, 0% 35%, 12% 10%)"
        // clipPath={[
        //   "polygon(34% 0, 50% 4%, 68% 0, 84% 4%, 100% 0, 100% 100%, 0 100%, 0 0, 17% 4%)",
        //   "polygon(34% 0, 50% 4%, 68% 0, 84% 4%, 100% 0, 100% 100%, 0 100%, 0 0, 17% 4%)",
        //   "polygon(28% 10%, 40% 0, 54% 9%, 68% 0, 83% 9%, 100% 0, 100% 100%, 0 100%, 0 10%, 15% 0)",
        // ]}
        // // clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
        // mt={[
        //   -48,
        //   -48,
        //   `${colorMode !== "dark" ? "-30vh" : "-54vh"}`,

        //   "-50vh",
        //   // "-80vh",
        //   `${colorMode !== "dark" ? "-99vh" : "-30vh"}`,
        // ]}
        // zIndex={99}
        // w={"100%"}
        // mt={[-48, colorMode !== "dark" ? -28 : -48]}
        // mt={[-48, -24]}
      >
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
          <FormControl
            mt={32}
            // top={[28, 28, 28, 28, 28]}
            w={[72, 6 / 7, 4 / 7, 3 / 7, 3 / 7]}
            //   fontSize={[20, 20, 20, 20, 20]}
            //   mt={[-40, -60, -80, -20, -40]}
          >
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
                //   px={20}
              >
                Send
              </Button>
            </VStack>
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        </form>

        {/* {colorMode !== "dark" && (
          <Flex
            // bgColor={"red.300"}
            pos={"absolute"}
            justifyContent={"end"}
            left={[1, 1, 1, 4, 10]}
            bottom={[10, 36, 4, 5, 24]}
            transform={"scaleX(-1) rotate(12deg)"}
            w={["23%", "20%", "22%", "21%", "16%"]}
          >
            <Img src={tresor} />
          </Flex>
        )} */}
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
            // py={1}
            // mx={10}
            top={-1}
          >
            {hasCopied ? "Copied!" : "Copy E-mail"}
          </Button>
        </Flex>
        <Flex
          pos={"relative"}
          justifyContent={"center"}
          bottom={0}
          // p={4}
          // m={6}
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
    </>
  );
};

export default Contact;
