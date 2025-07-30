import { Link } from "react-scroll";

const navs = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SKILLS", href: "/skills" },
  { name: "CONTACT", href: "/contact" },
];

function Navbar() {
  return (
    <nav className="w-full min-h-[10vh] fixed px-[5em] flex items-center justify-between ">
      <div className="  w-[20vmin]  flex items-center justify-start">
        <div className="w-fit p-4 px-4 flex items-center justify-center bg-black rounded-[8px] text-primary h-full text-button cursor-pointer">
          <h1>Logo</h1>
        </div>
      </div>

      <div className="hidden max-w-[50vw] rounded-[20px] p-2.5 px-6 text-nav bg-primary lg:flex items-center">
        <ul className="flex items-center gap-[2em] font-dmsans-regular">
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link
                to={nav.href.replace("/", "")}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" w-[20vmin]  flex items-center justify-end">
        <div className="w-12 h-12 flex items-center justify-center bg-black rounded-[50%] text-primary  text-button cursor-pointer">
          <h1 className="hidden lg:block">CV</h1>
          <div className="lg:hidden flex">
            <img
              className="w-5 h-5 object-contain"
              src="/burger-menu.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
