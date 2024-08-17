import { Button, Typography } from "@mui/material";
import "./projects.css";
import useProjects from "./useProjects";
import externalLink from "../../assets/icons/external-link.svg";
import { Link, useNavigate } from "react-router-dom";

const STATUS = ["Pas commencé", "En cours", "Terminé"];
const STATUS_COLORS = ["#AAAAAA", "#138FD5", "#0DD87F"];

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = (project) => {
        navigate("/roadmap", { state: { project: project } });
    };

    return (
        <div className="project-card">
            <div className="project-card-header">
                <p className="project-card-title">{project.title}</p>
                <div className="project-card-rectangle">
                    <span
                        className="project-status-circle"
                        style={{
                            backgroundColor: STATUS_COLORS[project.status],
                        }}
                    ></span>
                    <p className="project-status">{STATUS[project.status]}</p>
                </div>
            </div>
            <div className="project-card-body">
                {project.images.length === 0 ? (
                    <p>{project.desc}</p>
                ) : (
                    <img src={project.images[0]} alt="image du projet" />
                )}
                <Button
                    size="medium"
                    className="project-card-button"
                    onClick={() => handleClick(project)}
                    startIcon={
                        <img
                            src={externalLink}
                            alt="icône lien"
                            style={{ width: 16 }}
                        />
                    }
                    color="secondary"
                >
                    En savoir plus
                </Button>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = useProjects();

    return (
        <section id="projects">
            <Typography variant="h3">Mes projets</Typography>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <Link to={"roadmap"} className="projects--link">
                Voir ma roadmap
            </Link>
        </section>
    );
};

export { Projects, ProjectCard };
