import { Instance, types } from "mobx-state-tree";

const CartItem = types.model("CartItem", {
  name: types.string,
  price: types.string,
  qty: types.string,
  id: types.string,
});

const CartStore = types
  .model("Cart", {
    items: types.array(CartItem),
  })
  .actions((self) => ({
    addItem: (item: Instance<typeof CartItem>) => {
      // Check if item is present in the cart
      const isItemThere = self.items.filter(
        (cartItem) => item.id === cartItem.id
      );

      if (isItemThere.length > 0) {
        const updatedItem = {
          ...isItemThere[0],
          qty: (Number(isItemThere[0].qty) + Number(item.qty)).toString(),
        };

        const itemIdx = self.items.indexOf(isItemThere[0]);

        self.items[itemIdx] = updatedItem;
      } else {
        self.items.push(item);
      }
    },
    removeItem: (id: string) => {
      const item = self.items.find((el) => el.id === id);

      if (item) {
        const itemIdx = self.items.indexOf(item);
        self.items.splice(itemIdx, 1);
      }
    },
    calculateTotal: () => {
      let total = 0;

      for (const item of self.items) {
        total += Number(item.price) * Number(item.qty);
      }

      return total;
    },
    emptyCart: () => {
      self.items.replace([]);
    },
  }));

const RootCartStore = CartStore.create({ items: [] });

export default RootCartStore;
