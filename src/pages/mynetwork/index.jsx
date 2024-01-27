import Logo from "../home/components/Header/Logo";
import Navbar from "../home/components/Header/Navbar";
import Search from "../home/components/Header/Search";

export default function MyNetwork() {
  return (
    <>
      <header className="w-full h-[52px] bg-primary fixed t-0 border-b border-[#8c8c8c40] z-20">
        <div className="max-w-[1128px] h-full mx-auto flex items-center justify-center">
          <Logo size={40} color="#ffffff" />
          <Search />
          <Navbar />
        </div>
      </header>
      My Network
    </>
  );
}
