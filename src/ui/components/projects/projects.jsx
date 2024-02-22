import { Button, Typography } from '@mui/material';
import './projects.css';
import project1 from '../../assets/project1.png';

const Projects = () => {

    const projects = [
        {
            id: 'project-1',
            title: 'Portfolio Photographe',
            img: project1,
            desc: "Projet réalisé pour un photographe et vidéaste indépendant. Conception graphique du logo de l'entreprise et des maquettes du site web. Développement du site de manière responsive pour tous les médias.",
            url: 'https://alexandre-sebille.surge.sh/',
        },
    ]

    const ProjectCard = ({project}) => {

        const openUrl = (url) => {
            window.open(url, '_blank', 'noreferrer');
        }

        return (
            <div className='project-card'>
                <div className="project-card-header" style={{backgroundImage: `url(${project.img})`}}>
                    <div className="project-card-title">
                        <p>{project.title}</p>
                    </div>
                </div>
                <div className="project-card-body">
                    <p>{project.desc}</p>
                </div>
                <Button size='small' className='project-card-button' onClick={() => openUrl(project.url)}>Aller vers le site</Button>
            </div>
        )
    }

    return (
        <section id='projects'>
            <Typography variant='h3'>Mes projets</Typography>
            <div className="projects-container">
                {projects.map((project, index) => (<ProjectCard key={index} project={project} />))}
            </div>
        </section>
    );
}

export default Projects;