import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import reactD from "../svg/reactD.png";
import reactN from "../svg/reactD1.png";
import mongoN from "../svg/mongo.png";
import mongoD from "../svg/mongo2.png";
import nodeL from "../svg/node.png";
import expressL from "../svg/express.png";
import reduxL from "../svg/redux.png";
import gitL from "../svg/git.png";
import githubD from "../svg/githubD.png";
import githubN from "../svg/githubN.png";
import html from "../svg/html.png";
import css from "../svg/css.png";
import js from "../svg/js.png";
import firebase from "../svg/firebase.png";
import docker from "../svg/docker.png";
import ts from "../svg/ts.png";
import resD from "../svg/resD.png";
import resN from "../svg/resN.png";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      templateColumns={["repeat(3, 1fr)", "repeat(8, 1fr)"]}
      gap={0}
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      //   h={"10vh"}
      fontFamily={"Quicksand"}
      fontSize={"18"}
      m={"5"}
    >
      {/* <Divider position={"absolute"} top="170px" /> */}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={expressL} w="56.3%" />
        <Box m={"3"}>Express Js</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        {colorMode === "light" ? (
          <Img src={mongoD} w="95%" my={"6"} />
        ) : (
          <Img src={mongoN} />
        )}
        <Box m={"3"}>Mongo db</Box>
      </Grid>
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img
          src={colorMode === "light" ? reactD : reactN}
          w="63%"
          filter={"brightness(.92)"}
        />
        <Box m={"3"}>React Js</Box>
      </Grid>
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={nodeL} w="56%" />
        <Box m={"3"}>Node Js</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={reduxL} w="58.8%" />
        <Box m={"3"}>Redux</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={gitL} w="56%" />
        <Box m={"3"}>Git</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img
          src={colorMode === "light" ? githubD : githubN}
          w="56%"
          filter={"brightness(.92)"}
        />
        <Box m={"3"}>GitHub</Box>
      </Grid>
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={html} w="49.5%" />
        <Box m={"3"}>Html</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={css} w="49.5%" />
        <Box m={"3"}>Css</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={js} w="56.5%" />
        <Box m={"3"}>Javascript</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={firebase} w="70%" />
        <Box m={"3"}>FireBase</Box>
      </Grid>
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={docker} w="56.5%" />
        <Box m={"3"}>Docker</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        <Img src={ts} w="56.5%" />
        <Box m={"3"}>TypeScript</Box>
      </Grid>{" "}
      <Grid
        templateRows={["repeat(2, 1fr)"]}
        h="50%"
        justifyItems={"center"}
        alignItems={"center"}
        //  bg={"white"}
      >
        {colorMode === "light" ? (
          <Img src={resD} w="94.5%" />
        ) : (
          <Img src={resN} w="80.5%" />
        )}

        <Box m={"3"}>Responsive</Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
