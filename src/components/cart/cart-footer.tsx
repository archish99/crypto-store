import React from "react";
import { Box, Divider, HStack, Text, useToast } from "native-base";
import RootCartStore from "../../store/cart-store";
import PrimaryButton from "../button/primary-button";
import SuccessToast from "../toast/success-toast";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";

const CartFooter: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamsList>>();

  const toast = useToast();

  const handleCheckout = () => {
    toast.show({
      render: () => <SuccessToast description="Order Placed" />,
      duration: 1000,
    });

    RootCartStore.emptyCart();

    navigation.navigate("Home");
  };

  return (
    <Box
      h="20%"
      bg="white"
      borderTopLeftRadius={40}
      borderTopRightRadius={40}
      mt="auto"
      p={5}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontSize={20} fontWeight="bold">
          Total
        </Text>
        <Text fontSize={18}>${RootCartStore.calculateTotal()}</Text>
      </HStack>
      <Divider mt={4} />
      <PrimaryButton title="Checkout" onPress={handleCheckout} />
    </Box>
  );
};

export default CartFooter;
