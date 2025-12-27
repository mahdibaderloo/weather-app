import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import MainHeader from "./components/MainHeader";
import MobileNavbar from "./components/MobileNavbar";

export default function AppLayout() {
  return (
    <div className="bg-linear-to-r from-violet-400 to-violet-300/85 dark:from-slate-900 dark:to-slate-950 h-screen overflow-scroll xl:overflow-hidden">
      <div className="flex gap-10 h-full 2xl:max-w-6xl 2xl:mx-auto">
        <Navbar />
        <MobileNavbar />
        <div className="h-full w-full flex flex-col gap-8 px-4 lg:px-0">
          <MainHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
