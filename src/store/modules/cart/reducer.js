import { ADD_CART } from "./actionType";
const initialState = JSON.parse(localStorage.getItem("@KenzieshopNFT:cart")) || [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            const newState = [...action.product];
            return newState;
        default:
            return state;
    }
};
export default cartReducer;
