import stormy from "../assets/stormy.png";

export default function Home() {
  return (
    <>
      <div className="blur-[2px] mt-30 w-full">
        <img
          src={stormy}
          alt="Background"
          className="w-[99%] rounded-4xl shadow"
        />
      </div>
    </>
  );
}
