import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const Curatorial = [
    "Exhibition Design", 
    "Collections Management", 
    "Inventory & Cataloguing", 
    "Temporary and Permanent Exhibitions", 
    "Heritage Enhancement", 
    "Art Curation"
  ];

  const Communication = [
    "Public Speaking", 
    "Team Collaboration", 
    "Language Mediation", 
    "Cultural Sensitivity", 
    "Museum Proposal Writing"
  ];

  const Languages = [
    "Italian (Native)", 
    "French (Advanced)", 
    "English (Advanced)", 
    "Spanish (Intermediate)"
  ];

  const PersonalTraits = [
    "Dedication & Perseverance (Karate Discipline)", 
    "Adaptability", 
    "Time Management", 
    "Creative Thinking", 
    "Empathy & Motivation"
  ];

  const Management = [
    "Basic Accounting & Financial Statements",
    "Cost Analysis & Budget Awareness",
    "SWOT Analysis",
    "Cultural Project Evaluation",
    "Economic Sustainability of Cultural Projects"
  ];


  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
            🛠️ Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Curatorial Skills */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Curatorial & Museum</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Curatorial.map((skill, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Communication & Public Engagement</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Communication.map((skill, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Languages.map((lang, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Economic & Management */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Economic & Management</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {Management.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Traits */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Personal Traits</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {PersonalTraits.map((trait, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
