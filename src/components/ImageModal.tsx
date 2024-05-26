import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Navigation, Pagination } from "swiper";
import { Box, Button, Center, Flex, Img, useColorMode } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const ImageModal = ({ isOpen, onClose, project, id }: any) => {
  console.log("🚀 ~ ImageModal ~ id:", id);
  const { colorMode } = useColorMode();

  const handleModalClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <Center
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(3px)"
      bg={"rgba(0, 0, 0, 0.1)"}
      opacity={isOpen ? 1 : 0}
      pointerEvents={isOpen ? "auto" : "none"}
      transition="opacity 150ms, pointer-events 300ms"
      onClick={handleModalClick}
      className="modal-overlay"
      zIndex={98}
    >
      <Box
        position="relative"
        w={["97%", "97%", "97%", "87%", "87%"]}
        maxH={"80%"}
      >
        <Swiper
          slidesPerView={id === 3 ? 4 : id === 4 ? 2 : 1}
          spaceBetween={10}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex
              justify="center"
              alignItems="center"
              rounded="xl"
              bgGradient="linear(to-b, tealLight, blue.300)"
            >
              <ReactPlayer
                url={project.video}
                height={"80vh"}
                width="100%"
                controls={true}
                bgColor={"#0f0f0f0f"}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </Flex>
          </SwiperSlide>
          {project.slides2.map((pet: any, id: any) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={id}
            >
              <Flex
                justify="center"
                alignItems="center"
                rounded="xl"
                bgGradient="linear(to-b, tealLight, blue.300)"
              >
                <Img src={pet.img} alt="pet" rounded="lg" maxH={"80vh"} />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          position="absolute"
          transform="scale(1)"
          top="-12"
          right="-0"
          bg="white"
          borderWidth="1px"
          borderColor="slate.400"
          zIndex="50"
          transition="all 500ms"
          rounded="full"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            id="close"
          >
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </Button>
      </Box>
    </Center>
  );
};

export default ImageModal;
