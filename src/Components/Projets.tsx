const projets = [
  {
    title: "Bot Telegram intelligent",
    description: "Bot qui parcourt automatiquement tes canaux Telegram pour retrouver n'importe quel contenu en quelques secondes. Fini le défilement sans fin.",
    tags: ["Python", "Telegram API"],
    status: "En cours",
    github: "",
  },
  {
    title: "App de location — Guest Houses",
    description: "Application mobile de mise en relation entre propriétaires de guest houses et locataires, avec système de publicité intégré.",
    tags: ["Flutter", "Dart"],
    status: "En cours",
    github: "",
  },
  {
    title: "Gestion de stock",
    description: "Application de suivi et gestion des stocks avec tableau de bord et alertes de seuil.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "En cours",
    github: "",
  },
  {
    title: "Portfolio v1",
    description: "Première version de mon portfolio personnel, point de départ de mon apprentissage du développement frontend.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "En cours de finition",
    github: "",
  },
  {
    title: "Portfolio v2",
    description: "Version actuelle de mon portfolio, construite avec React et Tailwind CSS. Déployée sur Vercel.",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    status: "En cours",
    github: "https://github.com/Freudbenvic/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
          Ce que je construis
        </p>
        <h2 className="text-4xl font-bold mb-12">
          Mes <span className="text-accent">projets</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet) => (
            <div
              key={projet.title}
              className="bg-base-200 rounded-xl p-6 border border-accent/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold">{projet.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    projet.status === "Terminé"
                      ? "bg-success/10 text-success border border-success/30"
                      : "bg-warning/10 text-warning border border-warning/30"
                  }`}>
                    {projet.status}
                  </span>
                </div>
                <p className="text-base-content/70 text-sm mb-4">
                  {projet.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.tags.map((tag) => (
                    <span key={tag} className="bg-base-300 text-base-content/60 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
             {projet.github && (
                <a                        
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-accent mt-2 w-full">
                     Voir sur GitHub
                </a>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;