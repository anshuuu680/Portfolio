import { useState } from "react";
import { Link } from "react-scroll";

const navs = [
  { name: "HOME", href: "home" },
  { name: "ABOUT", href: "about" },
  { name: "SKILLS", href: "skills" },
  { name: "PORTFOLIO", href: "portfolio" },
  { name: "CONTACT", href: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "ap214893@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <nav className="w-full min-h-[10vh] fixed px-[2em] lg:px-[5em] flex items-center justify-between font-heading z-50">
      <div className="w-[20vmin] flex items-center justify-start">
        <div className="flex items-center justify-center rounded-[8px] text-primary text-button cursor-pointer">
          <h1 className="font-signature text-signature font-semibold text-heading">
            Anshu
          </h1>
        </div>
      </div>

      <div className="hidden lg:flex items-center max-w-[50vw] rounded-[20px] p-2.5 px-6 text-nav bg-primary">
        <ul className="flex items-center gap-[2em] font-bold font-dmsans">
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link
                to={nav.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-700 hover:text-button-hover cursor-pointer"
                style={{ letterSpacing: "0.1em" }}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[20vmin] flex items-center justify-end">
        <div
          className="w-12 h-12 lg:w-fit lg:h-fit lg:p-2 flex items-center justify-center rounded-full lg:rounded-[20px] text-primary text-button cursor-pointer group relative lg:bg-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className="hidden lg:flex items-center gap-2 px-2 pr-4"
            onClick={handleCopy}
          >
            <span className="text-nav text-primary">{email}</span>
            <img
              src={copied ? "/right.svg" : "/copy.svg"}
              alt="email icon"
              className="w-4 h-4"
            />
          </div>

          <div className="lg:hidden flex">
            <img
              className="w-5 h-5 object-contain"
              src="/burger-menu.svg"
              alt="menu"
            />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg z-40 lg:hidden py-4 px-6 ">
          <ul className="flex flex-col gap-4 text-center">
            {navs.map((nav) => (
              <li key={nav.name}>
                <Link
                  to={nav.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 hover:text-button-hover cursor-pointer block"
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
