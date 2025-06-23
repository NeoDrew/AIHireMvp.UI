import {
    Box,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react";

const CostComparison = () => {
    const bg = useColorModeValue("white.100", "white.800");

    return (
        <Box bg={bg} py={{ base: 16, md: 24 }} px={{ base: 4, md: 16 }} minH="70vh" w="100%">
            <VStack align="start" spacing={12} w="100%">
                <Box w="100%">
                    <Flex
                        justify="space-between"
                        align="center"
                        w="100%"
                        direction={{ base: "column", md: "row" }}
                        mb={6}
                    >
                        <Heading size="2xl" color="teal.600" mb={{ base: 4, md: 0 }}>
                            Cost Comparison
                        </Heading>
                        <Text fontSize="xl" color="gray.800" maxW="3xl" textAlign={{ base: "center", md: "right" }} fontStyle="italic">
                            £100,000 Software Developer Example
                        </Text>
                    </Flex>

                    <Text fontSize="lg" color="gray.600" maxW="3xl">
                        Hiring with Deskie vs traditional methods — see time spent, cost breakdowns, and hidden internal expenses.
                    </Text>
                </Box>

                <Grid
                    templateColumns={{ base: "1fr", md: "220px repeat(3, 1fr)" }}
                    gap={0}
                    w="100%"
                    maxW={{ base: "100%", md: "90%", xl: "80%" }}
                    mx="auto"
                >
                    {[
                        ["", "Deskie", "Sourcing Agency", "Internal Hiring"],
                        ["Sourcing", "Included", "Included", "~10 hrs recruiter = £500"],
                        ["Interviewing", "Included", "~6 hrs internal = £300", "~12 hrs dev = £1,200"],
                        ["Time to Hire", "3-5 days", "1-2 weeks", "3-4 weeks"],
                        ["Total Cost", "1% of salary: £1000", "15-25% salary: £15,000 - £25,000", "22 hours of internal time: £1,500 - £2,000"]
                    ].map((row, rowIndex) =>
                        row.map((cell, colIndex) => {
                            const isHeaderRow = rowIndex === 0;
                            const isRowTitle = colIndex === 0;
                            const isDeskieCol = colIndex === 1 && !isHeaderRow;
                            const isTotalRow = rowIndex === 4;
                            const isDeskieAndTotalRow = isDeskieCol && isTotalRow;

                            return (
                                <GridItem
                                    key={`${rowIndex}-${colIndex}`}
                                    px={{ base: 4, md: 6, lg: 8 }}
                                    py={{ base: 5, md: 6, lg: 7 }}
                                    borderBottom="1px solid"
                                    borderRight={colIndex < 3 ? "1px solid" : undefined}
                                    borderColor="gray.200"
                                    bg={isDeskieAndTotalRow ? "teal.200" : isDeskieCol ? "teal.50" : isTotalRow ? "cyan.100" : undefined}
                                    color={isDeskieCol ? "teal.800" : "gray.700"}
                                    fontWeight={isHeaderRow || isRowTitle ? "bold" : "normal"}
                                    fontSize={{ base: "md", md: "sm", lg: "2xl" }}
                                    textAlign={isRowTitle ? "left" : "center"}
                                >
                                    {cell}
                                </GridItem>
                            );
                        })
                    )}
                </Grid>


            </VStack>
            <Flex justify="center" align="center" mt={12} px={{ base: 4, md: 16 }}>
                <Text fontSize={{ base: "xl", md: "xl", lg: "2xl" }} color="teal.800" maxW={{ base: "100%", md: "60%" }} textAlign="center">
                    Deskie removes the burden from your team. You avoid recruiter fees, reduce engineering hours
                    spent interviewing, and speed up hiring - all at a flat 1% base salary.
                </Text>
            </Flex>
        </Box>
    );
};

export default CostComparison;
