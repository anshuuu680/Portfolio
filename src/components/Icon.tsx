type ButtonProps = {
  path?: string;
  opacity?: number;
};

function Icon({ path }: ButtonProps) {
  return (
    <div className="">
      {path && (
        <img src={path} alt="icon" className={`w-8  h-8  object-contain`} />
      )}
    </div>
  );
}

export default Icon;
