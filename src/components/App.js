import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Header from "./header/Header";
import Home from "./home/Home";
import MovieSession from "./movieSession/MovieSession";
import Seat from "./seat/Seat";
//import Sucess from "./sucess/Sucess";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filme/:idMovie" exact>
                    <MovieSession />
                </Route>
                <Route path="/session/:idSession" exact>
                    <Seat />
                </Route>
                {/* <Route path="/" exact>
                    <Sucess />
                </Route> */}
            </Switch>
        </BrowserRouter>
    );
};

export default App;