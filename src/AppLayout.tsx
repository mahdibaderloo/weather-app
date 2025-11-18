import Navbar from "./components/Navbar";

export default function AppLayout() {
  return (
    <div className="2xl:max-w-7xl bg-amber-300 mx-auto">
      <header></header>
      <main className="h-screen py-4">
        <Navbar />
      </main>
    </div>
  );
}
