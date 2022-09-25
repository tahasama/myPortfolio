import { Box, Flex, Grid, GridItem, Img, useColorMode } from "@chakra-ui/react";
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
import html from "../svg/html2.png";
import css from "../svg/css.png";
import js from "../svg/js.png";
import firebase from "../svg/firebase.png";
import docker from "../svg/docker.png";
import ts from "../svg/ts.png";

const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      gap={0}
      position={"relative"}
      //   justifyContent={"end"}
      alignItems={"center"}
      h={"100%"}
      m={"2"}
    >
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={expressL} w="30%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        {colorMode === "light" ? (
          <Img src={mongoD} w="68%" mb={"1"} />
        ) : (
          <Img src={mongoN} w="70%" ml={"3"} />
        )}
      </GridItem>
      <GridItem
        w="100%"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Img src={reactN} w="35%" /> */}
        <Img
          src={colorMode === "light" ? reactD : reactN}
          w="35%"
          filter={"brightness(.92)"}
        />
      </GridItem>
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={nodeL} w="50%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={reduxL} w="28%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={gitL} w="34%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        {/* <Img src={githubN} w="34%" /> */}
        <Img
          src={colorMode === "light" ? githubD : githubN}
          w="34%"
          filter={"brightness(.92)"}
        />
      </GridItem>
      <GridItem
        w="100%"
        display={"flex"}
        justifyContent={"center"}
        clipPath={["polygon(0 20%, 100% 20%, 100% 100%, 0% 100%)"]}
        mb={"18px"}
      >
        <Img src={html} w="43%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={css} w="25%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={js} w="40%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={firebase} w="54%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={docker} w="44%" />
      </GridItem>{" "}
      <GridItem w="100%" display={"flex"} justifyContent={"center"}>
        <Img src={ts} w="30%" />
      </GridItem>
    </Grid>
  );
};

export default Skills;
