import { Button, Typography } from "@mui/material";
import "./projects.css";
import useProjects from "./useProjects";
import externalLink from "../../assets/external-link.svg";

const STATUS = ["Pas commencé", "En cours", "Terminé"];
const STATUS_COLORS = ["#AAAAAA", "#138FD5", "#0DD87F"];

const Projects = () => {
    const projects = useProjects();

    const ProjectCard = ({ project }) => {
        const openUrl = (url) => {
            window.open(url, "_blank", "noreferrer");
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
                        <p className="project-status">
                            {STATUS[project.status]}
                        </p>
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
                        onClick={() => openUrl(project.url)}
                        startIcon={
                            <img src={externalLink} style={{ width: 16 }} />
                        }
                        color="secondary"
                    >
                        En savoir plus
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <section id="projects">
            <Typography variant="h3">Mes projets</Typography>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
