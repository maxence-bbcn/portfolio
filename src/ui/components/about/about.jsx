import { Button, Typography } from "@mui/material";
import "./about.css";
import "../../../index.css";
import cv from "../../assets/Maxence Barbançon.pdf";
import aboutPicture from "../../assets/images/about.webp";
import aboutPictureS from "../../assets/images/about-s.webp";
import aboutPictureM from "../../assets/images/about-m.webp";
import aboutPictureLg from "../../assets/images/about-lg.webp";
import aboutPictureXl from "../../assets/images/about-xl.webp";

const About = () => {
    const contentOnXLScreen =
        "Bonjour, je suis Maxence Barbançon, diplômé de l'Université de Technologie de Troyes en tant qu'ingénieur en informatique et systèmes d'information. ";
    const content =
        "Depuis le brouillon d'idées sur une feuille blanche jusqu'à la création du produit fini : j'aime réaliser des projets en tous genres ! Mes compétences dans les technologies du web et du design graphique me permettent de concevoir des projets esthétiques, maintenables et évolutifs qui sauront répondre à vos besoins présents et futurs.";

    return (
        <section id="about">
            <div className="container--about">
                <div className="header--about">
                    <Typography variant="subtitle1">Qui suis-je ?</Typography>
                    <Typography variant="h3">
                        Je suis Maxence Barbançon, freelance{" "}
                        <span>passionné</span>
                    </Typography>
                </div>
                <div className="picture-container">
                    <img
                        srcSet={`${aboutPicture} 350w, ${aboutPictureS} 600w, ${aboutPictureM} 900w, ${aboutPictureLg} 1200w, ${aboutPictureXl} 1536w`}
                        src={aboutPicture}
                        alt="about picture"
                        className="picture"
                        loading="lazy"
                        width={219}
                        height={132}
                    />
                </div>
                <div className="body-container--about">
                    <p className="content--xl">{contentOnXLScreen}</p>
                    <p>{content}</p>
                    <a href={cv} target="_blank" rel="noreferrer">
                        <Button>Télécharger mon CV</Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
