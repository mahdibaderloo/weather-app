import { Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import Header from "./components/Header";

export default function AppLayout() {
  return (
    <div className="2xl:max-w-7xl mx-auto relative">
      <Header />
      <main className="h-screen py-4">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
