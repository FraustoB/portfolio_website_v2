import { NextPage } from "next";
import { FaReact, FaNodeJs, FaGoogle } from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiStackoverflow,
} from "react-icons/si";

const Skills: NextPage = () => {
  const styles: string = "flex flex-col items-center text-xl font-bold h-32";

  return (
    <div
      id="Skills"
      className="h-screen bg-slate-400 snap-start flex justify-center flex-col text-center pb-10"
    >
      <h1 className="mb-10 font-bold text-2xl">SKILLS</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className={styles}>
          <FaReact size={75} />
          REACT
        </div>
        <div className={styles}>
          <SiRedux size={75} />
          React Redux
        </div>
        <div className={styles}>
          <FaNodeJs size={75} />
          Node Js
        </div>
        <div className={styles}>
          <SiMongodb size={75} />
          MongoDB
        </div>
        <div className={styles}>
          <SiTailwindcss size={75} />
          Tailwind Css
        </div>
        <div className={styles}>
          <SiBootstrap size={75} />
          Bootstrap
        </div>
        <div className={styles}>
          <SiGithub size={75} />
          Github
        </div>
        <div className={styles}>
          <SiStackoverflow size={75} />
          Stack Overflow
        </div>
        <div className={styles}>
          <FaGoogle size={75} />
          Google
        </div>
      </div>
    </div>
  );
};

export default Skills;
