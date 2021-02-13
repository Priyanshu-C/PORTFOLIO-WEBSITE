import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Shape1 from "../Assets/BackgroundBottom/1.svg";
import Shape5 from "../Assets/BackgroundBottom/5.svg";
import Shape7 from "../Assets/BackgroundTop/7.svg";
import Shape4 from "../Assets/BackgroundTop/4.svg";
import "./About.scss";
import "./GetInTouch.scss";

//Icons
import { AiFillLinkedin } from "react-icons/ai";
import {
    SiGmail,
    SiLeetcode,
    SiFacebook,
    SiCodeforces,
    SiGithub,
} from "react-icons/si";

const GetInTouch = () => {
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
                    <span className="cyan">G</span>
                    et In Touch
                </motion.div>

                <div className="ContactDetails-container">
                    <div className="ContactDetails__detail">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="ContactDetails__detail__title"
                        >
                            <div className="ContactDetails__detail__title-head">
                                <span className="cyan">P</span>riyanshu Chauhan
                            </div>
                            <div className="ContactDetails__detail__title-head">
                                <span className="cyan">B</span>angalore
                            </div>
                            <div className="ContactDetails__detail__title-head">
                                <a
                                    href="tel:8127112133"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    <span className="cyan">+91</span>8127112133
                                </a>
                            </div>
                        </motion.div>
                        <motion.span
                            initial={{ x: "-150vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "150vw" }}
                            className="divider"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="ContactDetails__detail__link"
                        >
                            <a
                                href="https://www.linkedin.com/in/priyanshu-chauhan-467804180/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="ContactDetails__detail__link__icon">
                                    <AiFillLinkedin />
                                </div>
                            </a>
                            <a
                                href="mailto: priyanshuc.info@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="ContactDetails__detail__link__icon">
                                    <SiGmail />
                                </div>
                            </a>
                            <a
                                href="https://leetcode.com/priyanshuc/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="ContactDetails__detail__link__icon">
                                    <SiLeetcode />
                                </div>
                            </a>
                            <a
                                href="https://codeforces.com/profile/PriyanshuC"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="ContactDetails__detail__link__icon">
                                    <SiCodeforces />
                                </div>
                            </a>
                            <a
                                href="https://github.com/Priyanshu-C"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="ContactDetails__detail__link__icon">
                                    <SiGithub />
                                </div>
                            </a>
                        </motion.div>
                    </div>
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

export default GetInTouch;
