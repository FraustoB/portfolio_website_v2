import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <ul className="flex w-screen pt-20 subpixel-antialiased tracking-wide">
      <li className="mr-6">
        {/* <div className="text-slate-700 text-l font-bold">
          {"<"}frausto.dev{">"}
        </div> */}
      </li>
      <li className="mr-6">
        {/* <a
          className="text-blue-500 hover:text-blue-800 text-lg font-bold "
          href="#AboutMe"
        >
          About Me
        </a> */}
      </li>
      <li className="mr-6">
        <a
          className="text-gray-50 hover:text-gray-400 text-xl font-bold"
          href="#Skills"
        >
          SKILLS
        </a>
      </li>
      <li className="mr-6">
        <a
          className="text-gray-50 hover:text-gray-400 text-lg font-bold"
          href="#Projects"
        >
          PROJECTS
        </a>
      </li>

      <li className="mr-6">
        <a
          className="text-gray-50 hover:text-gray-400 text-xl font-bold"
          href="#Contact"
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
