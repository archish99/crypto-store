import { Box, HStack, Text } from "native-base";
import React from "react";
import { Platform } from "react-native";
import { TCryptoItem } from "../../store/crypto-store/crypto-store";

interface Props {
  item: TCryptoItem;
}

const CryptoItemsDisplayBox: React.FC<Props> = (props) => {
  return (
    <Box
      bg="white"
      p={3}
      rounded="lg"
      mt={Platform.OS === "android" ? 10 : 20}
      mx={5}
    >
      {Object.keys(props.item).map((name, idx) => {
        return (
          <HStack
            key={idx}
            justifyContent="space-between"
            alignItems="center"
            // mb={1}
            mb={
              idx === Object.keys(props.item).length - 1 &&
              Platform.OS === "android"
                ? -20
                : 1
            }
          >
            <Text fontSize={16} fontWeight="bold">
              {name === "$treenode" || name === "toJSON" || name === "toString"
                ? null
                : name}
            </Text>
            {name === "$treenode" ? null : (
              <Text fontSize={14} fontWeight="normal">
                {props.item[name as keyof TCryptoItem]}
              </Text>
            )}
          </HStack>
        );
      })}
    </Box>
  );
};

export default CryptoItemsDisplayBox;
