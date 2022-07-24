import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/home-screen";
import colors from "../../constants/colors/colors";
import ItemScreen from "../../screens/item/item-screen";
import { TCryptoItem } from "../../store/crypto-store/crypto-store";
import CartScreen from "../../screens/cart/cart-screen";

export type MainStackParamsList = {
  Home: undefined;
  Item: { item: TCryptoItem };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.lightBg },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
