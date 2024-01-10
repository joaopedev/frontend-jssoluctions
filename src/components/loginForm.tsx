import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = {
      email: "admin@vix.com.br",
      password: "admin",
    };

    if (email === mockUser.email && password === mockUser.password) {
      login(email, password);
      navigate("/home");
    } else {
      setLoginError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { state: { email } });
    }
  }, [isAuthenticated, navigate, email]);

  return (
    <Box p={6} rounded="md">
      <VStack>
        <FormControl onSubmit={handleSubmit} justifyContent="space-between">
          <VStack></VStack>
          <VStack>
            <FormLabel mt={8} mb={5}>
              Enter the email used for the purchase!
            </FormLabel>
          </VStack>
          <VStack>
            <Input
              mt={5}
              type="email"
              placeholder="Type your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor={loginError ? "red" : "gray.300"}
            />
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderColor={loginError ? "red" : "gray.300"}
            />
          </VStack>
          {loginError && <Text color="red">Credenciais inválidas</Text>}
          <VStack>
            <Button
              type="submit"
              marginTop={6}
              colorScheme='gray'
              onClick={handleLogin}
            >
              Login
            </Button>
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default LoginForm;
