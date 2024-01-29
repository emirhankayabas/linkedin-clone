import Search from "./Search";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full h-[52px] bg-primary fixed t-0 border-b border-[#8c8c8c40] z-20">
      <div className="max-w-[1128px] h-full mx-auto flex items-center justify-center">
        <Logo size={40} color="#ffffff" />
        <Search />
        <Navbar />
      </div>
    </header>
  );
}
