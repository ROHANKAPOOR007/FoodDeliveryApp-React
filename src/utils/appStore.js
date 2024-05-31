// Import the `configureStore` function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the `cartReducer` from the `cartSlice` file
import cartReducer from './cartSlice';

// Create and configure the Redux store
const appStore = configureStore({
    // Define the reducers that will handle the actions for different slices of state
    reducer: {
        // Assign the `cartReducer` to manage the `cart` slice of state
        cart: cartReducer,
    }
});

// Export the configured Redux store as the default export
export default appStore;
