import type { NextPage } from "next";
import Navbar from "./navbar";

const Intro = () => {
  return (
    <div
      className="flex flex-col justify-right  bg-gray-400 h-screen snap-center
      bg-gradient-to-r from-slate-900 to-slate-800"
      id="AboutMe"
    >
      <h1
        className="text-blue-100 text-left text-6xl outline 
      pt-20 subpixel-antialiased
      outline-violet-400"
      >
        Brandon <br />
        Shin
        <br /> Frausto
      </h1>

      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default Intro;
