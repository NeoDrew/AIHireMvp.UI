import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        if (isLogin) {
            document.title = 'Log In - Deskie';
        } else {
            document.title = 'Register - Deskie';
        }
    }, [isLogin]);

    const bgGradient = useColorModeValue(
        'linear(to-r, teal.100, teal.300)',
        'linear(to-r, teal.600, teal.400)'
    );
    const cardBg = useColorModeValue('white.100', 'gray.800');
    const navigate = useNavigate();

    return (
        <Flex h="100vh" w="calc(100vw - 20px)" overflow="hidden" position="relative">
            {/* Back Button */}
            <IconButton
                icon={<ArrowBackIcon />}
                aria-label="Back"
                position="absolute"
                top={4}
                left={4}
                variant="ghost"
                color="gray.600"
                fontSize="2xl"
                onClick={() => navigate('/')}
            />

            {/* Left Panel (Info) */}
            <Flex
                flex={1}
                bgGradient={bgGradient}
                align="center"
                justify="center"
                color="white"
                p={8}
                display={{ base: 'none', md: 'flex' }}
            >
                <Box textAlign="center" maxW="sm">
                    <Heading size="2xl" mb={4}>Welcome to Deskie</Heading>
                    <Text fontSize="lg">
                        Smarter hiring for fast-moving teams. Log in or create an account to get started.
                    </Text>
                </Box>
            </Flex>

            {/* Right Panel (Form) */}
            <Flex flex={1} align="center" justify="center" bg={cardBg} p={8}>
                <Box w="full" maxW="md" position="relative">
                    <AnimatePresence mode="wait">
                        {isLogin ? (
                            <MotionBox
                                key="login"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Heading mb={6} color="teal.600">Log In</Heading>
                                <FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="you@example.com"
                                        />
                                    </FormControl>
                                    <FormControl mb={6}>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                        />
                                    </FormControl>
                                    <Button w="full" colorScheme="teal" mb={4} onClick={() => navigate('/dashboard')}>
                                        Log In
                                    </Button>
                                </FormControl>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Don't have an account?{' '}
                                    <Button
                                        variant="link"
                                        color="teal.500"
                                        onClick={() => setIsLogin(false)}
                                    >
                                        Register
                                    </Button>
                                </Text>
                            </MotionBox>
                        ) : (
                            <MotionBox
                                key="register"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Heading mb={6} color="teal.600">Register</Heading>
                                <FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input
                                            placeholder="Jane Doe"
                                        />
                                    </FormControl>
                                    <FormControl mb={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="you@example.com"
                                        />
                                    </FormControl>
                                    <FormControl mb={6}>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="Create a strong password"
                                        />
                                    </FormControl>
                                    <Button w="full" colorScheme="teal" mb={4} type="submit">
                                        Register
                                    </Button>
                                </FormControl>
                                <Text fontSize="sm" color="gray.600" textAlign="center">
                                    Already have an account?{' '}
                                    <Button
                                        variant="link"
                                        color="teal.500"
                                        onClick={() => setIsLogin(true)}
                                    >
                                        Log In
                                    </Button>
                                </Text>
                            </MotionBox>
                        )}
                    </AnimatePresence>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Login;
