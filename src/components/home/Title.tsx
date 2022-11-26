import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ITitle {
  mainTitlePrefix?: string;
  mainTitle: string;
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainTitlePrefix = styled.span`
  font-size: 3rem;
  font-weight: bold;
  line-height: 0.5em;
`;

const MainTitle = styled.h1`
  font-family: "Russo One", sans-serif;
  font-size: 6rem;
`;

const SimpleMainTitle = styled.h1`
  font-family: inherit;
  font-size: 3rem;
  font-weight: bold;
`;

const DecorationText = styled(Text)`
  font-family: "Cookie", cursive;
  font-size: 3.5rem;
  position: absolute;
  top: 80px;
  left: 40px;
`;

export function Title({ mainTitlePrefix, mainTitle }: ITitle) {
  return (
    <TitleContainer>
      <MainTitlePrefix>{mainTitlePrefix}</MainTitlePrefix>
      <MainTitle>{mainTitle}</MainTitle>
      <DecorationText color="orange.400">Find your living space</DecorationText>
    </TitleContainer>
  );
}

export function SimpleTitle({ mainTitle }: ITitle) {
  return (
    <TitleContainer>
      <SimpleMainTitle>{mainTitle}</SimpleMainTitle>
    </TitleContainer>
  );
}
