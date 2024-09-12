import bannerImage from "../assets/images/Banner-img.jpg";
import cardImg from "../assets/images/document-chart-checkmark.png";
import cardImg2 from "../assets/images/cash-fast-circle.png";
import { HiArrowLongRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="md:flex mx-4 md:mx-16">
      {/* Banner Image and Text */}
      <div className="relative w-full md:w-2/3 h-64 md:h-auto mb-8 md:mb-0 my-4">
        {/* Hero Image */}
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover rounded-xl"
        />
        {/* Overlay and Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-4 md:p-8">
          <p className="text-2xl md:text-5xl text-white">
            Energie, die sich lohnt. Für dich. <br /> Für dein Zuhause. <br />{" "}
            Für den Planeten.
          </p>
          <button className="bg-white rounded-2xl text-black px-4 py-2 mt-4 md:mt-10">
            Jetzt entdecken
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/3 md:ml-6">
        {/* About Button */}
        <button className="bg-black text-white rounded-xl text-sm px-4 py-2 mb-6 md:mt-10">
          Über UNS
        </button>
        {/* Description */}
        <p className="text-sm md:text-base mb-4">
          Egal, ob du für dein Zuhause einen günstigen Stromtarif nutzen <br />{" "}
          oder deinen eigenen erzeugten Solarstrom verkaufen möchtest <br /> -
          mit LUOX Energy unterstützen wir dich dabei, dir <br />{" "}
          Preisschwankungen am grünen Energiemarkt zunutze zu <br />{" "}
          Mindestvertragslaufzeit.
        </p>
        {/* Call to Action */}
        <span className="text-black text-xl md:text-2xl flex items-center mb-6">
          Mehr erfahren <HiArrowLongRight className="ml-2" />
        </span>

        {/* Cards Section */}
        <div className="md:flex gap-4">
          {/* First Card */}
          <div className="bg-yellow-200 p-4 rounded-xl mb-4 md:mb-0 flex-1">
            <img src={cardImg} alt="Card 1" className="w-12 h-12 mb-4" />
            <p className="text-black text-sm md:text-base">
              Unabhängig und Ohne <br /> transparent.
            </p>
          </div>
          {/* Second Card */}
          <div className="bg-gray-400 p-4 rounded-xl flex-1">
            <img src={cardImg2} alt="Card 2" className="w-12 h-12 mb-4" />
            <p className="text-black text-sm md:text-base">
              Ohne versteckte Ohne <br /> Kosten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
