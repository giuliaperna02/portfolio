import graduationPortrait from "../../assets/giulia_graduation.png";
import museumPhotography from "../../assets/giulia_photo_museum.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  const items = [
    {
      img: museumPhotography,
      alt: "Giulia photographing an exhibition",
      caption: "📷 At the exhibition – curatorial documentation",
    },
    {
      img: graduationPortrait,
      alt: "Giulia graduation day",
      caption: "🎓 Bachelor's Degree – University of Bologna",
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          📸 Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map(({ img, alt, caption }, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-sm">{caption}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
