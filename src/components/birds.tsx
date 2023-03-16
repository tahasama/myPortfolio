import { Box, HStack, Img, useColorMode } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import bird from "../images/bird.png";
import birdN from "../images/birdN.png";

const Birds = () => {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [270, 590], [2600, -900]);
  const y1 = useTransform(scrollY, [320, 600], [0, 200]);

  const x2 = useTransform(scrollY, [270, 590], [2600, -800]);
  const y2 = useTransform(scrollY, [320, 600], [100, -100]);

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
          // x: colorMode !== "light" ? x2 : x1,
          x: x1,
          y: y1,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,

          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: 40,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          // x: colorMode !== "light" ? x2 : x1,
          x: x2,
          y: y2,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,
          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          // x: colorMode !== "light" ? x2 : x1,
          x: x3,
          y: y3,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,
          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          // x: colorMode !== "light" ? x2 : x1,
          x: x4,
          y: y4,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,
          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          // x: colorMode !== "light" ? x2 : x1,
          x: x5,
          y: y5,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,
          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
          marginLeft: 120,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          // x: colorMode !== "light" ? x2 : x1,
          x: x6,
          y: y6,
          // background: "salmon",
          // y: colorMode !== "light" ? y2 : y1,
          // y: y2,
          width: "6%",
          // height: "0vw",
          position: "relative",
          top: 40,
          // right: 0,
          zIndex: 99,
          overflow: "hidden",
          rotate: colorMode !== "light" ? 340 : 290,
          marginTop: -80,
          marginLeft: 120,

          // backgroundColor: "yellow",
        }}
      >
        <Box
          // left={"0"}
          // bgColor={"yellow.400"}
          // zIndex={99}
          // w={"20%"}
          overflow={"hidden"}
        >
          <Img src={colorMode !== "light" ? birdN : bird} overflow={"hidden"} />
        </Box>
      </motion.div>
    </HStack>
  );
};

export default Birds;
