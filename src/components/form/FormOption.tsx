import styled from "styled-components";

interface IFormOption {
  value?: string;
}

export default function FormOption({ value }: IFormOption) {
  return (
    <OptionWrapper>
      <StyledSelect></StyledSelect>
    </OptionWrapper>
  );
}

const OptionWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  display: none;
`;
