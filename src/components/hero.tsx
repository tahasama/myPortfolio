import { Box } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

// const typing = keyframes`
// from {
//   max-width: 0;
// }
// to {
//   max-width: 150px;
// }
// `;

// const blink = keyframes`
// from {
//   border-right: 2px solid rgba(255, 255, 255, 0.75);
// }
// to {
//   border-right: 2px solid rgba(255, 255, 255, 0);
// }
// `;

// const slide = keyframes`
// from {
//   top: -100px;
// }
// to {
//   top: 0;
// }
// `;

const Hero = () => {
  return (
    <Box
      w={"auto"}
      // overflow={"hidden"}
      // whiteSpace={"nowrap"}
      letterSpacing={2}
      // animation={`${typing} 1.5s steps(10) infinite, ${blink} 1.5s steps(10) infinite, ${slide} 3s steps(4) infinite `}
    >
      <Typewriter
        words={[
          // "Frontend-Focused",
          // "FullStack-Able",
          // "Curious",
          // "Passionate",
          // "Devoted",
          // "Creative",
          // "Problem-Solving",
          "Solution-Creating",
        ]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={120}
        deleteSpeed={120}
        delaySpeed={400}
      />
    </Box>
  );
};

export default Hero;
