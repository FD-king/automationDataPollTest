import bannerStackImage from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 w-full h-105 pb-28">
      <div className="col-span-7 flex flex-col justify-center items-start">
        <h1 className="font-extrabold text-[60px] text-[#0F172A] leading-none pb-10">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] text-[18px] w-142.75 h-22 pb-25">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div>
          <button className="btn btn-active bg-linear-to-r from-[#F97316] to-[#EC4899] w-42 h-10 border-radius-[8px] mr-3 border-0">
            Explore Technologies
          </button>
          <button className="btn btn-neutral btn-outline bg-[#FFFFFF] text-[#374151] w-42.5 h-10 border-radius-[8px] border-[#E5E7EB]">
            Learn More
          </button>
        </div>
      </div>
      <div className="col-span-5 flex justify-end">
        <img src={bannerStackImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
