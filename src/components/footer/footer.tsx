import React from 'react';
import {
    Box,
    Flex,
    Text,
    Link,
    Stack,
    Icon,
    Divider,
    Image,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box backgroundColor={"teal.700"} color="white.100">
            <Box py={10} px={{ base: 4, md: 8 }}>
                <Box w="60%" mx="auto">
                    <Divider orientation="horizontal" />
                </Box>
            </Box>

            <Box px={{ base: 4, md: 8 }}>
                <Flex justify="center" align="center" mb={6}>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                        align={{ base: 'flex-start', md: 'flex-start' }}
                        mb={4}
                        maxW="60%"  // Centered content width
                        w="100%"
                        mx="auto"
                    >
                        <Stack spacing={2}>
                            <Box>
                                <Image
                                    src="/logoLight.png"
                                    alt="AIHire Logo"
                                    h={{ base: '45px', sm: '35px', lg: '45px' }}
                                />
                            </Box>

                        </Stack>

                        <Stack spacing={2}>
                            <Text fontWeight="bold" fontSize="lg">
                                Contact Us
                            </Text>
                            <Flex align="center">
                                <PhoneIcon mr={2} /> <Text>+1 (800) 555-1234</Text>
                            </Flex>
                            <Flex align="center">
                                <EmailIcon mr={2} /> <Text>support@tutorfinder.com</Text>
                            </Flex>
                        </Stack>

                        <Stack spacing={2}>
                            <Text fontWeight="bold" fontSize="lg">
                                Quick Links
                            </Text>
                            <Link href="/about">About Us</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/contact">Contact</Link>
                        </Stack>

                        <Stack spacing={2}>
                            <Text fontWeight="bold" fontSize="lg">
                                Follow Us
                            </Text>
                            <Flex gap={3}>
                                <Link href="https://facebook.com" isExternal>
                                    <Icon as={FaFacebook} boxSize={5} />
                                </Link>
                                <Link href="https://twitter.com" isExternal>
                                    <Icon as={FaTwitter} boxSize={5} />
                                </Link>
                                <Link href="https://instagram.com" isExternal>
                                    <Icon as={FaInstagram} boxSize={5} />
                                </Link>
                            </Flex>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            <Box py={4} px={{ base: 4, md: 12 }} textAlign="center">

                <Text textAlign="center" fontSize="sm">
                    © {new Date().getFullYear()} Deskie. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
