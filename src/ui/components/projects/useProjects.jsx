// status in : 0 (not started), 1 (in progress), 2 (done)

const useProjects = () => {
    return [
        {
            title: "Portfolio d'un photographe et vidéaste",
            status: 2,
            techs: ["Design", "React JS", "Node JS"],
            clientName: "Alexandre Sebille",
            clientDesc:
                "Alexandre est un photographe et vidéaste indépendant. Il réalise de nombreux projets dans le domaine sportif que l'on peut retrouver sur sa chaîne youtube. Il travaille également pour des particuliers et des professionnels.",
            desc: "Lors de ce projet, j'ai réalisé le logo, le design graphique du site ainsi que le développement de celui-ci. Pour être toujours sûr d'aller dans la bonne direction, nous avons travaillé conjointement avec Alexandre pour valider les différents milestones du projet lors de réunions.",
            images: ["/alexandreSebille/alexandre_sebille_1.webp"],
            externalLink: "https://alexandre-sebille.surge.sh/",
        },
        {
            title: "Site e-commerce d'une boutique de jeux",
            status: 2,
            techs: ["Design", "React JS", "Node JS"],
            clientName: "Univers Kids",
            clientDesc:
                "Univers Kids est une boutique de jeux de société et jeux de rôles troyenne. Michaël, son fondateur, est un passionné de jeux depuis plusieurs années. Il organise de nombreux événements sur Troyes autour du jeux de rôles.",
            desc: "Michaël m'a décrit son besoin d'avoir un site e-commerce performant et esthétique ainsi qu'un accès administrateur lui permettant de gérer son stock. Pour mener à bien cette mission, j'ai conçu le design d'un site client et d'un site admnistrateur. En plus du développement de ces deux sites, j'ai développé une API en Node JS permettant de gérer son stock facilement et rapidement.",
            images: [
                "/universKids/homepage_client_1.webp",
                "/universKids/products_client_1.webp",
                "/universKids/homepage_admin_1.webp",
            ],
            externalLink: "https://www.univers-kids-troyes.com/",
        },
        {
            title: "Site de location de mobilier pour des événements",
            status: 1,
            techs: ["Design", "Vue JS", "Node JS"],
            clientName: "Deflorenne Location",
            clientDesc:
                "Deflorenne Location est une entreprise qui loue du mobiler comme des tables, chaises et tonnelles à des particulier ou à des entreprises voulant organiser des événements.",
            desc: "L'objectif de ce projet est de proposer aux clients un catalogue intuitif des produits mis en location et de leur permettre de générer des devis automatiquement. Pour ce projet, j'ai réaliser le design ainsi que le développement du site client.",
            images: [],
        },
    ];
};

export default useProjects;
