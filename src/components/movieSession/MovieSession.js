import PageTitle from "../others/pageTitle.js";
import Session from "./Session"
import Footer from "../others/Footer.js";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getSessions } from '../others/Axios';

export default function MovieSession() {
    const [sessions, setSessions] = useState([]);
    const params = useParams().idMovie;

    useEffect(() => {
        getSessions(params).then((sessions) => {
            setSessions(sessions.data);
        })
    },[])
    if (sessions.length === 0){
        return (
            <h1>/carregando, menor</h1>
        );
    }

    return (
        <main>
            <PageTitle title="Selecione o horário" />

            <div className="mar-left">
                <Session key={sessions.id} sessions={sessions} />
            </div>

            <Footer ImgMovie = {sessions.posterURL} Overview = {sessions.overview} NameMovie = {sessions.title} Date="" />
        </main>
    );
}

/*
ImgMovie = {ImgMovie} NameMovie = {NameMovie} Weekday={Weekday} hour={hour}
*/


/*
-------
esse é o sessions2 
tam 0
esse é o sessions vazio
tô aqui
-------
esse é o sessions2 [object Object]
tam undefined



Session.js:4 esse é o days:
Session.js:4 esse é o days:
*/