import './mentionsLegales.css';
import { Typography } from '@mui/material';

const MentionsLegales = () => {

    const titles = [
        "Article 1 - L'éditeur",
        "Article 2 - L'hébergeur",
        "Article 3 - Accès au site",
        "Article 4 - collecte des données",
    ]

    const intro = "Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l’ « Utilisateur », du site https://maxence-barbancon.netlify.app , ci-après le « Site », les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».";
    const editor = "L'édition du Site est assurée par Maxence Barbançon EI Micro-entreprise au capital de 0 euros, immatriculée au Registre du Commerce et des Sociétés de Troyes sous le numéro 98243734500019 dont le siège social est situé au 2 rue valtat 10000 Troyes,";
    const email = "Adresse e-mail : maxence.barbancon@gmail.com."
    const director = "Le Directeur de la publication est Maxence Barbançon, ci-après l'« Editeur »."

    const hebergeur = "L'hébergeur du Site est la société Netlify, Inc., dont le siège social est situé au  512 2nd Street, Suite 200 San Francisco, CA 94107, États-Unis, avec l’adresse mail de contact : support@netlify.com."
    const access = "Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance."
    const responsability = "En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable."

    const data = "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil."

    return (
        <div className='legal-container'>
            <div className="legal-header">
                <Typography variant='h2' className='legal-title'>Mentions Légales</Typography>
                <Typography className="legal-validity-date">En vigueur au 18/01/2024</Typography>
            </div>
            <div className="legal-body">
                <Typography>{intro}</Typography>
                <Typography variant='h3'>{titles[0]}</Typography>
                <Typography>{editor}</Typography>
                <Typography>{email}</Typography>
                <Typography>{director}</Typography>
                <Typography variant='h3'>{titles[1]}</Typography>
                <Typography>{hebergeur}</Typography>
                <Typography variant='h3'>{titles[2]}</Typography>
                <Typography>{access}</Typography>
                <Typography>{responsability}</Typography>
                <Typography variant='h3'>{titles[3]}</Typography>
                <Typography>{data}</Typography>
            </div>
        </div>
    )
}

export default MentionsLegales;