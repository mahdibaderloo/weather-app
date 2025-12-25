import sunIcon from "../assets/sunny.svg";

export default function Loading() {
  return (
    <div className="w-full h-[60%] flex items-center justify-center">
      <img src={sunIcon} alt="loading" className="w-20 lg:w-16 animate-spin" />
    </div>
  );
}
