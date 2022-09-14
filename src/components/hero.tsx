import React from "react";
import { Box, keyframes } from "@chakra-ui/react";

const typing = keyframes`
from {
  width: 0;
}
to {
  width: 100px;
}
}
`;

const blink = keyframes`
from {
  border-right: 2px solid rgba(255, 255, 255, 0.75);
}
to {
  border-right: 2px solid rgba(255, 255, 255, 0);
} 
`;

const Hero = () => {
  return (
    <Box
      w={100}
      overflow={"hidden"}
      whiteSpace={"nowrap"}
      // m={"auto"}
      letterSpacing={2}
      animation={`${typing} 1.5s steps(12), ${blink} 1.5s steps(12)`}
    >
      I'm a hero
    </Box>
  );
};

export default Hero;
