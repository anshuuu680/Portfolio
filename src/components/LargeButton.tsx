type LargeButtonProps = {
  link?: string;
  text?: string;
  bgColorClass?: string;
  textColorClass?: string;
  borderColorClass?: string;
  imgSrc?: string;
  isDownload?: boolean;
};

function LargeButton({
  link = "",
  text = "",
  bgColorClass = "bg-transparent",
  textColorClass = "text-black",
  borderColorClass = "border-black",
  imgSrc,
  isDownload = false,
}: LargeButtonProps) {
  return (
    <a
      href={link}
      {...(isDownload
        ? { download: "", target: undefined, rel: undefined }
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={`flex items-center gap-2 border rounded-[16px] py-1.5 px-3 font-skill backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out
      ${bgColorClass} ${textColorClass} ${borderColorClass} hover:scale-105`}
    >
      {imgSrc && <img src={imgSrc} alt="" className="w-5 h-5 object-contain" />}
      <h1 className="font-dmans text-subheading-md md:text-sm">{text}</h1>
    </a>
  );
}

export default LargeButton;
