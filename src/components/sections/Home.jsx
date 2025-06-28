import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent leading-tight">
            Hello, I'm Giulia Perna
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I'm a passionate Italian curator and cultural project manager, with international experience in exhibition design, artistic coordination, and public engagement. I specialize in guiding artistic projects from concept to realization — shaping meaningful cultural narratives that inspire.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#home"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              About
            </a>
            <a
              href="#skills"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
