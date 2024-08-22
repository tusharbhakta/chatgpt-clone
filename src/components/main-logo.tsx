import Image from "next/image";
import Logo from "@/assets/chat-gpt.png";
const MainLogo = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <Image src={Logo} alt="ChatGPT Logo" className="w-12 h-12 " />
    </div>
  );
};

export default MainLogo;
