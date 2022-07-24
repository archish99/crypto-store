import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Pressable, Text } from "native-base";
import React from "react";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";
import { TCryptoItem } from "../../store/crypto-store/crypto-store";

interface Props {
  item: TCryptoItem;
}

const CryptoItemsItem: React.FC<Props> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamsList>>();

  return (
    <Pressable
      bg="white"
      mx="auto"
      w={40}
      p={3}
      mb={3}
      rounded="lg"
      onPress={() => navigation.navigate("Item", { item: props.item })}
    >
      <Text fontWeight="bold" fontSize={18} w="60%" isTruncated>
        {props.item.name}
      </Text>
      <Text fontSize={14} fontWeight="normal">
        ${Number(props.item.price_usd).toFixed(2)}
      </Text>
    </Pressable>
  );
};

export default CryptoItemsItem;
