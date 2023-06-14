import React from "react";
import Section from "../components/About";
import Articles from "../components/Articles";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div>
      <Section />
      <Articles />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
