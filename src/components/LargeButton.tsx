type LargeButtonProps = {
  text?: string;
  bgColorClass?: string;
  textColorClass?: string;
  borderColorClass?: string;
  imgSrc?: string;
};
function LargeButton({
  text = "",
  bgColorClass = "bg-transparent",
  textColorClass = "text-black",
  borderColorClass = "border-black",
  imgSrc,
}: LargeButtonProps) {
  return (
    <div
      className={`flex items-center gap-2 border rounded-[16px] py-1.5 px-3 font-skill backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out
      ${bgColorClass} ${textColorClass} ${borderColorClass} hover:scale-105`}
    >
      {imgSrc && <img src={imgSrc} alt="" className="w-5 h-5 object-contain" />}
      <h1>{text}</h1>
    </div>
  );
}

export default LargeButton;
