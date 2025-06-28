import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Cultural Mediation and Exhibition at Palazzo Poggi",
      github: null,
      description:
        "Designed and conducted mediation activities for permanent and temporary exhibitions at Palazzo Poggi, University Museum System of Bologna. Curated multilingual experiences tailored for diverse audiences, combining historical depth and visual engagement.",
      tech: ["Curation", "Exhibition Mediation", "Public Engagement", "Multilingual Support"],
    },
    {
      title: "Mediation and Cataloging at Museo Civico Medievale",
      github: null,
      description:
        "Managed and cataloged museum collections using internal documentation systems. Delivered interpretive mediation for visitors and contributed to temporary exhibition updates, focusing on medieval artifacts and cultural storytelling.",
      tech: ["Cataloguing", "Inventory Management", "Storytelling", "Documentation Systems"],
    },
    {
      title: "Contemporary Art Mediation – MAMbo and Villa delle Rose",
      github: null,
      description:
        "Facilitated engagement with contemporary artworks through curated visits, educational workshops, and interactive formats. Supported exhibitions by artists like Takako Saito and participated in exhibition logistics and outreach strategies.",
      tech: ["Contemporary Art", "Educational Mediation", "Workshop Design", "Exhibition Support"],
    },
    {
      title: "Translation and Cultural Adaptation of Scientific Content",
      github: null,
      description:
        "Translated scientific and educational material between Italian and French for use in museum exhibits and guided tours. Ensured linguistic fidelity and cultural sensitivity in conveying complex topics to public audiences.",
      tech: ["French Translation", "Educational Content", "Intercultural Communication"],
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 break-words">
        <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          🖼️ Curatorial Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <RevealOnScroll key={idx}>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
