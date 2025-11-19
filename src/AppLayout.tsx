import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";

export default function AppLayout() {
  return (
    <div className="bg-linear-to-r from-violet-400 to-violet-300/85 h-screen overflow-hidden">
      <div className="flex gap-10 h-full 2xl:max-w-7xl 2xl:mx-auto">
        <Navbar />
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
