import styled from "@emotion/styled";
import { GiTreeBranch } from "react-icons/gi";
import heroImage from "../../assets/images/hero_image.png";

const ImageWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  min-height: 600px;
  display: flex;
  gap: 20px;

  .image-box {
    width: 300px;
    background-repeat: no-repeat;
    position: relative;
  }

  .box1 {
    height: 500px;
    border-top-left-radius: 200px;
    border-bottom-right-radius: 200px;
    background-position: 20% 20%;
  }

  .box2 {
    height: 300px;
    border-top-left-radius: 150px;
    border-bottom-right-radius: 150px;
    background-position: 50% 40%;
  }

  .box3 {
    height: 500px;
    position: absolute;
    right: 0;
    bottom: -220px;
    border-top-left-radius: 200px;
    border-bottom-right-radius: 200px;
    background-position: 75% 85%;
  }
`;

const StyledIconBackground = styled(GiTreeBranch)`
  font-size: 10rem;
  transform: rotate(180deg);
  position: absolute;
  left: -100px;
`;

export default function HeroImage() {
  return (
    <ImageWrapper>
      <StyledIconBackground />
      <div
        className="image-box box1"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div
        className="image-box box2"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div
        className="image-box box3"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </ImageWrapper>
  );
}
