import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Spinner,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors/colors";
import RootStore from "../../store/crypto-store/crypto-store";
import CryptoItemsList from "../../components/crypto-items/crypto-items-list";
import RootCartStore from "../../store/cart-store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamsList } from "../../navigation/main-stack/main-stack";
import { observer } from "mobx-react";

type Props = NativeStackScreenProps<MainStackParamsList, "Home">;

const HomeScreen: React.FC<Props> = observer((props) => {
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const cart = RootCartStore.items;

  useEffect(() => {
    RootStore.fetchCryptos().then((res) => setIsFetching(res));
  }, [isFetching]);

  return (
    <>
      <KeyboardAvoidingView
        // flex={1}
        bg={colors.homeHeader}
        behavior="height"
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        pb={5}
      >
        <ScrollView>
          <Box>
            <HStack
              mt={Platform.OS === "android" ? 5 : 10}
              p={5}
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading color="white" letterSpacing={1}>
                Crypto Store
              </Heading>
              <Flex
                alignItems="center"
                justifyContent="center"
                borderWidth={1}
                borderColor="#777678"
                p={2}
                rounded="full"
                position="relative"
              >
                <Flex
                  bg="black"
                  p={1}
                  rounded="full"
                  w={7}
                  h={7}
                  position="absolute"
                  alignItems="center"
                  justifyContent="center"
                  top={-14}
                  left={-15}
                >
                  <Text color="white">{cart.length}</Text>
                </Flex>
                <Icon
                  as={<Ionicons name="cart-outline" />}
                  size={6}
                  color="white"
                  mr={0.5}
                  onPress={() => props.navigation.navigate("Cart")}
                />
              </Flex>
            </HStack>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
      <Input
        type="text"
        bg="white"
        mt={-5}
        mx={5}
        rounded="lg"
        fontSize={14}
        p={Platform.OS === "android" ? 2 : 4}
        placeholder="What are you buying today?"
        placeholderTextColor={colors.darkGray}
        borderWidth={0}
        InputLeftElement={
          <Icon
            as={<Ionicons name="search" />}
            size={6}
            color={colors.darkGray}
            ml={3}
          />
        }
        _focus={{ bg: "white", borderWidth: 0 }}
        onChangeText={async (text) => {
          if (text === "") await RootStore.fetchCryptos();
          else RootStore.filterCryptos(text);
        }}
      />
      <Box px={5} mt={5} pb={10} h="80%">
        {!isFetching ? (
          RootStore.cryptos.length > 0 ? (
            <CryptoItemsList data={RootStore.cryptos} />
          ) : (
            <Text>No data found</Text>
          )
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
});

export default HomeScreen;
