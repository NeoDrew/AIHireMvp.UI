import React from 'react';
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Stack,
    VStack,
    HStack,
    Circle,
} from '@chakra-ui/react';
import FadeInOnView from 'components/fadeInOnView/fadeInOnView';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const steps = [
    'Define your job, ideal traits, and company culture',
    'Deskie sources candidates from LinkedIn, Indeed, Seek, and more',
    'We vet with custom questions, technical tasks, and culture-fit checks',
    'AI ranks candidates by 100s of metrics to find your perfect match',
    'Review top picks, compare strengths, and hire with confidence',
];

const HiringProcess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

    return (
        <Box bg="white.100" pb={{ base: 10, md: 20 }} pt={{ base: 14, md: 10 }} px={{ base: 4, md: 12 }}>
            <Flex align="center" justify="center">
                <Heading size="2xl" color="teal.600" mb={2}>The Deskie Process</Heading>
            </Flex>
            <Flex align="center" justify="center" mb={10}>
                <Text fontSize="lg" color="gray.600" maxW="3xl" align={"center"}>
                    The revolutionary hiring process that saves you time and money. From defining your ideal candidate to making the perfect hire, we handle it all.
                </Text>
            </Flex>

            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                gap={10}
            >
                <Box maxW={{ base: "70%", md: "30%" }}>
                    <Image
                        src="/hiringProcess.jpg"
                        alt="Hiring process illustration"
                        borderRadius="lg"
                        shadow="md"
                        width="100%"
                        height="auto"
                        objectFit="cover"
                    />
                </Box>

                <Box px={{ base: 4, md: 8 }} py={{ base: 8, md: 12 }}>
                    <Stack spacing={{ base: 8, md: 10 }}>
                        <VStack align="start" spacing={0} position="relative" ref={ref}>
                            {steps.map((step, index) => (
                                <HStack align="start" spacing={{ base: 4, md: 6 }} key={index}>
                                    <VStack spacing={0} align="center" position="relative">
                                        <Circle
                                            size={{ base: "10px", md: "14px", lg: "16px" }}
                                            bg="teal.400"
                                        />
                                        {index < steps.length - 1 && (
                                            <Box
                                                height={{ base: "50px", md: "70px", lg: "80px" }}
                                                width="2px"
                                                bg="teal.200"
                                            />
                                        )}
                                    </VStack>

                                    <FadeInOnView delay={index * 0.2} isInView={isInView}>
                                        <Text
                                            color="gray.700"
                                            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                                            lineHeight="tall"
                                            mt={{ base: -1.5, md: -1, lg: -3 }}
                                        >
                                            <strong>Step {index + 1}:</strong> {step}
                                        </Text>
                                    </FadeInOnView>
                                </HStack>
                            ))}
                        </VStack>
                    </Stack>
                </Box>

            </Flex>
        </Box>
    );
};

export default HiringProcess;
