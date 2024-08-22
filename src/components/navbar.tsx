import Image from "next/image";
import NewChat from "@/assets/edit.png";
import DownShevron from "@/assets/down-chevron.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 ">
      <div className="flex items-center space-x-2">
        <div className="p-2">
          <Image src={NewChat} alt="New Chat" className="w-6 h-6" />
        </div>
        <div className=" flex">
          <h1 className="text-lg font-semibold text-gray-500">
            ChatGPT 4o mini
          </h1>
          <Image
            src={DownShevron}
            alt="Shevron"
            className="w-5 h-4 mt-2 pl-1"
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <Link
          href={"/login"}
          className="px-4 py-2 text-sm bg-black text-white rounded-full"
        >
          Log in
        </Link>
        <Link
          href={"/register"}
          className="px-4 py-2 text-sm rounded-full ring-1 ring-slate-300 hidden sm:block"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
