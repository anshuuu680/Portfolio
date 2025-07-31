type LargeButtonProps = {
  text?: string;
  bgColor?: string;
  color?: string;
  borderColor?: string;
};

function LargeButton({
  text = "Button",
  bgColor = "#fff",
  color = "#000",
  borderColor = "#000",
}: LargeButtonProps) {
  return (
    <div
      style={{ background: bgColor, color: color, borderColor: borderColor }}
      className="flex flex-col gap-2 border backdrop-blur-md rounded-[16px] p-1.25 px-3 font-skill"
    >
      <h1>{text}</h1>
    </div>
  );
}

export default LargeButton;
