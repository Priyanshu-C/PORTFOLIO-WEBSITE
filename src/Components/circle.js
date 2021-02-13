import React from "react";

const circle = () => {
    return (
        <div>
            <motion.div
                initial={{ y: "-20%", x: "200vh" }}
                animate={{
                    opacity: 1,
                    x: "54vh",
                    transition: { duration: 0.7, delay: 0.2 },
                }}
                exit={{
                    y: "-20%",
                    x: "200vh",
                    transition: { delay: 0.6, duration: 1 },
                }}
                className="mainPage__circle-1"
            />
            <motion.div
                initial={{ y: "-20%", x: "200vh" }}
                animate={{
                    opacity: 1,
                    x: "58vh",
                    transition: { duration: 0.7, delay: 0.4 },
                }}
                exit={{
                    y: "-20%",
                    x: "200vh",
                    transition: { delay: 0.4, duration: 1 },
                }}
                className="mainPage__circle-2"
            />
            <motion.div
                initial={{ y: "-20%", x: "200vh" }}
                animate={{
                    opacity: 1,
                    x: "61vh",
                    transition: { duration: 0.7, delay: 0.6 },
                }}
                exit={{
                    y: "-20%",
                    x: "200vh",
                    transition: { delay: 0.2, duration: 1 },
                }}
                className="mainPage__circle-3"
            />
        </div>
    );
};

export default circle;
