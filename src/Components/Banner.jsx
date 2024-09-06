import bannerImage from "../assets/images/banner-image.png";
import cardImg from "../assets/images/document-chart-checkmark.png";
import cardImg2 from "../assets/images/cash-fast-circle.png";
import { HiArrowLongRight } from "react-icons/hi2";
const Banner = () => {
  return (
    <div className="md:flex mx-16">
      {/* <div className="card bg-base-100 image-full w-2/3">
        <figure>
          <img src={bannerImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-5xl text-white">
            Energie, die sich lohnt. Für dich. <br /> Für dein Zuhause. <br />{" "}
            Für den Planeten.
          </p>
          <div className="card-actions justify-left">
            <button className="btn btn-primary">Jetzt entdecken</button>
          </div>
        </div>
      </div> */}
      <div className="hero bg-cover w-2/3">
        <div>
          {" "}
          <img src={bannerImage} alt="" />
        </div>

        <div className="hero-overlay bg-contain bg-opacity-40"></div>
        <div className="">
          <p className="text-5xl text-white">
            Energie, die sich lohnt. Für dich. <br /> Für dein Zuhause. <br />{" "}
            Für den Planeten.
          </p>
          <button className="bg-white rounded-2xl text-black px-5 py-1 mt-40">
            Jetzt entdecken
          </button>
        </div>
      </div>
      <div className="w-1/3 ml-6">
        <button className="bg-black text-white rounded-xl text-sm px-6 py-2 mt-10 mb-6">
          Über UNS
        </button>
        <p>
          Egal, ob du für dein Zuhause einen günstigen Stromtarif nutzen <br />{" "}
          oder deinen eigenen erzeugten Solarstrom verkaufen möchtest <br /> -
          mit LUOX Energy unterstützen wir dich dabei, dir <br />{" "}
          Preisschwankungen am grünen Energiemarkt zunutze zu <br />{" "}
          Mindestvertragslaufzeit.
        </p>
        <span className="text-black mt-2 mb-2 text-2xl flex items-center">
          Mehr erfahren <HiArrowLongRight />
        </span>
        <div className="md:flex gap-2">
          <div className="card bg-yellow-200">
            <div className="card-body justify-items-start pl-2 pr-2 mb-2 text-black">
              <div>
                {" "}
                <img src={cardImg} alt="" />
              </div>
              <p className="mt-10">
                Unabhängig und Ohne <br /> transparent.
              </p>
            </div>
          </div>
          <div className="card bg-gray-400">
            <div className="card-body justify-items-start pl-2 pr-2 text-black">
              <div>
                {" "}
                <img src={cardImg2} alt="" />
              </div>
              <p className="mt-10">
                Ohne versteckte Ohne <br /> Kosten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
