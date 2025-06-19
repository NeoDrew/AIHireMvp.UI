import React, { } from 'react';
import {
    Box,
    Text,
    VStack,
    Flex,
    Button,
    HStack,
} from '@chakra-ui/react';
import FadeInOnView from 'components/fadeInOnView/fadeInOnView';

const LandingScreen: React.FC = () => {
    return (
        <Box
            height="calc(100vh - 65px)"
            bgImage="url('/landingBG.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
        >
            {/* Dark overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.5)"
                zIndex={0}
            />

            {/* Content */}
            <Flex
                position="relative"
                zIndex={1}
                height="100%"
                align="center"
                justify="center"
                px={4}
            >
                <VStack spacing={6} maxW="600px" w="100%" color="white" textAlign="center">
                    <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
                        Find the Perfect Candidate
                    </Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }}>
                        Vetted professionals across industries, roles, and experience levels. Intelligent hiring starts here.
                    </Text>
                    <HStack spacing={3} justify="center" align="center" flexWrap="wrap">
                        <FadeInOnView delay={0} isInView={true}>
                            <Button backgroundColor="teal.300" size="md" color="gray.200" _hover={{ bg: 'teal.400' }}>
                                See Pricing
                            </Button>
                        </FadeInOnView>
                        <FadeInOnView delay={0.8} isInView={true}>
                            <Text fontSize="md" fontWeight="medium" color="gray.200">
                                or
                            </Text>
                        </FadeInOnView>
                        <FadeInOnView delay={1.6} isInView={true}>
                            <Button colorScheme="green" size="md">
                                Contact Us
                            </Button>
                        </FadeInOnView>
                    </HStack>
                </VStack>
            </Flex>

            {/* Decorative SVG wave */}
            <Box
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                overflow="hidden"
                lineHeight={0}
                zIndex={1}
                mb={-2}
            >
                <svg
                    viewBox="0 0 1440 60"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '50px', display: 'block' }}
                >
                    <path
                        d="M0,0 Q720,60 1440,0 L1440,60 L0,60 Z"
                        fill="var(--chakra-colors-white-100)"
                    />
                </svg>
            </Box>
        </Box>
    );
};

export default LandingScreen;