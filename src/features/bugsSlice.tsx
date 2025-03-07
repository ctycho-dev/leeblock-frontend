// features/basketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { parseBasket, saveBasket } from '../utils/basketStorage';
import { BasketState, MyBag, Product, Promocode } from '../types';

// Load the initial state from localStorage
const initialState: BasketState = {
  items: parseBasket(),
  discount: {} as Promocode
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item: MyBag) => item.sku.product_id === product.product_id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ sku: product, quantity });
      }

      // Save the updated basket to localStorage
      saveBasket(state.items);
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      console.log(id)
      const item = state.items.find((item: MyBag) => item.sku.product_id === id);

      if (item) {
        item.quantity += 1;
      }

      // Save the updated basket to localStorage
      saveBasket(state.items);
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.sku.product_id === id);

      if (item) {
        item.quantity -= 1;

        // If the quantity reaches 0, remove the item from the basket
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.sku.product_id !== id);
        }
      }

      // Save the updated basket to localStorage
      saveBasket(state.items);
    },
    removeItem: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.sku.product_id !== productId);

      // Save the updated basket to localStorage
      saveBasket(state.items);
    },
    clearBasket: (state) => {
      state.items = [];

      // Clear the basket from localStorage
      localStorage.removeItem('customer-basket');
    },
    applyDiscount: (state, action: PayloadAction<{ id: number, discount_value: number }>) => {
      const { id, discount_value } = action.payload;
      state.discount = { id, discount_value}; // Set the discount percentage
    },
    removeDiscount: (state) => {
      state.discount = {} as Promocode; // Reset the discount to 0%
    },
  },
});

// Export actions
export const { addItem, increaseQuantity, decreaseQuantity, removeItem, clearBasket, applyDiscount, removeDiscount } = basketSlice.actions;

// Selector to calculate total quantity
export const selectTotalQuantity = (state: { bugs: BasketState }) => {
  return state.bugs.items.reduce((total, item) => total + item.quantity, 0);
};


// Selector to calculate the total sum before discount
export const selectTotalSumBeforeDiscount = (state: { bugs: BasketState }) => {
  return state.bugs.items.reduce((total, item) => total + item.sku.price * item.quantity, 0);
};


export const selectTotalSumAfterDiscount = (state: { bugs: BasketState }) => {
  let discount = state.bugs.discount.discount_value;
  if (!discount) discount = 0

  const discountFactor = 1 - discount / 100;

  const totalSumAfterDiscount = state.bugs.items.reduce((sum, item) => {
    const discountedPrice = item.sku.price * discountFactor; // Apply discount to the item's price
    return sum + discountedPrice * item.quantity; // Add the discounted total for the item to the sum
  }, 0);

  return totalSumAfterDiscount;
};

// Selector to calculate total quantity
export const getBasket = (state: { bugs: BasketState }) => {
  return state.bugs.items
};

// Selector to get the current discount
export const getDiscount = (state: { bugs: BasketState }) => {
  return state.bugs.discount;
};

export default basketSlice.reducer;