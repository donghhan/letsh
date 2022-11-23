import React from "react";
import styled from "@emotion/styled";
import { Button, Text, Box } from "@chakra-ui/react";

const HeroSection = styled.section`
  margin-top: 10em;

  .intro {
    .title {
      position: relative;
      height: fit-content;
    }

    .sub-title {
      margin-top: 5em;
      margin-bottom: 1.5em;
      font-size: 1.25rem;
      font-weight: semibold;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <div className="intro">
        <div className="title">
          <Text fontSize="2.5rem" fontWeight="semibold">
            Start Living
          </Text>
          <Text
            fontSize="7rem"
            fontWeight="extrabold"
            fontFamily="'Lexend Deca', sans-serif"
            letterSpacing="5px"
            lineHeight="5rem"
          >
            Move On
          </Text>
          <Text
            position="absolute"
            bottom="-70px"
            left={5}
            fontFamily="'Cookie', cursive"
            fontSize="5rem"
            className="text-signature-color"
          >
            Find your living space
          </Text>
        </div>
        <div className="sub-title">
          <Text>Find and Rent out Room, Flat,</Text>
          <Text>Apartments & Parking Spaces for Rent</Text>
        </div>
        <Button bg="orange.500" color="white" width="180px" height="50px">
          Book now
        </Button>
      </div>
    </HeroSection>
  );
}
