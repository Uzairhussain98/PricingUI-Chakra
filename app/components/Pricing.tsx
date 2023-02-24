"use client";
import { CheckIcon } from "@/public/icons/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxW={["382px", "720px", "994px"]}
      margin="auto"
      marginTop="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow=" 5px 5px rgba(0, 0, 0, 0.1)"
    >
      <Flex direction={["column", "column", "row"]}>
        <Box textAlign="center" bg="#F0EAF8" p="60px">
          <Text fontWeight="800" fontSize="24px">
            Premium PRO
          </Text>
          <Heading fontWeight="800" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text fontWeight="500" fontSize="18px" mt="8px">
            billed just once
          </Text>
          <Button mt="24px" colorScheme="purple" size="lg" width="282px">
            Get Started
          </Button>
        </Box>
        <Box
          fontSize={["17px", "18px", "18px"]}
          p={["22px", "32px", "60px"]}
          bg="white"
        >
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
