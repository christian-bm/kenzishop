import Header from "../../components/Header";
import { Container, Content } from "./styled";

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <span>Email</span>
                    <input placeholder='Digite seu email' />
                    <span>Senha</span>
                    <input placeholder='Digite sua senha' />
                    <button>ENTRAR</button>
                </Content>
            </Container>
        </>
    );
};
export default Login;
