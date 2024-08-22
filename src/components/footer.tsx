import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 w-full">
      <p className="text-sm text-gray-500 text-center">
        By messaging ChatGPT, you agree to our
        <Link href={"/"} className=" text-black underline mx-1">
          Terms
        </Link>
        and have read our
        <Link href={"/"} className=" text-black underline ml-1">
          Privacy Policy
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
