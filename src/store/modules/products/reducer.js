import products from "../../../assets/db";

const productsReducer = (state = products, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;
