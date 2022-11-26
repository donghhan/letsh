import { Box, Text, Container, Image } from "@chakra-ui/react";
import * as workingAtHome from "./working_at_home.png";

export default function RegisterNow() {
  return (
    <Container>
      <Box></Box>
      <Box>
        <Image src={workingAtHome.default} alt="working-at-home" />
      </Box>
    </Container>
  );
}
