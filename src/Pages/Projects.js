import React from "react";
import "./Projects.scss";
import "../Components/ProjectHolder.scss";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

//icons
import { AiFillAliwangwang, AiFillGithub } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";

import { GrNode, GrReactjs, GrGithub, GrHeroku } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import {
    SiMaterialUi,
    SiHtml5,
    SiRedux,
    SiMongodb,
    SiGraphql,
    SiApollographql,
} from "react-icons/si";
import { DiSass, DiVisualstudio } from "react-icons/di";

//Background
import Shape1 from "../Assets/BackgroundBottom/1.svg";
import Shape5 from "../Assets/BackgroundBottom/5.svg";
import Shape7 from "../Assets/BackgroundTop/7.svg";
import Shape4 from "../Assets/BackgroundTop/4.svg";

//Project Logos
import BUCKITO from "../Assets/Logos/Buckito.png";
import { RiMovie2Line } from "react-icons/ri";

const Projects = () => {
    const history = useHistory();
    return (
        <div className="Project-Container">
            <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-100vh" }}
                onClick={(e) => history.push("/")}
                className="Project-header"
            >
                <span className="cyan">P</span>
                rojects
            </motion.div>
            <div className="ProjectDetails-container">
                <div className="ProjectCardAndLogo">
                    {/* //Card 1 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ProjectCard"
                        style={{ background: "rgba(86, 21, 180, 0.25)" }}
                    >
                        <div className="ProjectCard__hidden">
                            <div className="ProjectCard__hidden__git">
                                <a
                                    href="https://github.com/Priyanshu-C/BUCKITO"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                            <div className="ProjectCard__hidden__view">
                                <a
                                    href="http://buckito.hashigma.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoOpenOutline className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                        </div>
                        <div className="ProjectCard__front">
                            <div className="ProjectCard__front__logo">
                                <img
                                    src={BUCKITO}
                                    alt="buckito"
                                    style={{ height: "4rem" }}
                                />
                            </div>
                            <div
                                className="ProjectCard__front__name"
                                style={{ fontFamily: "ZeniqNano" }}
                            >
                                BUCKITO
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: "-5rem" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="ProjectCardLogo"
                    >
                        <GrNode className="ProjectCardLogo-logo" />
                        <GrReactjs className="ProjectCardLogo-logo" />
                        <SiMongodb className="ProjectCardLogo-logo" />
                        <SiHtml5 className="ProjectCardLogo-logo" />
                        <GrGithub className="ProjectCardLogo-logo" />
                        <FaPython className="ProjectCardLogo-logo" />
                        <DiSass className="ProjectCardLogo-logo" />
                        <SiGraphql className="ProjectCardLogo-logo" />
                        <DiVisualstudio className="ProjectCardLogo-logo" />
                        <SiApollographql className="ProjectCardLogo-logo" />
                        <GrHeroku className="ProjectCardLogo-logo" />
                    </motion.div>
                </div>
                <div className="ProjectCardAndLogo">
                    {/* //Card 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ProjectCard"
                        style={{ background: "rgba(45, 177, 177, 0.25)" }}
                    >
                        <div className="ProjectCard__hidden">
                            <div className="ProjectCard__hidden__git">
                                <a
                                    href="https://github.com/Priyanshu-C/BUCKITO-RECOMMENDATION-FAST-API"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                            <div className="ProjectCard__hidden__view">
                                <a
                                    href=" https://buckito-recommender.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoOpenOutline className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                        </div>
                        <div className="ProjectCard__front">
                            <div className="ProjectCard__front__logo">
                                <RiMovie2Line
                                    style={{
                                        color: "rgba(45, 177, 177, 0.959)",
                                        fontSize: "5rem",
                                    }}
                                />
                            </div>
                            <div
                                className="ProjectCard__front__name"
                                style={{ fontFamily: "Shadows Into Light" }}
                            >
                                MOVINE
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: "-5rem" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="ProjectCardLogo"
                    >
                        <FaPython className="ProjectCardLogo-logo" />
                        <GrGithub className="ProjectCardLogo-logo" />
                        <SiGraphql className="ProjectCardLogo-logo" />
                        <DiVisualstudio className="ProjectCardLogo-logo" />
                        <GrHeroku className="ProjectCardLogo-logo" />
                    </motion.div>
                </div>

                <div className="ProjectCardAndLogo">
                    {/* //Card 3 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ProjectCard"
                        style={{ background: "rgba(180, 87, 49, 0.25)" }}
                    >
                        <div className="ProjectCard__hidden">
                            <div className="ProjectCard__hidden__git">
                                <a
                                    href="https://github.com/Priyanshu-C/COVID-DETECTION-USING-XRAY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                            <div className="ProjectCard__hidden__view">
                                <a
                                    href="https://covid-detection-system.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoOpenOutline className="ProjectCard__hidden__icon" />
                                </a>
                            </div>
                        </div>
                        <div className="ProjectCard__front">
                            <div
                                className="ProjectCard__front__name"
                                style={{
                                    fontFamily: "Ubuntu",
                                    fontSize: "2rem",
                                    width: "80%",
                                    textAlign: "center",
                                }}
                            >
                                Covid Detection using X-Ray
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: "-5rem" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="ProjectCardLogo"
                    >
                        <GrGithub className="ProjectCardLogo-logo" />
                        <FaPython className="ProjectCardLogo-logo" />
                        <DiVisualstudio className="ProjectCardLogo-logo" />
                        <GrHeroku className="ProjectCardLogo-logo" />
                    </motion.div>
                </div>
            </div>
            <Background />
        </div>
    );
};

const logos = () => {
    <>
        <GrNode className="ProjectCardLogo-logo" />
        <GrReactjs className="ProjectCardLogo-logo" />
        <SiHtml5 className="ProjectCardLogo-logo" />
        <GrGithub className="ProjectCardLogo-logo" />
        <FaPython className="ProjectCardLogo-logo" />
        <SiRedux className="ProjectCardLogo-logo" />
        <DiSass className="ProjectCardLogo-logo" />
        <SiGraphql className="ProjectCardLogo-logo" />
        <DiVisualstudio className="ProjectCardLogo-logo" />
        <SiApollographql className="ProjectCardLogo-logo" />
        <GrHeroku className="ProjectCardLogo-logo" />
        <SiMongodb className="ProjectCardLogo-logo" />
    </>;
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

export default Projects;
