import type { NextPage } from "next";
import React, { useRef } from "react";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Home: NextPage = () => {
  const aboutMeRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div className="flex-auto snap snap-y snap-mandatory h-full scroll-smooth">
      <Intro />
      <Skills />
      <Projects />
      <Contact />

      {/* <div className="text-amber-600">Hello Color Home</div> */}
    </div>
  );
};

export default Home;
