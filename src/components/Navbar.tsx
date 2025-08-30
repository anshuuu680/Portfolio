import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

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
    <>
      {/* Top Navbar */}
      <nav className="w-full min-h-[10vh] fixed px-[2em] lg:px-[5em] flex items-center justify-between font-heading z-50">
        <div className="w-[20vmin] flex items-center justify-start">
          <h1 className="font-signature text-signature font-semibold text-heading cursor-pointer">
            Anshu
          </h1>
        </div>

        {/* Desktop Menu */}
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

        {/* Right Email / Hamburger */}
        <div className="w-[20vmin] flex items-center justify-end">
          <div className="w-12 h-12 lg:w-fit lg:h-fit lg:p-2 flex items-center justify-center rounded-full lg:rounded-[20px] text-primary text-button cursor-pointer group relative lg:bg-black">
            {/* Desktop email */}
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

            {/* Mobile hamburger */}
            <div
              className="lg:hidden flex relative w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 top-3 transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile menu) */}
      <div
        className={`fixed top-0 right-0 h-[60vh] w-80 bg-gradient-to-br from-primary via-skill-bg to-white shadow-2xl z-40 lg:hidden transform transition-transform duration-500 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Links */}
          <div className="flex-1">
            <ul className="flex flex-col gap-8 font-dmsans font-bold">
              {navs.map((nav, index) => (
                <li
                  key={nav.name}
                  className={`transform transition-all duration-700 ease-out ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={nav.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-800 text-lg tracking-wide hover:text-blue-500 cursor-pointer block py-3 border-b border-gray-300 hover:border-blue-500 transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Box */}
          <div
            className={`pb-6 transform transition-all duration-700 ease-out ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              className="flex items-center justify-between bg-black rounded-lg py-2 px-3 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
              onClick={handleCopy}
            >
              <span className="text-white text-sm">{email}</span>
              <div className="flex items-center gap-2">
                {copied && (
                  <span className="text-green-400 text-xs">Copied!</span>
                )}
                <div className="w-7 h-7 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {copied ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-60 z-30 lg:hidden transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
