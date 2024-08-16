// status in : 0 (not started), 1 (in progress), 2 (done)

const useProjects = () => {
    return [
        {
            title: "Portfolio d'un photographe et vidéaste",
            status: 2,
            techs: ["Design", "React JS", "Node JS"],
            clientName: "Alexandre Sebille",
            clientDesc:
                "Alexandre est un photographe et vidéaste indépendant. Il réalise de nombreux projets dans le domaine sportif que l'on peut retrouver sur sa chaîne youtube. Il travaille également pour des particuliers et professionnels.",
            desc: "Lors de ce projet, j'ai réalisé le logo, le design graphique du site ainsi que le développement de celui-ci. Pour être toujours sûr d'aller dans la bonne direction, nous avons travaillé conjointement avec Alexandre pour valider les différents milestones du projet lors de réunions.",
            images: ["/alexandreSebille/alexandre_sebille_1.png"],
            externalLink: "https://alexandre-sebille.surge.sh/",
        },
        {
            title: "Site e-commerce d'une boutique de jeux",
            status: 1,
            techs: ["Design", "React JS", "Node JS"],
            clientName: "Univers Kids",
            clientDesc:
                "Univers Kids est une boutique de jeux de société et jeux de rôles troyenne. Michaël, son fondateur, est un passionné de jeux depuis plusieurs années. Il organise de nombreux événements sur Troyes autour du jeux de rôles.",
            desc: "Michaël m'a décrit son besoin d'avoir un site e-commerce performant et esthétique ainsi qu'un accès administrateur lui permettant de gérer son stock. Pour mener à bien cette mission, j'ai designé un site client et un site admnistrateur. En plus de ces deux sites, j'ai développé une API en Node JS permettant de gérer son stock facilement et rapidement.",
            images: [],
        },
    ];
};

export default useProjects;
