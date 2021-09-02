//import {Link} from "react-router-dom"
//import MovieSession from "../movieSession/MovieSession.js"
import PageTitle from '../others/pageTitle'

const Home = () => {
    return (
        <main>
            <PageTitle title="Selecione o filme" />

            <div className="container-movies">
                <div className="movie">
                    <img src="https://br.web.img3.acsta.net/pictures/19/04/03/18/23/2539612.jpg" alt="gsjds" />
                </div>
                <div className="movie"></div>
                <div className="movie"></div>
            </div>
        </main>
    );
}

export default Home;