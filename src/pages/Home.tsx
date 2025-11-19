import stormy from "../assets/stormy.png";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainHeader />

      <div className="blur-[2px] mt-8 w-full">
        <img
          src={stormy}
          alt="Background"
          className="w-[99%] rounded-4xl shadow"
        />
      </div>
    </div>
  );
}
