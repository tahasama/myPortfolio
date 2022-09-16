import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Star = ({ d, delay }: any) => {
  return (
    <motion.div
      animate={{ scale: [0.5, 1, 0.5] }}
      transition={{
        duration: 2.5,
        delay: delay,
        repeat: Infinity,
      }}
    >
      <Box
        h={d}
        w={d}
        borderRadius={"100%"}
        bg={"whiteAlpha.900"}
        shadow={"2xl"}
        // blur="5px"
      ></Box>
    </motion.div>
  );
};

export default Star;
