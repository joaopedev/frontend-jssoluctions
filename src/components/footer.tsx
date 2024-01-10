import { Box, Container, Stack, Text } from "@chakra-ui/react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Footer: React.FC = () => {
  return (
    <Box mt={-10}>
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
      <Text>© {getCurrentYear()} JS-Soluctions. All rights reserved.</Text>      </Container>
    </Box>
  );
};

export default Footer;
