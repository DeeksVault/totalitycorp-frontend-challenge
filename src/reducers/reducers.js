// cartReducer.js

import { ADD_TO_CART } from '../actions/actions';

const initialState = {
  cartItems: [
    {
      id:0,
      quantity:1,
      url:"https://images.wallpaperscraft.com/image/single/car_gray_wet_147750_300x255.jpg",
      name:"safssd",
      price:120
    },
    {
      id:1,
      quantity:1,
      url:"https://images.wallpaperscraft.com/image/single/car_gray_wet_147750_300x255.jpg",
      name:"safssd",
      price:120
    }
  ], // An array to store items in the cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // If the item is already in the cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    // Add more cases to handle other actions if needed

    default:
      return state;
  }
};

export default cartReducer;
