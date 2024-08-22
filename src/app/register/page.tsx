import SocialIcon from "@/components/socialIcon";
import Logo from "@/assets/chat-gpt.png";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div className="absolute top-0 my-10">
        <Image src={Logo} alt="Logo" className="w-8 h-8" />
      </div>

      <h1 className="text-3xl font-bold my-6">Create an account</h1>

      <div className="w-full max-w-xs mb-4 ">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address*"
          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white  py-4 rounded-lg mb-4">
        Continue
      </button>

      <div className="mb-6 text-sm">
        <span>Already have an account? </span>
        <Link href="/login" className="text-green-600 hover:underline">
          Login
        </Link>
      </div>

      <div className="flex items-center w-full max-w-xs mb-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <SocialIcon />

      <div className="text-xs text-green-600  mt-24">
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
        <span className="px-2">|</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
