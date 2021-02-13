import React from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Shape1 from "../Assets/BackgroundBottom/1.svg";
import Shape5 from "../Assets/BackgroundBottom/5.svg";
import Shape7 from "../Assets/BackgroundTop/7.svg";
import Shape4 from "../Assets/BackgroundTop/4.svg";
import "./About.scss";

import {
    RiCompasses2Line,
    RiTerminalWindowLine,
    RiBarChartGroupedLine,
} from "react-icons/ri";

const About = () => {
    const history = useHistory();
    return (
        <>
            <div className="About-Container">
                <motion.div
                    initial={{ y: "-300vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-300vh" }}
                    onClick={(e) => history.push("/")}
                    className="about-header"
                >
                    <span className="cyan">A</span>
                    bout
                </motion.div>
                <div className="details-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0 } }}
                        transition={{ delay: 0.25 }}
                        className="details-container__box"
                    >
                        <RiCompasses2Line className="details-container__box__logo" />
                        <h1 className="details-container__box__header">
                            Back-end Developer
                        </h1>
                        <p className="details-container__box__description">
                            I like to write clean, high quality code, because
                            this is eventually gonna let your front-end fly.
                        </p>

                        <h3 className="details-container__box__sub1">
                            My choice of dialect
                        </h3>
                        <p className="details-container__box__description">
                            JavaScript,Python
                        </p>
                        <h3 className="details-container__box__sub2">
                            Tech-Stack
                        </h3>
                        <p className="details-container__box__description">
                            Node <br />
                            Express <br />
                            Graphql <br />
                            JWT <br />
                            Passport-js <br />
                            Redis <br />
                            Fast-API <br />
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0 } }}
                        transition={{ delay: 0.5 }}
                        className="details-container__box"
                    >
                        <RiTerminalWindowLine className="details-container__box__logo" />
                        <h1 className="details-container__box__header">
                            Front-end Developer
                        </h1>
                        <p className="details-container__box__description">
                            I like to code things from scratch, and enjoy
                            bringing ideas to life in the browser.
                        </p>
                        <h3 className="details-container__box__sub1">
                            Languages I speak:
                        </h3>
                        <p className="details-container__box__description">
                            JavaScript,HTML,Sass.
                        </p>
                        <h3 className="details-container__box__sub2">
                            Libraries/Dev Tools:
                        </h3>
                        <p className="details-container__box__description">
                            React <br />
                            Redux <br />
                            Figma <br />
                            VScode <br />
                            Animejs <br />
                            Framer-motion <br />
                            Material UI
                            <br />
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0 } }}
                        transition={{ delay: 0.75 }}
                        className="details-container__box"
                    >
                        <RiBarChartGroupedLine className="details-container__box__logo" />
                        <h1 className="details-container__box__header">
                            Data Engineer
                        </h1>
                        <p className="details-container__box__description">
                            I like to make machines do what i find difficult to
                            do in a way that none can tell i am being lazy.
                        </p>
                        <p className="details-container__box__description"></p>
                        <h3 className="details-container__box__sub1">
                            Lingo I use:
                        </h3>
                        <p className="details-container__box__description">
                            PYTHON
                        </p>
                        <h3 className="details-container__box__sub2">
                            Libraries/Tools :
                        </h3>
                        <p className="details-container__box__description">
                            Numpy <br />
                            Pandas <br />
                            SciPy <br />
                            Sklearn <br />
                            Huggingface <br />
                        </p>
                    </motion.div>
                </div>

                <Background />
            </div>
        </>
    );
};

const Background = () => {
    return (
        <>
            <div className="about-background-down">
                <motion.img
                    initial={{ y: "-300vh" }}
                    animate={{
                        y: 0,
                        scale: 0.8,
                        transition: { duration: 0.5 },
                    }}
                    src={Shape1}
                    alt="shape1"
                    className="aboutDown"
                    exit={{
                        y: "100vh",
                        rotate: 45,
                        transition: { duration: 0.5 },
                    }}
                />
                <motion.img
                    initial={{ y: "-300vh" }}
                    animate={{
                        y: 0,
                        scale: 0.8,
                        transition: { duration: 0.5, delay: 0.25 },
                    }}
                    src={Shape5}
                    alt="shape1"
                    className="aboutDown"
                    exit={{
                        y: "100vh",
                        rotate: 65,
                        transition: { duration: 0.5 },
                    }}
                />
            </div>
            <div className="about-background-up">
                <motion.img
                    initial={{ y: "300vh" }}
                    animate={{
                        y: 0,
                        scale: 0.65,
                        transition: { duration: 0.5, delay: 0 },
                    }}
                    src={Shape7}
                    alt="shape1"
                    className="aboutTop"
                    exit={{
                        y: "-100vh",
                        rotate: 20,
                        transition: { duration: 0.5 },
                    }}
                />
                <motion.img
                    initial={{ y: "300vh" }}
                    animate={{
                        y: 0,
                        scale: 0.65,
                        transition: { duration: 0.5, delay: 0.25 },
                    }}
                    src={Shape4}
                    alt="shape1"
                    className="aboutTop"
                    exit={{
                        y: "-100vh",
                        rotate: 20,
                        transition: { duration: 0.5 },
                    }}
                />
            </div>
        </>
    );
};

export default About;
