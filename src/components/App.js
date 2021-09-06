import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Header from "./header/Header";
import Home from "./home/Home";
import MovieSession from "./movieSession/MovieSession";
import Room from "./room/Room";
import Success from "./success/Success";

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
                    <Room />
                </Route>
                <Route path="/sucesso" exact>
                    <Success />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

/*

*/
