import { Flex, Text } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SuccessToast: React.FC<{ description: string }> = (props) => {
  return (
    <Flex
      flexDir="row"
      bg="green.300"
      px={2}
      py={3}
      rounded="sm"
      mb={-5}
      alignItems="center"
      w={300}
    >
      <Flex
        bg="green.500"
        justifyContent="center"
        alignItems="center"
        p={1}
        rounded="full"
        mr={6}
      >
        <Ionicons name="checkmark" size={18} color="black" />
      </Flex>
      <Text color="black" fontSize={18}>
        {props.description}
      </Text>
    </Flex>
  );
};

export default SuccessToast;
