import React from "react";
import { HStack, Icon, Text, useToast } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import RootCartStore from "../../store/cart-store";
import SuccessToast from "../toast/success-toast";

interface Props {
  name: string;
  price: string;
  qty: string;
  id: string;
}

const CartItem: React.FC<Props> = (props) => {
  const toast = useToast();

  const handleDelete = () => {
    RootCartStore.removeItem(props.id);

    toast.show({
      render: () => <SuccessToast description="Item removed" />,
    });
  };

  return (
    <HStack
      bg="white"
      rounded="lg"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      mb={3}
    >
      <Text fontWeight="bold" fontSize={17} w="30%" isTruncated>
        {props.name}
      </Text>
      <Text>x{props.qty}</Text>
      <Text>${props.price}</Text>
      <Icon
        as={<Ionicons name="trash-bin-outline" />}
        size={5}
        color="red.400"
        onPress={handleDelete}
      />
    </HStack>
  );
};

export default CartItem;
