import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <Box></Box>
    </ChakraProvider>
  );
};

export default Home;
