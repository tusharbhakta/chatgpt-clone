import Footer from "../components/footer";
import Navbar from "../components/navbar";
import MainLogo from "@/components/main-logo";
import MainContent from "@/components/main-content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainLogo />
      <MainContent />
      <Footer />
    </div>
  );
}
