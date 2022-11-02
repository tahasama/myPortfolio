import { Box, HStack, Img, useColorMode, VStack } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import bird from "../images/bird.png";
import birdN from "../images/birdN.png";

const Birds = () => {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [370, 590], [1600, -900]);
  const y1 = useTransform(scrollY, [370, 590], [-50, 200]);

  const x2 = useTransform(scrollY, [370, 590], [1500, -800]);
  const y2 = useTransform(scrollY, [370, 590], [100, -100]);

  const x3 = useTransform(scrollY, [370, 590], [1400, -700]);
  const y3 = useTransform(scrollY, [370, 590], [260, 400]);

  const x4 = useTransform(scrollY, [370, 590], [1600, -700]);
  const y4 = useTransform(scrollY, [370, 590], [200, 200]);

  const x5 = useTransform(scrollY, [370, 590], [1000, -1500]);
  const y5 = useTransform(scrollY, [370, 590], [250, 100]);

  const x6 = useTransform(scrollY, [370, 590], [1200, -1500]);
  const y6 = useTransform(scrollY, [370, 590], [300, 200]);

  const { colorMode, toggleColorMode } = useColorMode();

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
          111
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
          222
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
          333
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
          444
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
          555
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
          666
        </Box>
      </motion.div>
    </HStack>
  );
};

export default Birds;
