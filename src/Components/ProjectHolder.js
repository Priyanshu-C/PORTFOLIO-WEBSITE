import React from "react";
import "./ProjectHolder.scss";
import { AiFillAliwangwang, AiFillGithub } from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";

const ProjectHolder = ({ name, logo = null }) => {
    return (
        <div className="ProjectCard">
            <div className="ProjectCard__hidden">
                <div className="ProjectCard__hidden__git">
                    <AiFillGithub className="ProjectCard__hidden__icon" />
                </div>
                <div className="ProjectCard__hidden__view">
                    <IoOpenOutline className="ProjectCard__hidden__icon" />
                </div>
            </div>
            <div className="ProjectCard__front">
                <div className="ProjectCard__front__logo">
                    <AiFillAliwangwang
                        style={{ color: "white", fontSize: "5rem" }}
                    />
                </div>
                <div className="ProjectCard__front__name">{name}</div>
            </div>
        </div>
    );
};

export default ProjectHolder;
