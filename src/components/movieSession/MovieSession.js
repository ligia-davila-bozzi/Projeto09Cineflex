import PageTitle from "../others/pageTitle.js";
import Footer from "../others/Footer.js";
import { useParams, useState } from "react-router-dom";
import { getSessions } from '../others/Axios';

export default function MovieSession() {
    const [sessions, setSessions] = useState({});
    const params = useParams();
    useEffect(() => {
        getSessions(params).then((sessions) => {
            setSessions(sessions);
        });
    },[])

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