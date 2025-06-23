import { useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Avatar,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Header from "../../components/header";

const data = [
    { name: "Mon", applications: 12 },
    { name: "Tue", applications: 18 },
    { name: "Wed", applications: 10 },
    { name: "Thu", applications: 23 },
    { name: "Fri", applications: 9 },
];

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard - Deskie";
    }, []);

    return (
        <Box>
            <Header />

            <VStack spacing={10} align="stretch" p={{ base: 4, md: 8 }}>
                {/* Current Jobs */}
                <Box bg="white" borderRadius="xl" shadow="md" p={6}>
                    <Heading size="md" mb={4} color="teal.600">Current Jobs</Heading>
                    <Text fontSize="lg" fontWeight="medium">Frontend Developer - 42 Applications</Text>
                    <Text color="gray.600">8 in Technical Review, 4 in Screening, 1 Offer Sent</Text>
                </Box>

                {/* Candidate Reviews */}
                <Box bg="white" borderRadius="xl" shadow="md" p={6}>
                    <Heading size="md" mb={4} color="teal.600">Top Candidates</Heading>
                    <VStack spacing={4} align="stretch">
                        {[1, 2, 3, 4].map((id) => (
                            <Box key={id} p={4} borderWidth="1px" borderRadius="md">
                                <HStack spacing={4}>
                                    <Avatar name={`Candidate ${id}`} />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="bold">Candidate {id}</Text>
                                        <Text fontSize="sm" color="gray.600">Applied for: Frontend Developer</Text>
                                        <Text fontSize="sm" color="gray.500">Stage: Technical Interview</Text>
                                        <Text fontSize="sm" color="gray.500">Avg Score: 84%</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </Box>

                {/* Analytics */}
                <Box bg="white" borderRadius="xl" shadow="md" p={6}>
                    <Heading size="md" mb={4} color="teal.600">Analytics</Heading>
                    <Text fontSize="sm" color="gray.600" mb={2}>Applications per day</Text>
                    <Box height="250px">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="applications" stroke="#319795" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>
            </VStack>
        </Box>
    );
};

export default Dashboard;