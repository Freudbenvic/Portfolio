const experiences = [
  {
    period: "2023 — Présent",
    title: "Informatique de Gestion",
    lieu: "Institut Universitaire de Technologie",
    description: "Formation complète en informatique couvrant le développement web, la programmation, les réseaux et les bases de données.",
    tags: ["HTML/CSS", "JavaScript", "Python", "Java", "C++", "SQL", "Algorithmique"],
  },
];

const projets = [
  {
    title: "Bot Telegram intelligent",
    description: "Bot qui parcourt automatiquement tes canaux Telegram pour retrouver n'importe quel contenu en quelques secondes. Fini le défilement sans fin.",
    tags: ["Python", "Telegram API"],
    status: "En cours",
  },
  {
    title: "App de location — Guest Houses",
    description: "Application mobile de mise en relation entre propriétaires de guest houses et locataires, avec système de publicité intégré.",
    tags: ["Flutter", "Dart"],
    status: "En cours",
  },
  {
    title: "Gestion de stock",
    description: "Application de suivi et gestion des stocks avec tableau de bord et alertes de seuil.",
    tags: ["En cours de définition"],
    status: "En cours",
  },
  {
    title: "Portfolio v1",
    description: "Première version de mon portfolio personnel, point de départ de mon apprentissage du développement frontend.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "En cours de finition",
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
          Mon parcours
        </p>
        <h2 className="text-4xl font-bold mb-12">
          Formations & <span className="text-accent">Projets</span>
        </h2>

        <div className="mb-16">
          <p className="text-base-content/40 text-xs tracking-widest uppercase mb-6">
            Formation
          </p>
          {experiences.map((exp) => (
            <div key={exp.title} className="relative pl-6 border-l-2 border-accent">
              <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-accent" />
              <div className="bg-base-200 rounded-xl p-6 border border-accent/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                  <span className="text-accent text-sm font-medium">{exp.period}</span>
                </div>
                <p className="text-base-content/60 text-sm mb-4">{exp.lieu}</p>
                <p className="text-base-content/80 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-base-content/40 text-xs tracking-widest uppercase mb-6">
            Projets
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projets.map((projet) => (
              <div key={projet.title} className="bg-base-200 rounded-xl p-6 border border-accent/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold">{projet.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      projet.status === "Terminé"
                        ? "bg-success/10 text-success border border-success/30"
                        : projet.status === "En cours de finition"
                        ? "bg-info/10 text-info border border-info/30"
                        : "bg-warning/10 text-warning border border-warning/30"
                    }`}>
                      {projet.status}
                    </span>
                  </div>
                  <p className="text-base-content/70 text-sm mb-4">{projet.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projet.tags.map((tag) => (
                    <span key={tag} className="bg-base-300 text-base-content/60 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;