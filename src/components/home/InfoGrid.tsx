import { Grid, GridItem, Image, Box, Text } from "@chakra-ui/react";
import * as car from "../../assets/images/car.png";
import * as house from "../../assets/images/house.png";
import * as parking from "../../assets/images/parking.png";
import * as room from "../../assets/images/room.png";
import * as hotel from "../../assets/images/hotel.png";

const items = [
  {
    id: "room",
    src: room,
    caption: "Rooms",
  },
  {
    id: "house",
    src: house,
    caption: "Houses",
  },
  {
    id: "hotel",
    src: hotel,
    caption: "Hotel Apartments",
  },
  {
    id: "car",
    src: car,
    caption: "Transportations",
  },
  {
    id: "parking",
    src: parking,
    caption: "Parking",
  },
];

export default function InfoGrid() {
  return (
    <Grid
      templateColumns={{
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 400px)",
        xl: "repeat(5, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      gap={6}
      width={{
        "2xl": "100%",
      }}
      height={{
        xl: "300px",
        "2xl": "100%",
      }}
      minHeight={{
        "2xl": "300px",
      }}
      marginTop="50px"
    >
      {items.map(({ id, src, caption }) => {
        return (
          <GridItem key={id} width="100%" height="100%">
            <Box width="100%" height="100%" overflow="hidden">
              <Image
                src={src.default}
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
              {caption}
            </Text>
          </GridItem>
        );
      })}
    </Grid>
  );
}
