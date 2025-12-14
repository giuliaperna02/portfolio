import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Museo della Battaglia del Montello – Nervesa della Battaglia",
      github: null,
      description:
        "Curatorial and exhibition project for the Museo della Battaglia del Montello, founded by the Battaglia del Solstizio Historical and Cultural Association. Responsible for drafting museum templates, technical wall texts, exhibition layout design, and collection inventorying. The museum was inaugurated in September 2025.",
      tech: [
        "Museum Design",
        "Exhibition Setup",
        "Technical Wall Texts",
        "Inventory & Cataloguing",
        "Institutional Curation",
      ],
    },
    {
      title: "Cultural Mediation and Exhibition at Palazzo Poggi",
      github: null,
      description:
        "Designed and conducted mediation activities for permanent and temporary exhibitions at Palazzo Poggi, part of the University Museum System of Bologna. Curated multilingual experiences tailored for diverse audiences, combining historical depth and visual engagement.",
      tech: [
        "Curation",
        "Exhibition Mediation",
        "Public Engagement",
        "Multilingual Support",
      ],
    },
    {
      title: "Mediation and Cataloguing at Museo Civico Medievale",
      github: null,
      description:
        "Managed and catalogued museum collections using internal documentation systems. Delivered interpretive mediation for visitors and contributed to temporary exhibition updates, focusing on medieval artifacts and narrative-driven cultural storytelling.",
      tech: [
        "Cataloguing",
        "Inventory Management",
        "Storytelling",
        "Documentation Systems",
      ],
    },
    {
      title: "Contemporary Art Mediation – MAMbo and Villa delle Rose",
      github: null,
      description:
        "Facilitated public engagement with contemporary artworks through curated visits, educational workshops, and interactive formats. Supported exhibitions by artists such as Takako Saito and contributed to exhibition logistics and outreach strategies.",
      tech: [
        "Contemporary Art",
        "Educational Mediation",
        "Workshop Design",
        "Exhibition Support",
      ],
    },
    {
      title: "Metamorphosis",
      github: null,
      description:
        "Conceptual curatorial project exploring transformation as a cultural and biological process. Designed as a fictional exhibition intertwining science, art, and technology to investigate identity, the body, and societal change through interdisciplinary narratives.",
      tech: [
        "Conceptual Curation",
        "Exhibition Narrative",
        "Science & Art Dialogue",
        "Thematic Research",
      ],
    },
    {
      title: "La Ville",
      github: null,
      description:
        "Group curatorial project conceived for a physical exhibition at the Supino Library (University of Bologna). The project compares Superstudio’s Ideal Cities with Italo Calvino’s Invisible Cities, reflecting on dwelling, urban imagination, and the perception of space.",
      tech: [
        "Urban Studies",
        "Exhibition Theory",
        "Collective Curation",
        "Spatial Interpretation",
      ],
    },
    {
      title: "Between Hell and Paradise: The Historic Condemnation of Women",
      github: null,
      description:
        "Curatorial project developed as a visual sequence of images exploring the historical representation of women in art. The exhibition examines the dichotomy between sanctification and demonisation through painting and iconographic analysis.",
      tech: [
        "Iconographic Analysis",
        "Visual Curation",
        "Gender Studies",
        "Art History",
      ],
    },
    {
      title: "90° Degrees",
      github: null,
      description:
        "Exhibition project investigating the relationship between humans and nature through the symbolic use of the right angle. Organised into three rooms and designed for a bidirectional experience, guiding visitors from natural micro-details to large-scale urban interventions.",
      tech: [
        "Exhibition Design",
        "Spatial Narrative",
        "Environmental Humanities",
        "Visitor Experience",
      ],
    },
    {
      title: "Translation and Cultural Adaptation of Scientific Content",
      github: null,
      description:
        "Translated scientific and educational material between Italian and French for use in museum exhibits and guided tours. Ensured linguistic fidelity and cultural sensitivity when conveying complex topics to public audiences.",
      tech: [
        "French Translation",
        "Educational Content",
        "Intercultural Communication",
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 break-words">
        <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          🏛️ Curatorial Projects
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
