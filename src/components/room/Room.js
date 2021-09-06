import Footer from "../others/Footer";
import PageTitle from "../others/pageTitle";
import Input from "./Input";
import Seat from "./Seat";
import { getRooms } from "../others/Axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Room() {
    const [room, setRoom] = useState({day:{}, movie:{}, name:"", seats:[]});
    const params = useParams().idSession;
    useEffect(() => {
        getRooms(params).then((room) => {
            setRoom(room.data);
        });
    }, [])

    const { day, movie, name, seats } = room
    const { title, posterURL, overview } = movie;

    


    return (
        <main className="mar-bottom">
            <PageTitle title="Selecione o(s) assento(s)" />
            <div>
                <div className="seats">
                    {seats.map((seat) => {
                        const { id, name, isAvailable } = seat;

                        return (
                            <Seat key={id} name={name} reserved={isAvailable} />
                        );
                    })}
                </div>
                <div className="subtitle">
                    <div className="seat selected"></div>
                    <div className="seat available"></div>
                    <div className="seat unavailable"></div>
                </div>
                <Input />

                <Link className = "link" to="/sucesso">
                <div className="botao">Reservar assento(s)</div>
                </Link>
            </div>
            <Footer
                ImgMovie={posterURL}
                Overview={overview}
                NameMovie={title}
                Date={`${day.weekday} - ${name}`}
            />
        </main>
    );
}
