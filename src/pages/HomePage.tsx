import styled from "@emotion/styled";
import { Text, Container, Button, Flex, Image, Box } from "@chakra-ui/react";
import { Title, SimpleTitle } from "../components/home/Title";
import HeroImage from "../components/home/HeroImage";
import InfoGrid from "../components/home/InfoGrid";
import * as freelancer from "../assets/images/freelancer.svg";
import WhyChooseUsFlexItems from "../components/home/WhyChooseUs";
import { GiTreeBranch } from "react-icons/gi";
import * as woman from "../assets/images/woman.svg";

const CommonSection = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  padding: 0 10em;

  .text {
    font-size: 1.125rem;
    max-width: 600px;
    letter-spacing: 1px;
    line-height: 30px;
    margin-top: 30px;
  }
`;

const HeroSection = styled(CommonSection)`
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;

  .paragraph {
    display: flex;
    flex-direction: column;
  }
`;

const InfoGridSection = styled(CommonSection)`
  flex-direction: column;
  margin-bottom: 200px;
`;

const HowItWorksSection = styled(CommonSection)`
  margin-bottom: 200px;
`;

const WhyPeopleChooseUsSection = styled(CommonSection)`
  justify-content: space-around;

  .image-section {
    width: 400px;
    height: 500px;
  }
`;

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection>
        <div className="paragraph">
          <Title mainTitlePrefix="Start Living" mainTitle="Move On" />
          <div className="text">
            Find and Rent Out Room, Flat, Aprtments, Transportations & Parking
            Spaces
          </div>
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
        </div>
        <HeroImage />
      </HeroSection>

      {/* Info Grid Section */}
      <InfoGridSection id="info">
        <SimpleTitle mainTitle="New suites for you" />
        <p className="text">
          Introducting an entirely new way to share your own experience with
          your favourite neightborhoods in Thailand
        </p>
        <InfoGrid />
      </InfoGridSection>

      {/* How Does It Works Section */}
      <HowItWorksSection>
        <Flex
          width="100%"
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
                property. Apartment rent gives you theright to occupy a
                residential apartment and the terms of your occupancy are
                dsecribed in the lease. Some of the things a lease covers are
                the amount of rent, when it's due and fees or penalties for late
                payment as well as any tenant restrictions.
              </Text>
            </Box>
          </Container>
        </Flex>
      </HowItWorksSection>

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
