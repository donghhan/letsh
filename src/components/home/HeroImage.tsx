import styled from "@emotion/styled";
import { Image, Container, Flex, Box } from "@chakra-ui/react";
import { GiTreeBranch } from "react-icons/gi";
import heroImage from "../../assets/images/hero_image.png";

export default function HeroImage() {
  return (
    <Flex
      as="div"
      maxW="1000px"
      minH="600px"
      position="relative"
      gap="20px"
      mt={{ base: "50px", sm: "50px", md: "50px" }}
    >
      <Box
        position="absolute"
        left={{
          base: "-20px",
          sm: "-40px",
          md: "-90px",
          xl: "-120px",
          "2xl": "-120px",
        }}
        zIndex="-10"
        fontSize={{
          base: "3rem",
          sm: "5.5rem",
          md: "7rem",
          xl: "10rem",
          "2xl": "10rem",
        }}
        transform="rotate(180deg)"
      >
        <GiTreeBranch />
      </Box>
      {/* First Box */}
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition="30% 30%"
        backgroundRepeat="no-repeat"
        width={{
          base: "150px",
          sm: "200px",
          md: "250px",
          xl: "300px",
          "2xl": "300px",
        }}
        height={{
          base: "300px",
          sm: "400px",
          md: "500px",
          xl: "500px",
          "2xl": "500px",
        }}
        borderTopLeftRadius={{
          base: "100px",
          sm: "150px",
          md: "150px",
          xl: "150px",
          "2xl": "150px",
        }}
        borderBottomRightRadius={{
          base: "100px",
          sm: "150px",
          md: "150px",
          xl: "150px",
          "2xl": "150px",
        }}
      />
      {/* Second Box */}
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition="50% 40%"
        backgroundRepeat="no-repeat"
        width={{
          base: "150px",
          sm: "200px",
          md: "250px",
          xl: "300px",
          "2xl": "300px",
        }}
        height={{
          base: "150px",
          sm: "230px",
          md: "250px",
          "2xl": "300px",
        }}
        borderTopLeftRadius={{
          base: "80px",
          sm: "100px",
          "2xl": "100px",
        }}
        borderBottomRightRadius={{
          base: "80px",
          sm: "100px",
          "2xl": "100px",
        }}
      />
      {/* Third Box */}
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition={{
          base: "75% 60%",
          sm: "75% 60%",
          md: "80% 75%",
          xl: "75% 75%",
          "2xl": "75% 70%",
        }}
        backgroundRepeat="no-repeat"
        width={{
          base: "150px",
          sm: "200px",
          md: "250px",
          xl: "300px",
          "2xl": "300px",
        }}
        height={{
          base: "250px",
          sm: "350px",
          md: "400px",
          xl: "450px",
          "2xl": "450px",
        }}
        borderTopLeftRadius={{
          base: "100px",
          sm: "130px",
          md: "130px",
          xl: "180px",
          "2xl": "180px",
        }}
        borderBottomRightRadius={{
          base: "100px",
          sm: "130px",
          md: "130px",
          xl: "180px",
          "2xl": "180px",
        }}
        position="absolute"
        right={{
          base: "0",
          sm: "0",
          md: "10px",
          xl: "10px",
          "2xl": "10px",
        }}
        bottom={{
          base: "190px",
          sm: "0",
          md: "-100px",
          xl: "-150px",
          "2xl": "-170px",
        }}
      />
    </Flex>
  );
}
