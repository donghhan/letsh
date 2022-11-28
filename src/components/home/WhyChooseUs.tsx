import { Flex, Box, Text, Container, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GiTalk } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { Title } from "./Title";

const items = [
  {
    id: "review",
    icon: <FaHeadphonesAlt />,
    title: "Reviews",
    text: "Only guests who actually complete their stay with Let'sh are given the option to leave a review.",
  },
  {
    id: "support",
    icon: <GiTalk />,
    title: "24/7 Support",
    text: "Let'sh's call centers are covered around the clock, even on bank holidays.",
  },
  {
    id: "rooms",
    icon: <BsListCheck />,
    title: "Rooms",
    text: "Having a clean, comfortable and friendly place, we personally handpick every accomodation.",
  },
  {
    id: "payments",
    icon: <MdPayments />,
    title: "Payment",
    text: "Pay using a Credit Card (Visa, Master card, Visa electron, Union pay, American express, Mobile Money Transfers.",
  },
];

const StyledIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 1.125rem;
`;

export default function WhyChooseUsFlexItems() {
  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" maxWidth="550px">
      <Title mainTitlePrefix="Why people" mainTitle="Choose us" />
      {items.map(({ id, icon, title, text }) => {
        return (
          <Flex key={id} marginBottom="20px">
            <Box>
              <StyledIcon
                bgColor={colorMode === "light" ? "gray.300" : "black"}
              >
                {icon}
              </StyledIcon>
            </Box>
            <Box marginLeft="30px">
              <Text marginBottom="10px" fontWeight="bold" fontSize="1.125rem">
                {title}
              </Text>
              <Text>{text}</Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}
