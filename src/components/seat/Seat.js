import Footer from "../others/Footer";
import PageTitle from "../others/pageTitle";
import Input from "./Input";

export default function Seat() {
    return (
        <main className="mar-bottom">
            <PageTitle title="Selecione o(s) assento(s)" />
            <div className="mar-left">
                <div className="seats">
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                    <div className="seat">{"{id}"}</div>
                </div>
                <div className="subtitle">
                    <div className="seat selected"></div>
                    <div className="seat available"></div>
                    <div className="seat unavailable"></div>
                </div>
                <Input />

                <div className="botao">Reservar assento(s)</div>
            </div>
            <Footer />
        </main>
    );
}
