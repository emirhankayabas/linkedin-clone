import { Outlet } from "react-router-dom";
import Header from "~/components/Header";
import Message from "~/components/Message";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Message />
    </>
  );
}
