import { Button, Typography } from "@mui/material";
import "./hero.css";
import heroImg from "../../assets/images/profil.webp";
import heroImgS from "../../assets/images/profil-s.webp";
import heroImgM from "../../assets/images/profil-m.webp";
import heroImgLg from "../../assets/images/profil-lg.webp";
import heroImgXl from "../../assets/images/profil-xl.webp";
import { scroller } from "react-scroll";

const Hero = () => {
    const handleScroll = (element) => {
        scroller.scrollTo(element, {
            duration: 1250,
            delay: 50,
            smooth: true,
            offset: -75,
        });
    };

    return (
        <div className="container--hero">
            <div className="body-container--hero">
                <div className="header--hero">
                    <Typography variant="h1">Développeur fullstack</Typography>
                    <Typography variant="h2">Maxence Barbançon</Typography>
                </div>
                <div className="left-col">
                    <div className="quote-container">
                        <div>
                            <p className="quote">
                                Les détails font la perfection et la perfection
                                n{`'`}est pas un détail
                            </p>
                        </div>
                        <p className="quote">- Leonard De Vinci -</p>
                    </div>
                    <Button onClick={() => handleScroll("contact")}>
                        Contactez-moi
                    </Button>
                </div>
                <div className="right-col">
                    <img
                        srcSet={`${heroImg} 350w, ${heroImgS} 600w, ${heroImgM} 900w, ${heroImgLg} 1200w, ${heroImgXl} 1536w`}
                        src={heroImgXl}
                        alt="profil picture"
                        loading="lazy"
                        width={200}
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
