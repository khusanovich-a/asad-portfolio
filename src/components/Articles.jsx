import React from "react";
import "/src/styles/Articles.css";

const Articles = () => {
  return (
    <div className="articles" > 
      <h1>Latest Articles</h1>
      <div className="article-content" data-aos="zoom-in">
        <h4 className="first-h">
          <a href="https://javascript.plainenglish.io/javascript-clean-code-best-practices-461c24c53cae">
            <img src="/images/heart.svg" alt="" />
            JavaScript Clean Code - Best Practices
          </a>
        </h4>
        <p className="first-p">
          <a href="https://javascript.plainenglish.io/javascript-clean-code-best-practices-461c24c53cae">
            February 05, 2023
          </a>
        </p>
        <h4 className="second-h">
          <a href="https://www.w3schools.com/nodejs/">
            <img src="/images/heart.svg" alt="" />
            Node.js Totorials
          </a>
        </h4>
        <p className="second-p">
          <a href="https://www.w3schools.com/nodejs/">
            September 30, 2022
          </a>
        </p>
        <h4 className="third-h">
          <a href="https://codeburst.io/a-beginners-guide-to-setting-up-a-web-application-with-typescript-and-express-e1cf8319bc5c">
            <img src="/images/heart.svg" alt="" />
            Guide about TypeScript 
          </a>
        </h4>
        <p className="third-p">
          <a href="https://codeburst.io/a-beginners-guide-to-setting-up-a-web-application-with-typescript-and-express-e1cf8319bc5c">
            May 19, 2019
          </a>
        </p>
      </div>
    </div>
  );
};

export default Articles;
