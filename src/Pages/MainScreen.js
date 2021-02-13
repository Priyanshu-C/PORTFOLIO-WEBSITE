import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./MainScreen.scss";
import { Link, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import BackgroundBottom from "../Components/BackgroundBottom";
import BackgroundTop from "../Components/BackgroundTop";

const MainScreen = () => {
    const history = useHistory();
    const variants = {
        visible: { opacity: 1, x: "50vh", transition: { duration: 2 } },
        hidden: { opacity: 1, x: "150vh" },
    };

    return (
        <div className="Full-container">
            <div className="navbar-container">
                <motion.div
                    onClick={(e) => history.push("/About")}
                    initial={{ x: "-50vw" }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 0.7,
                        type: "spring",
                        stiffness: 55,
                    }}
                    exit={{ x: "-50vw", transition: { delay: 0, duration: 1 } }}
                    className="navbar-titles"
                >
                    <span className="line" /> <span className="cyan">A</span>
                    bout{" "}
                </motion.div>

                <motion.div
                    onClick={(e) => history.push("/Projects")}
                    initial={{ x: "-50vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 55 }}
                    className="navbar-titles"
                    exit={{ x: "-50vw", transition: { delay: 0, duration: 1 } }}
                >
                    <span className="line" /> <span className="cyan">P</span>
                    rojects{" "}
                </motion.div>
                <motion.div
                    onClick={(e) => history.push("/GetInTouch")}
                    initial={{ x: "-50vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 55 }}
                    className="navbar-titles"
                    exit={{ x: "-50vw", transition: { delay: 0, duration: 1 } }}
                >
                    <span className="line" /> <span className="cyan">C</span>
                    ontact{" "}
                </motion.div>
            </div>
            <div className="mainPage">
                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 55 }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 0, duration: 1 },
                    }}
                    className="mainPage__info"
                >
                    <span>
                        Hello, I’m
                        <span className="cyan"> Priyanshu Chauhan.</span>
                        <br />I am a full-stack web developer.
                    </span>
                </motion.div>
            </div>
            <BackgroundTop />
            <BackgroundBottom />
        </div>
    );
};

export default MainScreen;
