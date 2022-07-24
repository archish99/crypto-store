import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Box, Center, Icon, Text } from "native-base";
import React from "react";
import { Platform } from "react-native";
import CartItem from "../../components/cart/cart-item";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";
import RootCartStore from "../../store/cart-store";
import CartFooter from "../../components/cart/cart-footer";
import colors from "../../constants/colors/colors";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<MainStackParamsList, "Cart">;

const CartScreen: React.FC<Props> = observer((props) => {
  const cart = RootCartStore.items;

  return (
    <>
      <StatusBar style="dark" />
      <Icon
        as={<Ionicons name="chevron-back" />}
        size={8}
        color="black"
        mt={8}
        onPress={() => props.navigation.goBack()}
      />
      <Box
        mt={Platform.OS === "android" ? 10 : 20}
        mx={5}
        flex={1}
        bg={colors.lightBg}
      >
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              qty={item.qty}
              id={item.id}
            />
          ))
        ) : (
          <Center flex={1}>
            <Text>No items added yet.</Text>
          </Center>
        )}
      </Box>
      <CartFooter />
    </>
  );
});

export default CartScreen;
