import { HStack, Text, Flex, Link as StyledLink } from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-evenly"
      h="200px"
      maxH="200px"
      mb="50px"
    >
      <Flex
        maxW="250px"
        textAlign="left"
        flexDirection="column"
        justify="space-between"
      >
        <Text
          as="span"
          fontFamily="'Rubik Distressed', cursive"
          fontSize="3rem"
          textAlign="left"
          mb="30px"
        >
          Let'sh
        </Text>
        <Text lineHeight="2rem">
          Find and Rent Out Room, Flat, Apartments, Transportations & Parking
          Spaces for Monthly Rent
        </Text>
      </Flex>
      <Flex flexDirection="column" justify="space-between" h="100%">
        <StyledLink>About Us</StyledLink>
        <StyledLink>Reviews</StyledLink>
        <StyledLink>Become a host</StyledLink>
        <StyledLink>Find Roommate</StyledLink>
      </Flex>
      <Flex flexDirection="column" justify="space-between" h="100%">
        <StyledLink>Rooms</StyledLink>
        <StyledLink>Houses</StyledLink>
        <StyledLink>Find a hotel</StyledLink>
        <StyledLink>Transportation</StyledLink>
        <StyledLink>Parking</StyledLink>
      </Flex>
      <Flex flexDirection="column" justify="space-between" h="100%">
        <StyledLink>info@letsh.com</StyledLink>
        <StyledLink>Privacy Policy</StyledLink>
        <StyledLink>Terms & Conditions</StyledLink>
        <HStack fontSize="2rem">
          <StyledLink>
            <AiFillInstagram />
          </StyledLink>
          <StyledLink>
            <AiFillFacebook />
          </StyledLink>
        </HStack>
      </Flex>
    </Flex>
  );
}
