import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import Header from "./components/Header";

export default function AppLayout() {
  return (
    <div className="bg-linear-to-r from-violet-400 to-violet-300/85">
      <div className="relative h-screen w-screen overflow-hidden 2xl:max-w-[1500px] mx-auto">
        <Header />
        <main className="h-screen w-full py-4 flex justify-start gap-10">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
