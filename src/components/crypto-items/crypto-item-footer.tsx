import { Box, Flex, HStack, Icon, Text, useToast } from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RootCartStore from "../../store/cart-store";
import PrimaryButton from "../button/primary-button";
import QuantityAdjust from "../quantity-adjust/quantity-adjust";
import SuccessToast from "../toast/success-toast";

interface Props {
  name: string;
  price: string;
  id: string;
}

const CryptoItemFooter: React.FC<Props> = (props) => {
  const [itemQty, setItemQty] = useState<number>(1);

  const toast = useToast();

  const handleQtyIncrease = () => setItemQty((qty) => qty + 1);
  const handleQtyDecrease = () =>
    setItemQty((qty) => (qty !== 1 ? qty - 1 : 1));

  const handleAddToCart = () => {
    RootCartStore.addItem({
      name: props.name,
      price: props.price,
      qty: itemQty.toString(),
      id: props.id,
    });

    toast.show({
      render: () => <SuccessToast description="Item added to cart" />,
      duration: 1000,
    });
  };

  return (
    <Box
      bg="white"
      h="22%"
      mt="auto"
      borderTopLeftRadius={40}
      borderTopRightRadius={40}
      p={4}
    >
      <HStack alignItems="center" justifyContent="space-between" px={1}>
        <Text fontSize={20} letterSpacing={1} fontWeight="bold">
          {props.name}
        </Text>
        <Text fontSize={16} fontWeight="normal">
          ${props.price}
        </Text>
      </HStack>
      <QuantityAdjust
        qty={itemQty}
        onIncrease={handleQtyIncrease}
        onDecrease={handleQtyDecrease}
      />
      <PrimaryButton title="Add To Cart" onPress={handleAddToCart} />
    </Box>
  );
};

export default CryptoItemFooter;
