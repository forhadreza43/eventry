import Image from "next/image";
import ActionButtons from "../ActionButtons";

const HeroSection = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src="/events/google-io-2023-1.png"
          alt="Event 1"
          className="h-[450px] mx-auto object-cover"
          width={1200}
          height={450}
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">Google I/O Extended</h1>
          <p className="text-[#9C9C9C] text-base mt-1">
            Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
          </p>
          <div className="text-[#737373] text-sm mt-1">
            <span>1k Interested</span>
            <span className="mx-2">|</span>
            <span>40K Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
