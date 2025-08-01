type ButtonProps = {
  path?: string;
  opacity?: number;
  size?: number;
};

function TextIconButton({ path, opacity = 60, size = 10 }: ButtonProps) {
  return (
    <div className="">
      {path && (
        <img
          src={path}
          alt="icon"
          className={`w-${size} h-${size} object-contain opacity-${opacity}`}
        />
      )}
    </div>
  );
}

export default TextIconButton;
