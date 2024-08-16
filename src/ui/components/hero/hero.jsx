import { Button, Typography } from "@mui/material";
import "./hero.css";
import heroImg from "../../assets/images/profil.webp";
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
                    <img src={heroImg} alt="profil picture" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
