import Image from "next/image";
import heroImage from "@/public/assets/landpage.png";
import diamond from "@/public/assets/diamond.png";
import hexagon from "@/public/assets/hexagon.png";
import hexagonOutlined from "@/public/assets/hexagon-outline.png";

export default function HeroImage() {
  return (
    <div className="relative w-full h-[600px] hidden lg:block">
      <Image
        className="absolute inset-0 object-contain"
        src={heroImage}
        alt="Satiscript dashboard preview"
        layout="fill"
      />

      <Image
        className="absolute left-[3%] bottom-[33%] animate-bounce-slow delay-1000"
        src={diamond}
        width={25}
        height={25}
        alt="Decorative diamond shape"
      />

      <div className="absolute left-[77%] bottom-[57%] w-[14px] h-[14px] bg-[#44e2d5] rounded-full animate-bounce-slow delay-95"></div>

      <div className="absolute left-[80%] bottom-[55%] w-3 h-3 border-[#44e2d5] border-solid border-[3.5px] rounded-full animate-bounce-slow delay-115"></div>

      <div className="absolute left-[79%] bottom-[50%] w-5 h-5 bg-[#44e2d5] rounded-full animate-bounce-slow delay-135"></div>

      <Image
        className="absolute left-[80%] bottom-[40%] animate-bounce-slow delay-155"
        src={hexagon}
        width={35}
        height={35}
        alt="Decorative hexagon shape"
      />

      <div className="absolute left-[81%] bottom-[33%] w-3 h-3 bg-[#82edd2] rounded-full animate-bounce-slow delay-175"></div>

      <Image
        className="absolute left-[88%] bottom-[37%] animate-bounce-slow delay-195"
        src={hexagonOutlined}
        width={15}
        height={15}
        alt="Decorative outlined hexagon shape"
      />
    </div>
  );
}
