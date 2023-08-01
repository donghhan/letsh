import styled from "styled-components";

interface IErrorMessage {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: IErrorMessage) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}

const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 0.8rem;
  margin-bottom: 0.5em;
`;
