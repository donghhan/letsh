import styled from "styled-components";

interface IFormLayoutProp {
  children: React.ReactNode;
  bgimage: string;
}

export default function FormLayout({ children, bgimage }: IFormLayoutProp) {
  return (
    <FormSection>
      <FormWrapper>{children}</FormWrapper>
      <ThumbnailWrapper bgimage={bgimage}></ThumbnailWrapper>
    </FormSection>
  );
}

const FormSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 80px;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 50%;
  }
`;

const ThumbnailWrapper = styled.div<{ bgimage: string }>`
  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 50%;
    height: 100vh;
    background-image: ${(props) => `url(${props.bgimage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`;
