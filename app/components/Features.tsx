"use client";
import { Box, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { NoMonthly, NoSetupFees, SafePayment } from "@/public/icons/icons";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text fontSize="18px" fontWeight="700px">
        {children}
      </Text>
    </HStack>
  );
}

const Features = () => {
  return (
    <Box
      maxW="1024px"
      m="auto"
      pt="60px"
      pb="32px"
      // alignItems={"center"}
      // display="flex"
      // dir={["column", "row", "row"]}
      // direction={["column", "row", "row"]}
      // flexDirection={["column", "column", "row"]}
      // bg={["green", "yellow", "white"]}
    >
      <Stack
        p={["22px", "32px", "48px"]}
        spacing="20px"
        display="flex"
        direction={["column", "column", "row"]}
      >
        <Feature icon={SafePayment}>30 days money back Guarantee</Feature>
        <Feature icon={NoMonthly}>30 days money back Guarantee</Feature>
        <Feature icon={NoSetupFees}>30 days money back Guarantee</Feature>
      </Stack>
    </Box>
  );
};

export default Features;
