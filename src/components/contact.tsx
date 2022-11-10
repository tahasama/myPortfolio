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
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import tresor from "../images/tresor.png";

const Contact = () => {
  const bglOnLight = useColorModeValue("gray.300", "gray.900");
  const bgPlaceHolder = useColorModeValue("gray.200", "gray.600");
  const { colorMode } = useColorMode();

  //   const bgOnLight = useColorModeValue(
  //     "linear( #ad9ba0 0%, #ad9ba0 80%)",
  //     "linear( gray.900 0%, gray.900 80%)"
  //   );bglOnLight

  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytm3juo",
        "template_alun2fr",
        form.current,
        "ENtm8oqrclv3xgIHD"
      )
      .then(
        (result): any => {
          console.log(result.text);
        },
        (error): any => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <VStack
        position={"relative"}
        h={["100vh", "120vh", "120vh", "120vh", "100vh"]}
        // bgGradient={bgOnLight}
        bgColor={bglOnLight}
        // clipPath=" polygon(27% 16%, 41% 10%, 55% 35%, 69% 9%, 83% 35%, 100% 8%, 100% 100%, 0 100%, 0% 35%, 12% 10%)"
        clipPath={[
          "polygon(34% 0, 50% 4%, 68% 0, 84% 4%, 100% 0, 100% 100%, 0 100%, 0 0, 17% 4%)",
          "polygon(34% 0, 50% 4%, 68% 0, 84% 4%, 100% 0, 100% 100%, 0 100%, 0 0, 17% 4%)",
          "polygon(28% 10%, 40% 0, 54% 9%, 68% 0, 83% 9%, 100% 0, 100% 100%, 0 100%, 0 10%, 15% 0)",
        ]}
        // clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
        mt={[-80, -40, -48, -80, `${colorMode !== "dark" ? "-40vh" : "-30vh"}`]}
        // zIndex={99}
        w={"100%"}
      >
        <Element name="Contact"></Element>

        <FormControl
          ref={form}
          onSubmit={sendEmail}
          top={[28, 80, 28, 28, 40]}
          w={[6 / 7, 6 / 7, 4 / 7, 3 / 7, 3 / 7]}
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
        {colorMode !== "dark" && (
          <Flex
            // bgColor={"red.300"}
            pos={"absolute"}
            justifyContent={"end"}
            left={[1, 1, 10]}
            bottom={[4, 36, 40, 10]}
            transform={"scaleX(-1) rotate(12deg)"}
            w={["23%", "20%", "16%"]}
          >
            <Img src={tresor} />
          </Flex>
        )}
      </VStack>
    </>
  );
};

export default Contact;
