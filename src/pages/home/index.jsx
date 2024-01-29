import Content from "./components/Content";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="pt-[52px]">
      <div className="max-w-[1128px] mx-auto flex gap-4 mt-4 text-white">
        <SideBar />
        <Content />
        <RightBar />
      </div>
    </div>
  );
}
