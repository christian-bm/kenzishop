import Header from "../../components/Header";
import { Container, Content, ContentUl, ContentCart } from "./styled";
import Card from "../../components/Card";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Cart = () => {
    const { cart } = useSelector((store) => store);

    const history = useHistory();

    return (
        <>
            <Header />
            <Container>
                <ContentCart>
                    <h2>Resumo do pedido</h2>
                    <div>
                        <p>
                            {cart.length <= 1
                                ? `${cart.length} produto`
                                : `${cart.length} produtos`}
                        </p>
                        <span>
                            R${" "}
                            {`${cart
                                .reduce((acc, { price }) => acc + price, 0)
                                .toFixed(2)}`.replace(".", ",")}
                        </span>
                    </div>
                    <button onClick={() => history.push("/login")}>
                        FINALIZAR O PEDIDO
                    </button>
                </ContentCart>
                <Content>
                    <h2>NFTs</h2>
                    <ul>
                        {cart.length === 0 ? (
                            <span>Sem produtos no carrinho!</span>
                        ) : (
                            cart.map((product, index) => (
                                <Card isCart product={product} index={index} />
                            ))
                        )}
                    </ul>
                </Content>
            </Container>
        </>
    );
};
export default Cart;
