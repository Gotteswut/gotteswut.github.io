import React from "react";

function ScrollSectionHeroIMG({ index, sectioncontent }) {
  return (
    <section
      key={index}
      className="h-[100%] w-full flex flex-col items-center justify-center px-4 md:px-20 sm:px-10"
    >
      {/* Hero Image */}
      <div className="w-full max-w-6xl h-64 sm:h-96 md:h-[40vh] lg:h-[65vh] rounded-2xl overflow-hidden shadow-xl border border-zinc-700 ">
        <img
          src={sectioncontent.image}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Text unter dem Bild */}
      <div className="mt-6 text-center w-[70%]">
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-300 font-krub">
          {sectioncontent.text}
        </p>
      </div>
    </section>
  );
}

export default ScrollSectionHeroIMG;
