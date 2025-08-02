type ButtonProps = {
  path?: string;
  opacity?: number;
};

function Icon({ path, opacity = 30 }: ButtonProps) {
  return (
    <div className="">
      {path && (
        <img
          src={path}
          alt="icon"
          className={`lg:w-10  lg:h-10 w-8 h-8  object-contain opacity-${opacity}`}
        />
      )}
    </div>
  );
}

export default Icon;
