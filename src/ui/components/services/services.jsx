import { Typography } from '@mui/material';
import './services.css'
import DesignIcon from '../../assets/pen-tool.svg';
import MonitorIcon from '../../assets/monitor.svg';
import SmartphoneIcon from '../../assets/smartphone.svg';
import { useState } from 'react';

const Services = () => {
    
    const services = [
        {
            title: 'Envie de designer votre projet ?',
            type: 'Design',
            typeActive: 'Design',
            img: DesignIcon,
            summary: 'Vous avez une idée, mais vous ne savez pas par où commencer ? Le design graphique et conceptuel permet de donner vie à votre projet !',
            desc1: "Les wireframes et les mockups permettent de se concentrer davantage sur l'expérience utilisateur et l'esthétique d'une application. Ils sont essentiels dans la réalisation de votre projet et forment une base solide pour le développement.",
            desc2: 'Ainsi, mes connaissances en design graphique et ma maîtrise des logiciels Adobe et de Figma me permettent de créer des maquettes basses et hautes fidélités pour donner vie à vos projets.'
        },
        {
            title: "Besoin d'un site web pour votre activité ?",
            type: 'Développement web',
            typeActive: 'Dév. web',
            img: MonitorIcon,
            summary: "Vous désirez plus de visibilité pour votre marque ou votre entreprise ? Le développement d'un site web vitrine ou e-commerce peut être la solution !",
            desc1: "Qu'il s'agisse d'un site web vitrine ou e-commerce ou d'une application web spécifique, le développement d'un tel projet offre de nouvelles opportunités pour votre activité.",
            desc2: "Venant s'appuyer sur les maquettes designées en amont, le développement peut se faire via différentes technologies du web comme HTML, CSS et Javascript ou via des framework comme React ou Node.js pour les projets les plus complexes.",
        },
        {
            title: 'Vous souhaitez intégrer le marché des applications mobiles ?',
            type: 'Développement mobile',
            typeActive: 'Dév. mobile',
            img: SmartphoneIcon,
            summary: "Vous voulez faciliter l'accès à votre service ou développer une idée originale pour toucher un public large ? Créer une application mobile pourrait être un choix stratégique !",
            desc1: "Développer votre projet via une application mobile peut vous permettre d'étendre votre base d'utilisateurs ou de fidéliser ceux que vous possédez déjà !",
            desc2: "La conception d'une application cross-platform grâce à React Native permet de déployer votre projet sur les stores de Google et d'Apple le plus rapidement possible.",
        }
    ]

    const [activeCard, setActiveCard] = useState(services[0]);

    const Card = ({type, typeActive, img, summary}, index) => {

        const handleClick = () => {
            setActiveCard(services[index]);
            const items = document.getElementsByClassName('button--service');
            for (const item of items) item.classList.remove('button--service--selected');
            document.getElementById(index).classList.add('button--service--selected');
        }

        return (
            <div key={index} className={index == 0 ? 'button--service button--service--selected' : 'button--service'} id={index} onClick={handleClick}>
                <div className='button-header--service'>
                    <Typography variant='h4' className='type'>{type}</Typography>
                    <Typography variant='h4' className='type--mobile'>{typeActive}</Typography>
                    <img src={img}/>
                </div>
                <p className='summary'>{summary}</p>
            </div>
        );
    }


    return (
        <section id='services'>
            <Typography variant='h3'>Mes services</Typography>
            <div className='container--services'>
                <div className='button-container--services'>
                    {services.map((service, index) => Card(service, index))}
                </div>
                <div className='service-item--selected'>
                    <Typography variant='h5' className='title'>{activeCard.title}</Typography>
                    <p className='summary'>{activeCard.summary}</p>
                    <p className='desc1'>{activeCard.desc1}</p>
                    <p className='desc2'>{activeCard.desc2}</p>
                </div>
                
            </div>
        </section>
    );
}

export default Services;