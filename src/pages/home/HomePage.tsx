import styled from "styled-components";
import bgImage from "../../assets/background.jpg";

const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export default function HomePage() {
  return (
    <HomeSection>
      <BackgroundWrapper></BackgroundWrapper>
    </HomeSection>
  );
}
