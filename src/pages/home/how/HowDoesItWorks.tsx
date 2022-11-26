import { Container, Text, Flex, Image, Box } from "@chakra-ui/react";
import * as freelancer from "./freelancer.svg";

export default function HowDoesItWorks() {
  return (
    <Flex
      mt="200px"
      py="100px"
      bgColor="orange.400"
      borderTopRightRadius="60px"
      borderBottomLeftRadius="60px"
      justifyContent="center"
    >
      <Container>
        <Image src={freelancer.default} alt="freelancer" />
      </Container>
      <Container>
        <Box>
          <Text fontWeight="bold" fontSize="3.5rem" mb="20px" color="black">
            How does it works
          </Text>
          <Text color="black" lineHeight="2rem" fontSize="1.115rem">
            Rent is a free you pay in exchange for the use of someone's
            property. Apartment rent gives you theright to occupy a residential
            apartment and the terms of your occupancy are dsecribed in the
            lease. Some of the things a lease covers are the amount of rent,
            when it's due and fees or penalties for late payment as well as any
            tenant restrictions.
          </Text>
        </Box>
      </Container>
    </Flex>
  );
}
