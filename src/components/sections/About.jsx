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
            🧑‍🎨 About Me
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
                  <span className="text-sm text-gray-400">2016 – 2021</span>
                </li>
              </ul>
            </div>

            {/* Work & Projects */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🧾 Experiences</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                
                <li>
                  <strong>Curator at the historical museum</strong>
                  <br />
                  <span className="text-sm text-gray-400">Museo della Battaglia del Montello, Nervesa della Battaglia (TV), Ongoing</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Museum exhibition of artifacts from the Battle of Montello and creation of special display cases.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Food & Beverage Attendant at Music Events</strong>
                  <br />
                  <span className="text-sm text-gray-400">Unipol Arena, Casalecchio di Reno (BO)</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <p className="text-sm text-gray-400">
                      Provided food and beverage service during large-scale music events.
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Internship – Museo degli Alpini</strong>
                  <br />
                  <span className="text-sm text-gray-400">Conegliano (TV), 2024</span>
                  <div className="mt-2 pl-4 border-l-2 border-pink-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Catalogued WWI and WWII historical artifacts.</li>
                      <li>Drafted curatorial notes and designed exhibition concepts.</li>
                      <li>
                        Interviewed and featured on{" "}
                        <a
                          href="https://www.qdpnews.it/comuni/conegliano/da-bologna-alla-marca-per-il-tirocinio-universitario-giulia-racconta-la-sua-avventura-al-museo-degli-alpini/?fbclid=IwZXh0bgNhZW0CMTEAAR3v0Kuue33DYe2_8wFv3W60OUnIrwtveFSvSrygRPlXLzXDSHUXz9mfNSo_aem_-z0Nq3KRvfGZ4q-DbmgXAQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 underline underline-offset-4"
                        >
                          Qdp News
                        </a>
                        .
                      </li>
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
