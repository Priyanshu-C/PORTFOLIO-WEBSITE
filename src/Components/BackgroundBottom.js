import React from "react";
import { motion } from "framer-motion";
import Shape1 from "../Assets/BackgroundBottom/1.svg";
import Shape2 from "../Assets/BackgroundBottom/2.svg";
import Shape3 from "../Assets/BackgroundBottom/3.svg";
import Shape4 from "../Assets/BackgroundBottom/4.svg";
import Shape5 from "../Assets/BackgroundBottom/5.svg";
import Shape6 from "../Assets/BackgroundBottom/6.svg";
import Shape7 from "../Assets/BackgroundBottom/7.svg";
import Shape8 from "../Assets/BackgroundBottom/8.svg";
import Shape9 from "../Assets/BackgroundBottom/9.svg";
import Shape10 from "../Assets/BackgroundBottom/10.svg";
import Shape11 from "../Assets/BackgroundBottom/11.svg";
import "./BackgroundBottom.scss";

const BackgroundBottom = () => {
    return (
        <div className="background-down">
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{ y: 0, scale: 0.8, transition: { duration: 0.5 } }}
                src={Shape1}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 45, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 0.25 },
                }}
                src={Shape2}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 180, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: .5 },
                }}
                src={Shape3}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 165, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: .75 },
                }}
                src={Shape4}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 90, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 1 },
                }}
                src={Shape5}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 65, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 1.25 },
                }}
                src={Shape6}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 75, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 1.5 },
                }}
                src={Shape7}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 80, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 1.75 },
                }}
                src={Shape8}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 20, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 2 },
                }}
                src={Shape9}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 45, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 2.25 },
                }}
                src={Shape10}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 45, transition: { duration: 0.5 } }}
            />
            <motion.img
                initial={{ y: "-300vh" }}
                animate={{
                    y: 0,
                    scale: 0.8,
                    transition: { duration: 0.5, delay: 2.5 },
                }}
                src={Shape11}
                alt="shape1"
                className="shapeDown"
                exit={{ y: "100vh", rotate: 45, transition: { duration: 0.5 } }}
            />
        </div>
    );
};

export default BackgroundBottom;
