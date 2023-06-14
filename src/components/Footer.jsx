import React from "react";
import { Container } from "reactstrap";
import "/src/styles/Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pod">
      <Container>
        <div className="texts">
          <div className="text-one">Designed and developed by Asad.</div>
          <div className="text-two">Hosted on Heroku. Type set in Poppins.</div>
        </div>
        <div className="icons">
          <a href="https://t.me/ALHAMDULIL_LAH/">
            <FaTelegramPlane className="icon" />
          </a>
          <a href="https://www.instagram.com/khusanovich.a">
            <AiOutlineInstagram className="icon" />
          </a>
          <a href="mailto:khusanovich.a@gmail.com ">
            <AiFillMail className="icon" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
