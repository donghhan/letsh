import { Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ITitle {
  mainTitlePrefix?: string;
  mainTitle: string;
}

const SimpleMainTitle = styled.h1`
  font-family: inherit;
  font-size: 3rem;
  font-weight: bold;
`;

export function Title({ mainTitlePrefix, mainTitle }: ITitle) {
  return (
    <Flex as="div" direction="column" position="relative">
      <Text
        as="span"
        fontSize={{
          base: "1.75rem",
          sm: "2.5rem",
          md: "3rem",
          xl: "3rem",
          "2xl": "3rem",
        }}
        fontWeight="bold"
        lineHeight="0.5em"
      >
        {mainTitlePrefix}
      </Text>
      <Text
        as="h1"
        fontFamily="'Russo One', sans-serif"
        fontSize={{
          base: "3.5rem",
          sm: "4rem",
          md: "6rem",
          xl: "6rem",
          "2xl": "6rem",
        }}
      >
        {mainTitle}
      </Text>
      <Text
        color="orange.400"
        fontFamily="'Cookie', cursive"
        fontSize={{
          base: "2rem",
          sm: "2rem",
          md: "3.5rem",
          xl: "3.5rem",
          "2xl": "3.5rem",
        }}
        position="absolute"
        top={{
          base: "50%",
          sm: "55%",
          md: "50%",
          xl: "80px",
          "2xl": "80px",
        }}
        left={{
          base: "5%",
          sm: "5%",
          md: "5%",
          xl: "40px",
          "2xl": "40px",
        }}
      >
        Find your living space
      </Text>
    </Flex>
  );
}

export function SimpleTitle({ mainTitle }: ITitle) {
  return (
    <Flex as="div" direction="column" position="relative">
      <SimpleMainTitle>{mainTitle}</SimpleMainTitle>
    </Flex>
  );
}
