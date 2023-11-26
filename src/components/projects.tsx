// import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  background,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  // HStack,
  Img,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { MdSettings } from "react-icons/md";

// import proj1 from "../images/proj/proj1/proj1.jpeg";
// import proj1n from "../images/proj/proj1/proj1n1.png";
import resp from "../images/proj/proj1/resp.png";
import proj2 from "../images/proj/proj2/EditorApp.png";
import phone from "../images/proj/proj2/phone.png";
import { Element } from "react-scroll";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
// import { useState } from "react";
// import underwater from "../images/underwater.png";
import water from "../images/bubble.png";
import i1 from "../images/proj/proj1/1.png";
import i2 from "../images/proj/proj1/2.png";
import i3 from "../images/proj/proj1/3.png";
import i4 from "../images/proj/proj1/4.png";
import i5 from "../images/proj/proj1/5.png";
import i6 from "../images/proj/proj1/6.png";
import i7 from "../images/proj/proj1/7.png";
import i8 from "../images/proj/proj1/8.png";
import i9 from "../images/proj/proj1/9.png";
import i10 from "../images/proj/proj1/10.png";
import i11 from "../images/proj/proj1/11.png";
import m1 from "../images/proj/proj2/1.png";
import m2 from "../images/proj/proj2/2.png";
import m3 from "../images/proj/proj2/3.png";
import m4 from "../images/proj/proj2/4.png";
import m5 from "../images/proj/proj2/5.png";
import m6 from "../images/proj/proj2/6.png";
import a1 from "../images/proj/proj3/1.jpg";
import a2 from "../images/proj/proj3/2.jpg";
import a3 from "../images/proj/proj3/3.jpg";
import a4 from "../images/proj/proj3/4.jpg";
import a5 from "../images/proj/proj3/5.jpg";
import a6 from "../images/proj/proj3/6.jpg";
import a7 from "../images/proj/proj3/7.jpg";
import a8 from "../images/proj/proj3/8.jpg";
import f1 from "../images/proj/proj4/40.png";
import f2 from "../images/proj/proj4/41.png";
import f3 from "../images/proj/proj4/42.png";
import f4 from "../images/proj/proj4/43.png";
import f5 from "../images/proj/proj4/44.png";
import f6 from "../images/proj/proj4/45.png";
import f7 from "../images/proj/proj4/46.png";
import f8 from "../images/proj/proj4/47.png";
import f9 from "../images/proj/proj4/48.png";
import f10 from "../images/proj/proj4/49.png";
import f11 from "../images/proj/proj4/50.png";
import f12 from "../images/proj/proj4/51.png";
import { SetStateAction, useEffect, useState } from "react";
import { Carousel } from "./carousel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, FreeMode, Navigation, Thumbs } from "swiper";
import Images from "./ImageModal";
import ImageModal from "./ImageModal";

type HoverState = {
  [key: string]: boolean;
};

const Projects = () => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  console.log(
    "🚀 ~ file: projects.tsx:240 ~ Projects ~ uploadModalOpen:",
    uploadModalOpen
  );

  // const bglOnLight = useColorModeValue("blue.300", "gray.900");
  const bgOnLight = useColorModeValue(
    "linear(blue.300, cyan.300)",
    "linear( gray.900 0%, gray.900 100%)"
  );
  const { colorMode } = useColorMode();

  const projects = [
    {
      title: "Storyat",
      subtitle: "A mobile app for for sharing and reacting",
      description: [
        { desc: "Share a story, a situation, ...." },
        { desc: "Share images photos, ..." },
        { desc: "React to others stories" },
        { desc: "Comments and reply to comments" },
        { desc: "Get notification for comments, reactions" },
        { desc: "Profile with all user contribution, updates, ..." },
      ],
      slides2: [
        {
          img: a1,
        },
        {
          img: a2,
        },
        {
          img: a3,
        },
        {
          img: a4,
        },
        {
          img: a5,
        },
        {
          img: a6,
        },
        {
          img: a7,
        },
        {
          img: a8,
        },
      ],
      link: "https://play.google.com/store/apps/details?id=com.storyat",
    },
    {
      title: "Fave Tale",
      subtitle:
        "An app for pet owners for sharing interacting and buying pets stuff",
      description: [
        { desc: "Share and react to images of pets" },
        { desc: "write your own blog or story" },
        {
          desc: "create and/or participate to discussions, questions, events, ...",
        },
        { desc: "browse and buy from store" },
        { desc: "full profile control for all users activities" },
      ],
      slides2: [
        {
          img: f1,
        },
        {
          img: f2,
        },
        {
          img: f3,
        },
        {
          img: f4,
        },
        {
          img: f5,
        },
        {
          img: f6,
        },
        {
          img: f7,
        },
        {
          img: f8,
        },
        {
          img: f9,
        },
        {
          img: f10,
        },
        {
          img: f11,
        },
        {
          img: f12,
        },
      ],
      link: "https://favetale.vercel.app/",
    },
    {
      title: "Data Management App",
      subtitle: "An app for big construction sites projects",
      description: [
        { desc: "Full Storage and arrangement of the documentation" },
        { desc: "Tracking of quantities of the used materiel" },
        { desc: "The advancement of the projects and its pace" },
        { desc: "Inspection reports (Laboratory, Topography, etc... )" },
        { desc: "Data Management (Procedures, plans, and Updates )" },
      ],
      slides2: [
        {
          img: i4,
        },
        {
          img: i2,
        },
        {
          img: i3,
        },
        {
          img: i1,
        },
        {
          img: i5,
        },
        {
          img: i6,
        },
        {
          img: i7,
        },
        {
          img: i8,
        },
        {
          img: i9,
        },
        {
          img: i10,
        },
        {
          img: i11,
        },
      ],
      link: "https://qualityc.netlify.app/",
    },
    {
      title: "Online Editor App",
      subtitle:
        "An app for learning and creating Python, JS WebDev & React Projects",
      description: [
        { desc: "Create project with Vanilla Html / Css / Javacasript" },
        { desc: "Work with React, and import any package" },
        { desc: "Code with Python and Machine Learning tools" },
        { desc: "Create/Read/Update/Delete own projects" },
        { desc: "See/Clone/Like other users projects" },
      ],
      slides2: [
        {
          img: m1,
        },
        {
          img: m2,
        },
        {
          img: m3,
        },
        {
          img: m4,
        },
        {
          img: m5,
        },
        {
          img: m6,
        },
      ],
      link: "https://thacoder.netlify.app/",
    },

    // Add more projects here
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [indexM, setIndexM] = useState<number>(0);

  useEffect(() => {
    // Update the window width state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModal = (index: number) => {
    setIndexM(index);
    setUploadModalOpen(true);
  };

  return (
    <Box h={"100%"}>
      <Element name="Projects"></Element>
      <Box
        bgColor={colorMode !== "light" ? "gray.900" : "#b1dcf7"}
        mt={[-10, -24]}
      >
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 420"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stopColor={colorMode !== "light" ? "#2D3748" : "#BEE3F8"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,126L60,147C120,168,240,210,360,231C480,252,600,252,720,245C840,238,960,224,1080,238C1200,252,1320,294,1440,273C1560,252,1680,168,1800,154C1920,140,2040,196,2160,210C2280,224,2400,196,2520,161C2640,126,2760,84,2880,119C3000,154,3120,266,3240,273C3360,280,3480,182,3600,147C3720,112,3840,140,3960,126C4080,112,4200,56,4320,77C4440,98,4560,196,4680,217C4800,238,4920,182,5040,196C5160,210,5280,294,5400,322C5520,350,5640,322,5760,280C5880,238,6000,182,6120,161C6240,140,6360,154,6480,182C6600,210,6720,252,6840,252C6960,252,7080,210,7200,196C7320,182,7440,196,7560,224C7680,252,7800,294,7920,315C8040,336,8160,336,8280,301C8400,266,8520,196,8580,161L8640,126L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stopColor={colorMode !== "light" ? "#1A202C" : "#90CDF4"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
            fill="url(#sw-gradient-1)"
            d="M0,294L60,259C120,224,240,154,360,140C480,126,600,168,720,203C840,238,960,266,1080,252C1200,238,1320,182,1440,154C1560,126,1680,126,1800,154C1920,182,2040,238,2160,238C2280,238,2400,182,2520,154C2640,126,2760,126,2880,133C3000,140,3120,154,3240,147C3360,140,3480,112,3600,140C3720,168,3840,252,3960,266C4080,280,4200,224,4320,231C4440,238,4560,308,4680,287C4800,266,4920,154,5040,112C5160,70,5280,98,5400,91C5520,84,5640,42,5760,56C5880,70,6000,140,6120,182C6240,224,6360,238,6480,238C6600,238,6720,224,6840,182C6960,140,7080,70,7200,91C7320,112,7440,224,7560,231C7680,238,7800,140,7920,126C8040,112,8160,182,8280,203C8400,224,8520,196,8580,182L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop
                stopColor={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="0%"
              ></stop>
              <stop
                stopColor={colorMode !== "light" ? "#171923" : "#63B3ED"}
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: 0.8 }}
            fill="url(#sw-gradient-2)"
            d="M0,294L60,252C120,210,240,126,360,140C480,154,600,266,720,280C840,294,960,210,1080,175C1200,140,1320,154,1440,168C1560,182,1680,196,1800,224C1920,252,2040,294,2160,287C2280,280,2400,224,2520,231C2640,238,2760,308,2880,308C3000,308,3120,238,3240,238C3360,238,3480,308,3600,329C3720,350,3840,322,3960,315C4080,308,4200,322,4320,294C4440,266,4560,196,4680,175C4800,154,4920,182,5040,217C5160,252,5280,294,5400,266C5520,238,5640,140,5760,126C5880,112,6000,182,6120,196C6240,210,6360,168,6480,168C6600,168,6720,210,6840,217C6960,224,7080,196,7200,161C7320,126,7440,84,7560,70C7680,56,7800,70,7920,119C8040,168,8160,252,8280,266C8400,280,8520,224,8580,196L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z"
          ></path>
        </svg>
      </Box>

      <Box
        // h={["1750px", "250vh", "185vh", "220vh", "200vh"]}
        bgGradient={bgOnLight}
        mt={-10}
        w={"full"}
      >
        <Box
          bg={colorMode !== "light" ? "gray.900" : "transparent"}
          py={0}
          position={"relative"}
          top={4}
          px={[2, 2, 10]}
        >
          <Text
            color={colorMode !== "light" ? "teal.400" : "red.600"}
            textAlign={"center"}
            py={20}
            fontSize={["md", "xl", "2xl"]}
            fontStyle={"italic"}
            // fontFamily={"serif"}
          >
            For quick access in all projects please login with username/email:
            <b> t@t.com</b> , password: <b> tttttt</b>{" "}
          </Text>
          {projects.map((project: any, index: number) => (
            <Box
              key={index}
              bg={colorMode !== "light" ? "gray.800" : "blue.200"}
              boxShadow="md"
              rounded="md"
              overflow="hidden"
              mb={20}
            >
              <Box
                textAlign={"center"}
                bg={colorMode !== "light" ? "blackAlpha.200" : "blue.400"}
                py={4}
              >
                <Heading as="h2" size="lg" mb={2}>
                  {project.title}
                </Heading>
                <Text fontSize={[20, 20, 24]} color="gray.600" mb={0}>
                  {project.subtitle}
                </Text>
                {/* <Text>{project.description}</Text> */}
              </Box>
              <ImageModal
                isOpen={uploadModalOpen}
                onClose={() => setUploadModalOpen(false)}
                project={projects[indexM]}
                index={indexM}
              />
              <Flex
                // templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={0}
                alignItems={["center", "center"]}
                flexDir={[
                  "column-reverse",
                  "column-reverse",
                  "column-reverse",
                  index % 2 ? "row-reverse" : "row",
                ]}
                h={"-webkit-fit-content"}
              >
                <Flex
                  flexBasis="50%"
                  textAlign={["center", "center", "start", "start"]}
                  flexDir={"column"}
                >
                  <Box p={0} mt={3} ml={5}>
                    <List
                      style={{ textIndent: 10 }}
                      // ml={[0, 0, 0, 0, 32]}
                      // fontSize={["17", "18", "14", "16", "20"]}
                      fontSize={17}
                      lineHeight={"8"}
                      color={colorMode === "light" ? "gray.800" : "gray.300"}
                    >
                      {project.description.map((d: any) => (
                        <ListItem>
                          <ListIcon
                            as={MdSettings}
                            color={
                              colorMode !== "light" ? "green.500" : "pink.500"
                            }
                          />
                          {d.desc}
                        </ListItem>
                      ))}
                    </List>
                    <Flex
                      justifyContent={[
                        "center",
                        "center",
                        "center",
                        "start",
                        "start",
                      ]}
                    >
                      <Button
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        colorScheme="blue"
                        my={4}
                        ml={2}
                        p={6}
                      >
                        View Project
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
                <Box
                  w={[
                    index !== 0 ? "100%" : "100%",
                    index !== 0 ? "100%" : "100%",
                    index !== 0 ? "100%" : "55%",
                    index !== 0 ? "50%" : "50%",
                    index !== 0 ? "50%" : "50%",
                  ]}
                  // p={[5, 5, 5, 0]}
                  onClick={() => handleModal(index)}
                  cursor={"pointer"}
                >
                  <Swiper
                    slidesPerView={
                      index !== 0 ? 1 : window.innerWidth < 786 ? 1 : 4
                    }
                    spaceBetween={7}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    style={{
                      zIndex: 10,
                      padding: 0,
                    }}
                  >
                    {project.slides2.map((slide: any) => (
                      <SwiperSlide>
                        <Img
                          src={slide.img}
                          alt={project.title}
                          objectFit={"cover"}
                          // rounded="md"
                          w={[
                            index !== 0 ? "100%" : "65%",
                            index !== 0 ? "100%" : "65%",
                            index !== 0 ? "100%" : "55%",
                            index !== 0 ? "100%" : "100%",
                          ]}
                          // h={index !== 0 ? "100%" : 490}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
                {/* </Box> */}
              </Flex>
            </Box>
          ))}
        </Box>

        <VStack visibility={["hidden", "hidden", "hidden", "hidden", "hidden"]}>
          <Text textAlign={"center"} fontSize={"xl"}>
            Please visit my Github repository for more Projects
          </Text>
          <Button colorScheme="yellow" mx={12}>
            Github Repo
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Projects;
