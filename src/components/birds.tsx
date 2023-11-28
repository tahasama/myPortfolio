import { Box, HStack, Img, useColorMode } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import bird from "../images/bird.png";
import birdN from "../images/birdN.png";

const Birds = () => {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [270, 590], [2600, -900]);
  const y1 = useTransform(scrollY, [320, 600], [0, 200]);

  const x2 = useTransform(scrollY, [270, 590], [2600, -800]);
  const y2 = useTransform(scrollY, [320, 450, 600], [100, 50, 300]);

  const x3 = useTransform(scrollY, [370, 590], [2600, -700]);
  const y3 = useTransform(scrollY, [320, 600], [260, 400]);

  const x4 = useTransform(scrollY, [370, 590], [2600, -700]);
  const y4 = useTransform(scrollY, [320, 600], [200, 200]);

  const x5 = useTransform(scrollY, [370, 590], [2600, -1500]);
  const y5 = useTransform(scrollY, [320, 600], [250, 100]);

  const x6 = useTransform(scrollY, [370, 590], [2600, -1500]);
  const y6 = useTransform(scrollY, [320, 600], [300, 200]);

  const { colorMode } = useColorMode();

  return (
    <HStack>
      <motion.div
        style={{
          x: x1,
          y: y1,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: 40,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          x: x2,
          y: y2,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          x: x3,
          y: y3,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          x: x4,
          y: y4,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          x: x5,
          y: y5,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
          marginLeft: 120,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          x: x6,
          y: y6,
          width: "6%",
          position: "relative",
          top: 40,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
          marginLeft: 120,
        }}
      >
        <Box overflow={"hidden"}>
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
    </HStack>
  );
};

export default Birds;
