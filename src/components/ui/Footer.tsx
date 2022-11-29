import { Box, Container, HStack, Text, Flex, Link } from "@chakra-ui/react";
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
        <Link>About Us</Link>
        <Link>Reviews</Link>
        <Link>Become a host</Link>
        <Link>Find Roommate</Link>
      </Flex>
      <Flex flexDirection="column" justify="space-between" h="100%">
        <Link>Rooms</Link>
        <Link>Houses</Link>
        <Link>Find a hotel</Link>
        <Link>Transportation</Link>
        <Link>Parking</Link>
      </Flex>
      <Flex flexDirection="column" justify="space-between" h="100%">
        <Link>info@letsh.com</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms & Conditions</Link>
        <HStack fontSize="2rem">
          <Link>
            <AiFillInstagram />
          </Link>
          <Link>
            <AiFillFacebook />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
