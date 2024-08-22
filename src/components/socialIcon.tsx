import Image from "next/image";
import { socialIcons } from "@/constant";

const SocialIcon = () => {
  return (
    <div className="w-full max-w-xs space-y-2 mb-6">
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          className="w-full border border-gray-300 text-black font-medium py-4 rounded-lg flex  space-x-2"
        >
          <Image src={icon.src} alt={icon.alt} className="w-5 h-5 ml-4" />
          <span>{icon.span}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialIcon;
