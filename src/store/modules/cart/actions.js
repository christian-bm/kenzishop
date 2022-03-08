import { ADD_CART } from "./actionType";

export const addCart = (product) => ({
    type: ADD_CART,
    product,
});
