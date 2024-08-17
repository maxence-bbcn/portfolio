import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Divider, Drawer, IconButton } from "@mui/material";
import "./toolbar.css";
import { scroller } from "react-scroll";
import MailIcon from "../../assets/icons/mail.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import logo from "../../assets/icons/logo.svg";

const Toolbar = () => {
    const links = [
        {
            url: "about",
            text: "À propos",
        },
        {
            url: "services",
            text: "Mes services",
        },
        {
            url: "projects",
            text: "Mes projets",
        },
        {
            url: "contact",
            text: "Contact",
        },
    ];

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const Links = ({ className }) => {
        const handleScroll = (element) => {
            scroller.scrollTo(element, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -75,
            });
        };

        return (
            <div
                className={className}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <div className="links-container">
                    {links.map((link, i) => (
                        <p key={i} onClick={() => handleScroll(link.url)}>
                            {link.text}
                        </p>
                    ))}
                </div>
                <div className="socials-container">
                    <Divider sx={{ display: { md: "none" } }} />
                    <div className="socials">
                        <a
                            href="mailto:maxence.barbancon@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={MailIcon} alt="mail icon" />
                        </a>
                        <a
                            href="https://fr.linkedin.com/in/maxence-barban%C3%A7on-457359193?original_referer=https%3A%2F%2Fwww.google.com%2F"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={LinkedInIcon} alt="LinkedIn icon" />
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="toolbar">
            <img src={logo} alt="logo" className="logo" />
            <Links className="links" />
            <IconButton
                aria-label="menu"
                onClick={toggleDrawer(!drawerOpen)}
                sx={{
                    color: "white",
                    display: { xs: "block", md: "none" },
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                PaperProps={{
                    sx: {
                        width: { xs: "50%", sm: "30%", md: "0%" },
                    },
                }}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "space-between",
                }}
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                variant="temporary"
            >
                <Links className="links links--mobile" />
            </Drawer>
        </div>
    );
};

export default Toolbar;
