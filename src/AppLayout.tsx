import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import MainHeader from "./components/MainHeader";

export default function AppLayout() {
  return (
    <div className="bg-linear-to-r from-violet-400 to-violet-300/85 dark:from-slate-800 dark:to-slate-950 h-screen overflow-hidden">
      <div className="flex gap-10 h-full 2xl:max-w-7xl 2xl:mx-auto">
        <Navbar />
        <div className="h-full w-full flex flex-col gap-8">
          <MainHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
