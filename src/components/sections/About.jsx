import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            🖼️ About Me
          </h2>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>MA in Arts, Museology & Curatorship</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Bologna, Italy</span>
                  <br />
                  <span className="text-sm text-gray-400">Ongoing</span>
                </li>
                <li>
                  <strong>BA in Cultural Heritage</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Bologna – Ravenna</span>
                  <br />
                  <span className="text-sm text-gray-400">2021 – 2024</span>
                </li>
                <li>
                  <strong>Technical Diploma in Tourism</strong>
                  <br />
                  <span className="text-sm text-gray-400">ITC Manfredi-Tanari, Bologna</span>
                  <br />
                  <span className="text-sm text-gray-400">2015 – 2021</span>
                </li>
              </ul>
            </div>

            {/* Work & Projects */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🧾 Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Internship – Museo degli Alpini</strong>
                  <br />
                  <span className="text-sm text-gray-400">Conegliano, 2024</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Catalogued WWI and WWII historical artifacts.</li>
                      <li>Drafted curatorial notes and designed exhibition concepts.</li>
                      <li>Interviewed and featured on Qdp News for her contribution.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Language Internship – Babel Language Projects</strong>
                  <br />
                  <span className="text-sm text-gray-400">Bournemouth, UK – 2019</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Strengthened English communication through immersive language labs.
                    </p>
                  </div>
                </li>

                <li>
                  <strong>Office Internship – UniSalute</strong>
                  <br />
                  <span className="text-sm text-gray-400">Bologna – 2019</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Provided support in customer service and document archiving as part of a PCTO school program.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
