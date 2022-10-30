import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Element, Link } from "react-scroll";

const Contact = () => {
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
      <Element name="Contact"></Element>
      <VStack
        position={"relative"}
        h={["120vh", "120vh", "120vh", "120vh"]}
        bgColor={"gray.300"}
        // clipPath=" polygon(27% 16%, 41% 10%, 55% 35%, 69% 9%, 83% 35%, 100% 8%, 100% 100%, 0 100%, 0% 35%, 12% 10%)"
        clipPath="polygon(24% 16%, 37% 0, 51% 16%, 67% 0, 83% 16%, 100% 0, 100% 100%, 0 99%, 0 16%, 12% 0)"
        // clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
        mt={[-40, -40, -80, -80, -80]}
        // zIndex={99}
      >
        <FormControl
          ref={form}
          onSubmit={sendEmail}
          top={80}
          w={[6 / 7, 6 / 7, 4 / 7, 3 / 7, 3 / 7]}
          //   fontSize={[20, 20, 20, 20, 20]}
        >
          <FormLabel p={2}>Name</FormLabel>
          <Input type="text" name="from_name" />
          <FormLabel p={2}>Email</FormLabel>
          <Input type="email" name="from_email" />
          <FormLabel p={2}>Message</FormLabel>
          <Textarea name="message" />
          <Input mt={7} type="submit" value="Send" bgColor={"green.200"} />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
      </VStack>
    </>
  );
};

export default Contact;
