import { useState } from "react";
import { useLocation } from "react-router-dom";
import useProjects from "./useProjects";
import "./details.css";
import { Typography } from "@mui/material";
import designIcon from "../../assets/icons/pen-tool.svg";
import layoutIcon from "../../assets/icons/layout.svg";
import codeIcon from "../../assets/icons/code.svg";
import externalLinkIcon from "../../assets/icons/external-link.svg";
import githubIcon from "../../assets/icons/github.svg";

const STATUS = ["Pas commencé", "En cours", "Terminé"];
const STATUS_COLORS = ["#AAAAAA", "#138FD5", "#0DD87F"];

const TECHS = {
    Design: designIcon,
    "React JS": layoutIcon,
    "Vue JS": layoutIcon,
    "Node JS": codeIcon,
};

const Details = () => {
    const location = useLocation();
    const [project, setProject] = useState(
        location.state === null ? null : location.state.project
    );

    const projectList = useProjects();

    const handleChange = (event) => {
        const newProject = projectList.filter(
            (item) => item.title === event.target.textContent
        )[0];
        console.log(newProject);
        setProject(newProject);
    };

    const openUrl = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <div className="details-container">
            <div className="details--left-col">
                <div className="dot-line-row">
                    {projectList.map((project) => (
                        <>
                            <div
                                className={`line ${
                                    project.status === 0
                                        ? "line--grey"
                                        : project.status === 1 && "line--dashed"
                                }`}
                            ></div>
                            <span
                                className={`dot ${
                                    project.status === 0 && "dot--grey"
                                }`}
                                onClick={handleChange}
                            >
                                <p className="dot-text">{project.title}</p>
                            </span>
                        </>
                    ))}
                </div>
            </div>
            <div className="details--middle">
                <Typography variant="h4" onClick={() => setProject(null)}>
                    Roadmap
                </Typography>
                {project === null ? (
                    <div className="details-summary">
                        <p>Bienvenue sur la roadmap de mes projets !</p>
                        <p>
                            {
                                "Ici, vous pouvez consulter en détails les projets personnels et professionnels que j’ai réalisé ou ceux en cours."
                            }
                        </p>
                        <p>
                            {
                                "→ Cliquez sur le nom d'un projet pour plus de détails."
                            }
                        </p>
                    </div>
                ) : (
                    <div className="details-card">
                        <div className="details-card--header">
                            <Typography variant="h5">
                                {project.title}
                            </Typography>
                            <div className="project-card-rectangle">
                                <span
                                    className="project-status-circle"
                                    style={{
                                        backgroundColor:
                                            STATUS_COLORS[project.status],
                                    }}
                                ></span>
                                <p className="project-status">
                                    {STATUS[project.status]}
                                </p>
                            </div>
                            <div className="tech-row">
                                {project.techs.map((item, index) => (
                                    <div
                                        key={index}
                                        className="project-card-rectangle"
                                    >
                                        <img
                                            src={TECHS[item]}
                                            width={12}
                                            height={12}
                                        />
                                        <p className="project-status">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="details-card--body">
                            <p>
                                <span>Client : </span> {project.clientName}
                            </p>
                            <p>
                                <span>Présentation du client : </span>{" "}
                                {project.clientDesc}
                            </p>
                            <p>
                                <span>Description du projet : </span>{" "}
                                {project.desc}
                            </p>
                            <div className="details-image-wrapper">
                                {project.images.length !== 0 ? (
                                    project.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt="image du projet"
                                            loading="lazy"
                                            width={315}
                                            height={150}
                                        />
                                    ))
                                ) : (
                                    <span>Images à venir</span>
                                )}
                            </div>
                        </div>
                        <div className="details-card--footer">
                            {project.githubLink && (
                                <div
                                    className="project-card-rectangle"
                                    onClick={() => openUrl(project.githubLink)}
                                >
                                    <img
                                        src={githubIcon}
                                        width={12}
                                        height={12}
                                    />
                                    <p className="project-status">
                                        Voir le code
                                    </p>
                                </div>
                            )}
                            {project.externalLink && (
                                <div
                                    className="project-card-rectangle"
                                    onClick={() =>
                                        openUrl(project.externalLink)
                                    }
                                >
                                    <img
                                        src={externalLinkIcon}
                                        width={12}
                                        height={12}
                                    />
                                    <p className="project-status">
                                        Visiter le site
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="details--right-col">
                {project !== null && (
                    <p>
                        {
                            "→ Cliquez sur le nom d'un projet pour plus de détails."
                        }
                    </p>
                )}
            </div>
        </div>
    );
};

export default Details;
