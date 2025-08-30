type ButtonProps = {
  text?: string;
};

function Button({ text = "Click Me" }: ButtonProps) {
  return (
    <div
      className="py-1 px-2.5 text-nav bg-gradient-to-b from-white to-[#f5f5f5] 
                 border border-black/10 
                 rounded-[20px] 
                 
                 max-w-[60vw]"
    >
      <div className="flex flex-col justify-start shrink-0">
        <p className="text-[#0b0a09] text-sm sm:text-skill">{text}</p>
      </div>
    </div>
  );
}

export default Button;
