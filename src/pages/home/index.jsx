import Logo from "./components/Header/Logo";
import Navbar from "./components/Header/Navbar";
import Search from "./components/Header/Search";
import Content from "./components/Main/Content";
import RightBar from "./components/Main/RightBar";
import SideBar from "./components/Main/SideBar";

export default function Home() {
  return (
    <>
      <header className="w-full h-[52px] bg-primary fixed t-0 border-b border-[#8c8c8c40] z-20">
        <div className="max-w-[1128px] h-full mx-auto flex items-center justify-center">
          <Logo size={40} color="#ffffff" />
          <Search />
          <Navbar />
        </div>
      </header>
      <div className="pt-[52px]">
        <div className="max-w-[1128px] mx-auto flex gap-4 mt-4 text-white">
          <SideBar />
          <Content />
          <RightBar />
        </div>
      </div>
    </>
  );
}
