import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Box, Center, Divider, Heading, HStack, Icon, Text } from "native-base";
import React from "react";
import CryptoItemFooter from "../../components/crypto-items/crypto-item-footer";
import CryptoItemsDisplayBox from "../../components/crypto-items/crypto-items-display-box";
import colors from "../../constants/colors/colors";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

type Props = NativeStackScreenProps<MainStackParamsList, "Item">;

const ItemScreen: React.FC<Props> = (props) => {
  return (
    <>
      <StatusBar style="dark" />
      <HStack mt={Platform.OS === "android" ? 8 : 10} alignItems="center">
        <Icon
          as={<Ionicons name="chevron-back" />}
          size={8}
          color="black"
          onPress={() => props.navigation.goBack()}
        />
        <Heading>Details</Heading>
      </HStack>
      <Box bg={colors.lightBg} flex={1}>
        <CryptoItemsDisplayBox item={props.route.params.item} />
        <CryptoItemFooter
          name={props.route.params.item.name || ""}
          price={props.route.params.item.price_usd || ""}
          id={props.route.params.item.id || ""}
        />
      </Box>
    </>
  );
};

export default ItemScreen;
