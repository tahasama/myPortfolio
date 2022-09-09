import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <div>Home</div>
      <Button
        bg={"teal.100"}
        _hover={{ bg: "teal.500" }}
        onClick={toggleColorMode}
      >
        Toggle
      </Button>
    </div>
  );
};

export default Navbar;
