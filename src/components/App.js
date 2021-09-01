import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Header from "./header/Header";
import Home from "./home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />{/*home*/}
                </Route>
                <Route path="/" exact>

                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;