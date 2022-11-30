import styled from "@emotion/styled";
import { Image, Container, Flex, Box } from "@chakra-ui/react";
import { GiTreeBranch } from "react-icons/gi";
import heroImage from "../../assets/images/hero_image.png";

const StyledIconBackground = styled(GiTreeBranch)``;

export default function HeroImage() {
  return (
    <Flex
      as="div"
      maxW="1000px"
      minH="600px"
      position="relative"
      gap="20px"
      mt={{ md: "100px" }}
    >
      <Box
        position="absolute"
        left={{
          md: "-90px",
          xl: "-120px",
          "2xl": "-120px",
        }}
        zIndex="-10"
        fontSize={{
          md: "7rem",
          xl: "10rem",
          "2xl": "10rem",
        }}
        transform="rotate(180deg)"
      >
        <StyledIconBackground />
      </Box>
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition="20% 20%"
        backgroundRepeat="no-repeat"
        width={{
          md: "300px",
          xl: "300px",
          "2xl": "300px",
        }}
        height={{
          md: "500px",
          xl: "500px",
          "2xl": "500px",
        }}
        borderTopLeftRadius="150px"
        borderBottomRightRadius="150px"
      />
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition="50% 40%"
        backgroundRepeat="no-repeat"
        width={{
          md: "300px",
          xl: "300px",
          "2xl": "300px",
        }}
        height="300px"
        borderTopLeftRadius="150px"
        borderBottomRightRadius="150px"
      />
      <Box
        backgroundImage={`url(${heroImage})`}
        backgroundPosition="75% 85%"
        backgroundRepeat="no-repeat"
        width={{
          xl: "300px",
          "2xl": "300px",
        }}
        height="500px"
        borderTopLeftRadius="150px"
        borderBottomRightRadius="150px"
        position="absolute"
        right="20px"
        bottom="-220px"
      />
    </Flex>
  );
}
