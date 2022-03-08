import Card from "../../components/Card";
import Header from "../../components/Header";

import { useSelector, useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunks";

import { Container, Content } from "./styled";

const Home = () => {
    const { products } = useSelector((store) => store);
    const dispatch = useDispatch();

    const addProductCart = (id) => {
        dispatch(addCartThunk(id));
    };

    return (
        <>
            <Header />
            <Container>
                <Content>
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            onClick={(event) =>
                                addProductCart(event.target.parentNode.id)
                            }
                        />
                    ))}
                </Content>
            </Container>
        </>
    );
};
export default Home;
