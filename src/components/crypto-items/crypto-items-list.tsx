import { FlatList } from "native-base";
import React from "react";
import { TCryptoItem } from "../../store/crypto-store/crypto-store";
import { ICryptoItem } from "../../ts-types/interfaces/crypto-item-interface";
import CryptoItemsItem from "./crypto-items-item";

interface Props {
  data: TCryptoItem[];
}

const CryptoItemsList: React.FC<Props> = (props) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id || Math.random().toString()}
      renderItem={({ item }) => <CryptoItemsItem item={item} />}
      numColumns={2}
    />
  );
};

export default CryptoItemsList;
