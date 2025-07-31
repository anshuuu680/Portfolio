type CustomButtonProps = {
  text?: string;
  color?: string;
};

function CustomButton({
  text = "Click Me",
  color = "#e3e8ee",
}: CustomButtonProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex flex-col gap-2 backdrop-blur-md  rounded-[16px] 
              shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.8),0_4px_2px_0_rgba(0,0,0,0.04),0_4px_20px_0_rgba(0,0,0,0.08)] 
              opacity-100 p-1 px-4`}
    >
      {text}
    </div>
  );
}

export default CustomButton;
