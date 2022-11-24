import React from "react";
import styled from "@emotion/styled";
import { Button, Text, Box } from "@chakra-ui/react";
import heroImage from "./hero_image.png";

const HeroSection = styled.section`
  margin-top: 10em;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const IntroSection = styled.div`
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
`;

const ImageSection = styled.div`
  position: relative;
`;

export default function Hero() {
  return (
    <HeroSection>
      <IntroSection>
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
            bottom="-60px"
            left={5}
            fontFamily="'Cookie', cursive"
            fontSize="5rem"
            className="text-signature-color"
            w={600}
            color="orange.400"
          >
            Find your living space
          </Text>
        </div>
        <div className="sub-title">
          <Text>Find and Rent out Room, Flat,</Text>
          <Text>Apartments & Parking Spaces for Rent</Text>
        </div>
        <Button
          bg="orange.500"
          color="white"
          width="180px"
          height="50px"
          _hover={{ bg: "orange.400" }}
          _active={{ bg: "orange.700" }}
          boxShadow="0px 8px 15px rgba(0, 0, 0, .3)"
        >
          Book now
        </Button>
      </IntroSection>
      <ImageSection>
        <div
          className="box1"
          style={{
            width: "300px",
            height: "500px",
            borderTopLeftRadius: "200px",
            borderBottomRightRadius: "200px",
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "20% 20%",
            position: "absolute",
            right: "320px",
          }}
        ></div>
        <div
          className="box2"
          style={{
            width: "300px",
            height: "300px",
            borderTopLeftRadius: "150px",
            borderBottomRightRadius: "150px",
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "50% 40%",
            position: "absolute",
            right: 0,
          }}
        ></div>
        <div
          className="box3"
          style={{
            width: "300px",
            height: "500px",
            borderTopLeftRadius: "200px",
            borderBottomRightRadius: "200px",
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "75% 85%",
            position: "absolute",
            right: 0,
            top: "320px",
          }}
        ></div>
      </ImageSection>
    </HeroSection>
  );
}

// style={{
//   backgroundImage: `url(${heroImage})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   width: "800px",
//   height: "800px",
// }}
