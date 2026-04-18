import Title from './Title';

const About = () => {
  const skills = [
    "React", "JavaScript", "HTML / CSS",
    "Tailwind", "Python", "Git", "TypeScript", "Figma"
  ];

  const stats = [
    { number: "5+", label: "Projets réalisés" },
    { number: "3+", label: "Années d'expérience" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Passion" },
  ];

  return (
    <section id="apropos" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
          Qui suis-je ?
        </p>
        <h2 className="text-4xl font-bold mb-12">
          À <span className="text-accent">propos</span> de moi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Colonne gauche — avatar + stats */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-accent flex items-center justify-center text-6xl font-bold text-accent bg-base-200 mb-8">
              F
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-base-200 rounded-xl p-4 text-center border border-accent/10">
                  <p className="text-accent text-xl font-bold">{stat.number}</p>
                  <p className="text-base-content/60 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite — bio + skills + boutons */}
          <div>
            <div className="inline-flex items-center gap-2 bg-success/10 border border-success/30 text-success text-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Disponible pour des projets
            </div>

            <p className="text-base-content/80 text-base leading-relaxed mb-6">
              Je m'appelle Freud, développeur web basé à Parakou.
              Passionné par la création d'interfaces modernes et performantes,
              je maîtrise React, JavaScript et Tailwind pour transformer
              vos idées en expériences digitales élégantes.
            </p>

            <p className="text-base-content/40 text-xs tracking-widest uppercase mb-3">
              Stack technique
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-accent/10 border border-accent/40 text-accent text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="btn btn-accent">
                Contactez-moi
              </a>
              <a href="/cv.pdf" download className="btn btn-outline btn-accent">
                Télécharger CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;