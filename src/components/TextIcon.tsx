type IconProps = {
  text?: string;
  icon?: string;
};

function TextIcon({ text, icon }: IconProps) {
  return (
    <div className="flex gap-2 items-center border border-gray-300 rounded-full px-3 py-1 h-fit w-fit">
      {icon && (
        <img
          src={`/${icon}`}
          alt={text || "icon"}
          className="w-5 h-5 object-contain"
        />
      )}
      {text && (
        <h1 className="font-dmsans text-sm whitespace-nowrap">{text}</h1>
      )}
    </div>
  );
}

export default TextIcon;
