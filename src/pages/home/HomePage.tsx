import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import bgImage from "../../assets/background.jpg";
import BookingBar from "../../components/home/BookingBar/BookingBar";
import RoomCarousel from "../../components/home/RoomCarousel/RoomCarousel";
import TopPlaces from "../../components/home/TopPlaces/TopPlaces";
import { ResponsivePadding } from "../../styles/common";

export default function HomePage() {
  return (
    <>
      <HomeSection>
        <BackgroundWrapper></BackgroundWrapper>
        <BookingBar />
      </HomeSection>
      <LiveAnywhereSection>
        <div className="title-wrapper">
          <Title>Live Anywhere</Title>
          <Subtext>
            It's time to make your dreams an everyday reality. These
            highly-crafted homes and properties promise modern and historic
            architect-designed elegance in some of the world's most coveted
            locations.
          </Subtext>
        </div>
        <RoomCarousel />
      </LiveAnywhereSection>
      <TopPlacesSection>
        <div className="title-wrapper-horizontal">
          <Title>Top Places</Title>
          <Subtext>
            Design-conscious hotels grounded in luxry, craft and sustainability.
            These accomodations will elevate your experience of travel, whether
            you're seeking a recharging retreat, a creative escape or an
            adventure in nature.
          </Subtext>
        </div>
        <TopPlaces />
      </TopPlacesSection>
    </>
  );
}

const SectionBaseStyle = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding-left: 5em;
    padding-right: 5em;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const HomeSection = styled.section`
  ${SectionBaseStyle}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

const LiveAnywhereSection = styled(motion.section)`
  ${SectionBaseStyle}
  ${ResponsivePadding}
  background-color: ${({ theme }) => theme.color.beige};
  display: block;

  .title-wrapper {
    max-width: 650px;

    ${({ theme }) => theme.breakpoints.between("xs", "md")} {
      max-width: 450px;
      margin: 0 auto;
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.3em;

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    font-size: 3rem;
    text-align: center;
  }
`;

const Subtext = styled.p`
  font-size: 1rem;
  line-height: 2;

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const TopPlacesSection = styled.section`
  ${SectionBaseStyle}

  .title-wrapper-horizontal {
    display: flex;

    p {
      max-width: 700px;
      margin: 0 auto;
    }
  }

  ${({ theme }) => theme.breakpoints.only("md")} {
    .title-wrapper-horizontal {
      flex-direction: column;
      max-width: 650px;
    }
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    .title-wrapper-horizontal {
      flex-direction: column;
      align-items: center;

      p {
        max-width: 450px;
      }
    }
  }
`;
