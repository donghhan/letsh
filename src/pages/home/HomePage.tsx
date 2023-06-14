import styled from "styled-components";
import bgImage from "../../assets/background.jpg";
import BookingBar from "../../components/home/BookingBar/BookingBar";

export default function HomePage() {
  return (
    <HomeSection>
      <BackgroundWrapper></BackgroundWrapper>
      <BookingBar />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
