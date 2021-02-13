import React from "react";
import "./App.scss";
import MainScreen from "./Pages/MainScreen";
import About from "./Pages/About";
import GetInTouch from "./Pages/GetInTouch";
import NavBar from "./Components/NavBar";
import { AnimatePresence } from "framer-motion";
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory,
    useLocation,
} from "react-router-dom";
import Projects from "./Pages/Projects";
const App = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <div className="main">
                <div
                    onClick={(e) => history.push("/")}
                    className="topLeftHeader"
                >
                    Home
                </div>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Switch location={location} key={location.key}>
                        <Route path="/" exact component={MainScreen} />
                        <Route
                            path="/GetInTouch"
                            exact
                            component={GetInTouch}
                        />
                        <Route path="/About" exact component={About} />
                        <Route
                            path="/Projects"
                            exact
                            component={Projects}
                        />
                    </Switch>
                </AnimatePresence>
            </div>
        </>
    );
};

export default App;
