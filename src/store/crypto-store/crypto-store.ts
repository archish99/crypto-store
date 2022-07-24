import { Instance, types } from "mobx-state-tree";

export const CryptoItem = types.model("CryptoItem", {
  id: types.maybeNull(types.string),
  symbol: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  nameid: types.maybeNull(types.string),
  rank: types.maybeNull(types.number),
  price_usd: types.maybeNull(types.string),
  percent_change_24h: types.maybeNull(types.string),
  percent_change_1h: types.maybeNull(types.string),
  percent_change_7d: types.maybeNull(types.string),
  price_btc: types.maybeNull(types.string),
  market_cap_usd: types.maybeNull(types.string),
  volume_24: types.maybeNull(types.number),
  volume_24a: types.maybeNull(types.number),
  csupply: types.maybeNull(types.string),
  tsupply: types.maybeNull(types.string),
  msupply: types.maybeNull(types.string),
});

export type TCryptoItem = Instance<typeof CryptoItem>;

const CryptoStore = types
  .model("CryptoStore", {
    cryptos: types.array(CryptoItem),
  })
  .actions((stores) => ({
    setCryptos(cryptos: Instance<typeof CryptoItem>[]) {
      stores.cryptos.replace(cryptos);
    },
    async fetchCryptos(): Promise<boolean> {
      try {
        const res = await fetch("https://api.coinlore.net/api/tickers/");
        const data = await res.json();

        this.setCryptos(data.data);
        return false;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    filterCryptos(name: string) {
      this.setCryptos(
        stores.cryptos.filter((item) => item.name?.toLowerCase().includes(name))
      );
    },
  }));

const RootStore = CryptoStore.create({
  cryptos: [
    {
      id: "",
      symbol: "",
      name: "",
      nameid: "",
      rank: 0,
      price_usd: "",
      percent_change_24h: "",
      percent_change_1h: "",
      percent_change_7d: "",
      price_btc: "",
      market_cap_usd: "",
      volume_24: 0,
      volume_24a: 0,
      csupply: "",
      tsupply: "",
      msupply: "",
    },
  ],
});

export default RootStore;
