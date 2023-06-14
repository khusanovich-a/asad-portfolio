import React, { useEffect } from "react";
import "/src/styles/Projects.css";
import { data } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='projects' className="projects">
      {data.map((item) => (
      <div
        className="cards"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="400"
      >
          <div> 
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button className="exp">Explore</button>
          </div>
      </div> 
        ))}
    </div>
  );
};

export default Projects;
