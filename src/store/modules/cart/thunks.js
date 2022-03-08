import { addCart } from "./actions";

export const addCartThunk = (productId) => (dispatch, getState) => {
    const { products, cart } = getState();
    const product = products.find(({ id }) => id === productId);
    const newCart = [...cart, product];
    localStorage.setItem("@KenzieshopNFT:cart", JSON.stringify(newCart));

    dispatch(addCart(newCart));
};
