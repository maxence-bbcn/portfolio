import { Typography } from "@mui/material";
import "./services.css";

const Services = () => {
    const steps = [
        {
            title: "Apprenons à nous connaître",
            summary:
                "Pour bien travailler ensemble, il faut d’abord bien se connaître. Je vous propose de faire connaissance pendant une première réunion où nous discuterons de votre activité et de votre projet.  A l’issue de cette rencontre, je rédigerai un cahier des charges qui me permettra de vous transmettre un devis aussi précis que possible.",
            keywords: ["Réunion", "Cahier des charges", "Devis"],
        },
        {
            title: "Je design votre projet",
            summary:
                "La première des étapes pour réaliser un projet web qui vous plaît et qui plaît à vos client, c’est de concevoir un bon design. Lors d’une seconde réunion, nous aborderons et discuterons des visuels qui vous plaisent, de vos attentes et de vos goûts en matière de design afin de construire ensemble un moodboard qui vous ressemble. Je produirai ensuite des maquettes détaillées qui vous seront soumises à validation.",
            keywords: ["Moodboard", "Maquettes détaillées", "Validation"],
        },
        {
            title: "Le développement commence",
            summary:
                "On entre dans le concret ! Lors de la phase de développement, il sera important de planifier quelques réunions, selon un rythme qui vous convient, pour valider les points essentiels du projet.",
            keywords: ["Développement", "Réunions planifiées", "Validation"],
        },
        {
            title: "Votre projet est en ligne",
            summary:
                "Votre projet se termine. Il est temps de le rendre public et de le partager à vos clients ! Il faudra choisir une solution d’hébergement pour qu’il soit accessible en ligne et procéder aux derniers tests grandeur nature. \nJe propose des solutions d’hébergement et de maintenance.",
            keywords: ["Hébergement", "Tests"],
        },
        {
            title: "Et après ?",
            summary:
                "Votre projet va grandir et évoluer avec votre activité. Le maintenir et pouvoir agir rapidement en cas de panne est primordial. L’améliorer et ajouter des fonctionnalités fais également partie intégrante de sa vie. Je peux vous proposer des solutions sur-mesure pour prévoir au mieux le futur de votre projet.",
            keywords: ["Maintenance", "Amélioration"],
        },
    ];

    return (
        <section id="services">
            <div className="header--services">
                <Typography variant="h3">
                    Besoin d’un site web pour votre activité ?
                </Typography>
                <div className="container-catchphrase--services">
                    <p>
                        {
                            "Vous désirez plus de visibilité pour votre marque ou votre entreprise ? Le développement d'un site web vitrine ou e-commerce peut être la solution !"
                        }
                    </p>
                    <span>
                        Je travaille principalement avec les technologies React
                        JS et Node JS, respectivement pour le frontend et le
                        backend.
                    </span>
                </div>
            </div>
            <div className="services--step-container">
                {steps.map((step, index) => (
                    <div key={index} className={`step step--${index + 1}`}>
                        <p className="service-number">{index + 1}</p>
                        <h4>{step.title}</h4>
                        <p className="step-desc">{step.summary}</p>
                        <div className="services--keywords-container">
                            {step.keywords.map((keyword, index) => (
                                <div key={index} className="keyword">
                                    <p>{keyword}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
