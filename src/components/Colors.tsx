import { useState } from "react";

type ColorProps = {
  color?: string;
  customClass?: string;
};

function Colors({ color = "", customClass }: ColorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!color) return;
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group max-w-lg flex gap-2 items-center">
      <div className={`w-4 h-4 border ${customClass}`}></div>
      <div className="text-nav text-dmans flex gap-1 items-center">
        <h1>{color}</h1>
        <img
          onClick={handleCopy}
          className="cursor-pointer w-3 h-3 object-cover transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          src={copied ? "/black-right.svg" : "/black-copy.svg"}
          alt="Copy"
        />
      </div>
    </div>
  );
}

export default Colors;
