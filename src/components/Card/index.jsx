import { Container } from "./styled";

const Card = ({ isCart, product, index, onClick }) => {
    return (
        <Container id={isCart ? index : product.id}>
            <div>
                <h3>{product.name}</h3>
            </div>
            <figure>
                <img src={product.image} alt={product.name} />
            </figure>
            <span>R$ {`${product.price}`.replace(".", ",")}</span>
            {isCart ? (
                <></>
            ) : (
                <button onClick={onClick}>Adicionar ao carrinho</button>
            )}
        </Container>
    );
};
export default Card;
