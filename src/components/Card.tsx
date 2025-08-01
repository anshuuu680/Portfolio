type TechItem = {
  text?: string;
  path?: string;
};

type CardProps = {
  skill?: string;
  tech: TechItem[];
};

function Card({ skill, tech }: CardProps) {
  return (
    <div className="p-4 w-full sm:w-[280px] md:w-[22vmax] min-h-72 flex flex-col justify-between rounded-[20px] bg-white shadow-lg">
      <div className="mb-6 border-skill-heading-border w-fit px-4 py-1 text-heading-md font-bold font-inter rounded-[8px] bg-skill-heading-bg">
        <h1 className="font-light text-subheading">{skill}</h1>
      </div>

      <div className="flex justify-center px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {tech.map((item, index) => {
            const isLastOdd =
              tech.length % 2 === 1 && index === tech.length - 1;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 shadow-md cursor-pointer ${
                  isLastOdd ? "sm:col-span-2 justify-center" : ""
                }`}
              >
                <img
                  src={item.path}
                  alt={item.text}
                  className="w-5 h-5 object-contain"
                />
                <h1 className="text-heading-md font-medium">{item.text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
