import styled from "@emotion/styled";
import {
  Text,
  Container,
  Button,
  Flex,
  Image,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Title, SimpleTitle } from "../components/home/Title";
import HeroImage from "../components/home/HeroImage";
import InfoGrid from "../components/home/InfoGrid";
import * as freelancer from "../assets/images/freelancer.svg";
import WhyChooseUsFlexItems from "../components/home/WhyChooseUs";
import * as woman from "../assets/images/woman.svg";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Flex
        as="section"
        width="100%"
        minH="100vh"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
          "2xl": "row",
        }}
        justify="space-between"
        align="center"
        px={{
          base: "2em",
          xl: "7em",
          "2xl": "10em",
        }}
        mt={{
          base: "150px",
          sm: "150px",
          md: "150px",
          lg: "150px",
          xl: "100px",
          "2xl": "100px",
        }}
        position="relative"
      >
        <Flex direction="column">
          <Title mainTitlePrefix="Start Living" mainTitle="Move On" />
          <Text
            maxW={{ sm: "300px", md: "380px", xl: "400px", "2xl": "400px" }}
            fontSize={{ md: "1.125rem", xl: "1.25rem", "2xl": "1.25rem" }}
          >
            Find and Rent Out Room, Flat, Aprtments, Transportations & Parking
            Spaces
          </Text>
          <Button
            width="180px"
            height="50px"
            marginTop="8"
            color="white"
            bgColor="orange.500"
            _hover={{ bg: "orange.400" }}
            _active={{ bg: "orange.700" }}
            boxShadow="0px 8px 15px rgba(0, 0, 0, .3)"
          >
            Book now
          </Button>
        </Flex>
        <HeroImage />
      </Flex>

      {/* Info Grid Section */}
      <Flex
        width="100%"
        as="section"
        direction="column"
        align={{
          base: "center",
          md: "center",
        }}
        p={{
          base: "0 3em",
        }}
        mt={{
          base: ".5em",
          sm: "5em",
          md: "150px",
        }}
      >
        <Box>
          <SimpleTitle mainTitle="New suites for you" />
          <Text>
            Introducting an entirely new way to share your own experience with
            your favourite neightborhoods in Thailand
          </Text>
        </Box>
        <InfoGrid />
      </Flex>

      {/* How Does It Works Section */}
      <Flex
        as="section"
        bgColor="orange.400"
        p={{
          base: "2em",
        }}
        m={{
          base: "50px 0",
        }}
        borderTopRightRadius={{
          base: "50px",
          sm: "50px",
        }}
        borderBottomLeftRadius={{
          base: "50px",
          sm: "50px",
        }}
        justify="center"
        display={{
          base: "column",
          sm: "column",
        }}
      >
        <Container width={{ base: "70%" }}>
          <Image src={freelancer.default} alt="freelancer" />
        </Container>
        <Flex as="div" direction="column" align="center">
          <Text
            fontWeight="bold"
            fontSize={{ base: "2rem", "2xl": "3.5rem" }}
            my="20px"
            color="black"
          >
            How does it works
          </Text>
          <Text
            color="black"
            lineHeight="2rem"
            fontSize={{ base: "1rem", "2xl": "1.115rem" }}
            maxWidth={{ base: "300px", sm: "300px" }}
          >
            Rent is a free you pay in exchange for the use of someone's
            property. Apartment rent gives you theright to occupy a residential
            apartment and the terms of your occupancy are dsecribed in the
            lease. Some of the things a lease covers are the amount of rent,
            when it's due and fees or penalties for late payment as well as any
            tenant restrictions.
          </Text>
        </Flex>
      </Flex>

      {/* Why People Choose Us Section */}
      <Flex px="10em" w="100%" justify="space-around" my="5em">
        <Box
          bgColor="orange.400"
          w="400px"
          h="500px"
          paddingInlineStart={0}
          paddingInlineEnd={0}
          margin={0}
          borderTopLeftRadius="50px"
          borderBottomRightRadius="50px"
          position="relative"
        >
          <Box position="absolute" top="50px" right="-200px" width="500px">
            <Image src={woman.default} alt="selfie" />
          </Box>
        </Box>
        <WhyChooseUsFlexItems />
      </Flex>
    </main>
  );
}
