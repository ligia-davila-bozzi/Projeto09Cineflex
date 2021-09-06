import { Link } from "react-router-dom";
import PageTitle from "../others/pageTitle";

const Success = () => {
    return (
        <main>
            <PageTitle title="Pedido feito com sucesso!" />
            <div>
                <div className="info">
                    <h1 className="h1">Filme e sessão</h1>
                    <p className="p">{/*{Nome do Filme}*/}</p>
                    <p className="p">{/*{Sessão do Filme}*/}</p>
                </div>
                <div className="info">
                    <h1 className="h1">Ingressos</h1>
                    {/*{assentos.map((assento) => <p className="p" >Assento {número do assento}</p>)}*/}
                </div>
                <div className="info">
                    <h1 className="h1">Comprador</h1>
                    <p className="p">{`Nome:` /* ${}`*/}</p>
                    <p className="p">{`CPF:` /* ${}`*/}</p>
                </div>
                <Link className = "link" to="/">
                    <div className="but">Voltar pra Home</div>
                </Link>
            </div>
        </main>
    );
};

export default Success;
