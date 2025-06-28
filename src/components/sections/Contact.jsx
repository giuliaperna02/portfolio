import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            📬 Contact
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            📧 Personal Email:{" "}
            <a href="mailto:pernagiulia02@gmail.com" className="text-pink-400 hover:underline">
              pernagiulia02@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            🎓 University Email:{" "}
            <a href="mailto:giulia.perna@studio.unibo.it" className="text-pink-400 hover:underline">
              giulia.perna@studio.unibo.it
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📞 Mobile Phone:{" "}
            <a href="tel:+39 3775350315" className="text-pink-400 hover:underline">
              +39 3775350315
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/giulia-perna-578a25335"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              linkedin.com/in/giulia-perna
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/jennyof.oldstone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline"
            >
              @giulia.perna
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            🌍 Location: Bologna, Italy
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
