import searchImage from "../assets/search.svg";
import lightImage from "../assets/light.svg";
// import darkImage from "../assets/dark.svg";
import profileImage from "../assets/profile.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full absolute mt-4 ml-30">
      <form className="bg-linear-to-r from-violet-200/85 to-violet-500/85 flex items-center gap-2 w-[50%] h-14 p-2 rounded-4xl">
        <img src={searchImage} alt="Search icon" className="w-16" />
        <input
          type="text"
          className="w-full h-full outline-none border-none text-violet-950 text-lg font-medium"
          placeholder="Search city"
        />
      </form>
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 flex items-center justify-center bg-linear-to-r from-violet-500/85 to-violet-600/85 rounded-full">
          <img src={lightImage} alt="Theme icon" className="w-12" />
        </div>
        <div className="w-14 h-14 flex items-center justify-center bg-linear-to-r from-violet-500/85 to-violet-600/85 rounded-full">
          <img src={profileImage} alt="Profile icon" className="w-12" />
        </div>
      </div>
    </header>
  );
}
