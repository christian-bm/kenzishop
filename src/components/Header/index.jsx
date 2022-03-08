import { useHistory } from "react-router-dom";

import { Container, Content } from "./styled";

const Header = () => {
    const history = useHistory();

    return (
        <Container>
            <Content>
                <h1>Kenzie Shop NFT</h1>
                <nav>
                    <button onClick={() => history.push("/")}>Inicio</button>
                    <button onClick={() => history.push("/cart")}>
                        Carrinho
                    </button>
                    <button onClick={() => history.push("/login")}>
                        Entrar
                    </button>
                </nav>
            </Content>
        </Container>
    );
};
export default Header;
