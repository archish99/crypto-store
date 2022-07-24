import React from "react";
import { HStack, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityAdjust: React.FC<Props> = (props) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      borderColor="black"
      borderWidth={1}
      p={2}
      mt={2}
      rounded="full"
    >
      <Icon
        as={<Ionicons name="remove-outline" />}
        size={4}
        color="black"
        onPress={props.onDecrease}
      />
      <Text fontSize={14}>{props.qty}</Text>
      <Icon
        as={<Ionicons name="add" />}
        size={4}
        color="black"
        onPress={props.onIncrease}
      />
    </HStack>
  );
};

export default QuantityAdjust;
