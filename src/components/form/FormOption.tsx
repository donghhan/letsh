import styled from "styled-components";

interface IFormOption {
  titleText: string;
  children: React.ReactNode;
}

export default function FormOption({ titleText, children }: IFormOption) {
  return (
    <OptionWrapper>
      <StyledTitle>{titleText}</StyledTitle>
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
`;

const StyledTitle = styled.span`
  font-size: 1.25rem;
`;
