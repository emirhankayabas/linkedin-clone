import { useState } from "react";
import Divrider from "../Divrider";

import Tabs from "./Tabs";
import Search from "./Search";
import Header from "./Header";

export default function Message() {
  const [active, setActive] = useState(false);
  return (
    <aside
      className={`fixed bottom-0 right-2 w-72 bg-primary rounded-tl-lg rounded-tr-lg overflow-hidden border border-[#8c8c8c40] h-12 z-20 transition-all ${
        active ? "h-[calc(100vh-100px)]" : "h-12"
      }`}
    >
      <Header active={active} setActive={setActive} />
      <Divrider />
      <Search />
      <Tabs />
    </aside>
  );
}
