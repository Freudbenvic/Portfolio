import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
          Travaillons ensemble
        </p>
        <h2 className="text-4xl font-bold mb-4">
          Me <span className="text-accent">contacter</span>
        </h2>
        <p className="text-base-content/60 mb-12">
          Tu as un projet en tête ou une opportunité à partager ? N'hésite pas à m'écrire !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Formulaire */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm text-base-content/60 mb-1 block">Nom</label>
              <input
                type="text"
                placeholder="Ton nom"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-sm text-base-content/60 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="ton@email.com"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="text-sm text-base-content/60 mb-1 block">Message</label>
              <textarea
                placeholder="Ton message..."
                className="textarea textarea-bordered w-full h-32"
              />
            </div>
            <button className="btn btn-accent w-full">
              <Mail size={18} />
              Envoyer le message
            </button>
          </div>

          {/* Infos de contact */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <p className="text-base-content/40 text-xs tracking-widest uppercase mb-4">
                Me retrouver sur
              </p>
              <div className="flex flex-col gap-3">
                
                 <a href="https://github.com/Freudbenvic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base-content/70 hover:text-accent transition-colors"
                >
                  <Github size={20} />
                  github.com/Freudbenvic
                </a>
                
                  <a href="mailto:freudbenvic@gmail.com"
                  className="flex items-center gap-3 text-base-content/70 hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  freudbenvic@gmail.com
                </a>
                
                  <a href="https://www.linkedin.com/in/freud-joslin-bossou-299957363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base-content/70 hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                  linkedin.com/in/freud-joslin-bossou
                </a>
                <a href="https://wa.me/22940122300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base-content/70 hover:text-accent transition-colors">
                    <MessageCircle size={20} />
                    WhatsApp
                    </a>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-4 border border-accent/10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                <span className="text-success text-sm font-medium">Disponible</span>
              </div>
              <p className="text-base-content/60 text-sm">
                Ouvert aux opportunités freelance et aux collaborations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;