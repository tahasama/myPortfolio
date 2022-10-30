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
      <VStack
        position={"relative"}
        h={"120vh"}
        bgColor={"gray.300"}
        // clipPath=" polygon(27% 16%, 41% 10%, 55% 35%, 69% 9%, 83% 35%, 100% 8%, 100% 100%, 0 100%, 0% 35%, 12% 10%)"
        clipPath="polygon(24% 16%, 37% 0, 51% 16%, 67% 0, 83% 16%, 100% 0, 100% 100%, 0 99%, 0 16%, 12% 0)"
        // clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
        mt={-80}
        // zIndex={99}
      >
        <FormControl ref={form} onSubmit={sendEmail} top={80} w={3 / 7}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="from_name" />
          <FormLabel>Email</FormLabel>
          <Input type="email" name="from_email" />
          <FormLabel>Message</FormLabel>
          <Textarea name="message" />
          <Input type="submit" value="Send" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </VStack>
    </>
  );
};

export default Contact;
