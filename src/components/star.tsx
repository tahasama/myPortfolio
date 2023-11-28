import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      ></Box>
    </motion.div>
  );
};

export default Star;
