import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import LoginForm from "../components/loginForm";
import { AuthProvider } from "../context/authContext";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Footer from "../components/footer";

export const Login: React.FC = () => {
  const boxWidth = useBreakpointValue({ base: "90%", md: "70vw", lg: "60vw" });

  return (
    <Box height="95vh">
      <ColorModeSwitcher m={3}/>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100%"
        mt={-10}
      >
        
        <VStack spacing={12}>
          <Box boxShadow="dark-lg" width={boxWidth} p={15}>
            <AuthProvider>
              <LoginForm />
            </AuthProvider>
          </Box>
        </VStack>
      </Flex>
      <Footer/>
    </Box>
  );
};

export default Login;
