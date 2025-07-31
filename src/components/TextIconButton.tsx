type ButtonProps = {
  text?: string;
  path?: string;
};

function TextIconButton({ text = "Button", path }: ButtonProps) {
  return (
    <div
      className="flex flex-col  gap-2 backdrop-blur-md bg-white/40 rounded-[16px] 
                 shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.8),0_4px_2px_0_rgba(0,0,0,0.04),0_4px_20px_0_rgba(0,0,0,0.08)] 
                 opacity-100 pl-4 pr-12 py-2 w-[20vmin] "
    >
      {path && <img src={path} alt="icon" className="w-8 h-8 object-contain" />}
      <span className="text-skill-heading text-skill">{text}</span>
    </div>
  );
}

export default TextIconButton;
