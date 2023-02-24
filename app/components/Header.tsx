"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="section" pb="112px">
      <Box
        color={["#F7FAFC"]}
        bg="#6B46C1"
        textAlign={["left", "left", "center"]}
        width="full"
        //   height="397px"
        px="32px"
        pt="90px"
        pb="190px"
      >
        <Heading fontWeight="800" fontSize={["32px", "40px", "48px"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize={["20px", "20px", "24px"]} pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
