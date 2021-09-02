import PageTitle from "../others/pageTitle.js";
import Footer from "../others/Footer.js";

export default function MovieSession() {
    return (
        <main>
            <PageTitle title="Selecione o horário" />

            <div className="mar-left">
                <div className="session">
                    <h1>{`{weekday} - {dd/mm/aaaa}`}</h1>
                    <div className="hours">
                        <div className="hour">{"hour"}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

/*
ImgMovie = {ImgMovie} NameMovie = {NameMovie} Weekday={Weekday} hour={hour}
*/