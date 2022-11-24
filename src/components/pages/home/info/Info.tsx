import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import * as car from "./car.png";
import * as house from "./house.png";
import * as parking from "./parking.png";
import * as room from "./room.png";
import * as hotel from "./hotel.png";

export default function Info() {
  return (
    <>
      <Box marginBottom="40px">
        <Text fontWeight="semibold" fontSize="3.5rem" marginBottom=".5em">
          New suites for you
        </Text>
        <Text letterSpacing="1px">
          Introducing an entirely new way to stay in your <br /> favourite
          neighborhoods in Thailand
        </Text>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} h="300px">
        <GridItem w="100%" h="100%">
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              src={room.default}
              width="100%"
              height="100%"
              objectFit="cover"
              borderTopLeftRadius="40%"
              borderBottomRightRadius="40%"
              maxHeight="300px"
              transition="transform .2s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Text textAlign="center" marginTop="15px" fontWeight="bold">
            Rooms
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              src={house.default}
              width="100%"
              height="100%"
              objectFit="cover"
              borderTopLeftRadius="40%"
              borderBottomRightRadius="40%"
              maxHeight="300px"
              transition="transform .2s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Text textAlign="center" marginTop="15px" fontWeight="bold">
            Houses
          </Text>
        </GridItem>
        <GridItem>
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              src={hotel.default}
              objectFit="cover"
              borderTopLeftRadius="40%"
              borderBottomRightRadius="40%"
              maxHeight="300px"
              transition="transform .2s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Text textAlign="center" marginTop="15px" fontWeight="bold">
            Hotel Apartments
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              src={parking.default}
              width="100%"
              height="100%"
              objectFit="cover"
              borderTopLeftRadius="40%"
              borderBottomRightRadius="40%"
              maxHeight="300px"
              transition="transform .2s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Text textAlign="center" marginTop="15px" fontWeight="bold">
            Parking
          </Text>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Box width="100%" height="100%" overflow="hidden">
            <Image
              src={car.default}
              width="100%"
              height="100%"
              objectFit="cover"
              borderTopLeftRadius="40%"
              borderBottomRightRadius="40%"
              maxHeight="300px"
              transition="transform .2s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Text textAlign="center" marginTop="15px" fontWeight="bold">
            Transporations
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}
