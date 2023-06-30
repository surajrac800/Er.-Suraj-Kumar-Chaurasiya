import React, { useContext } from "react";
import "./Works.css";
import Html from "../../img/Html.png";
import ReactJs from "../../img/ReactJs.png";
import NodeJs from "../../img/NodeJs.png";
import Css from "../../img/Css.png";
import JavaScript from "../../img/JavaScript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works on All these
          </span>
          <span>Technologies</span>
          <spane>
          As a full stack web developer, we'll need to be proficient  in a variety
            <br />
            of technologies across both the front-end and back-end development.
            <br />
            It's essential to stay updated with the latest technologies and
            <br />
           continuously expand your skill set to adapt to evolving demands 
           <br />
           in the web development field.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={Html} alt="" /></a>
          </div>
          
          <div className="w-secCircle">
            <a href="https://legacy.reactjs.org/docs/getting-started.html"><img src={ReactJs} alt="" /></a>
          </div>
          <div className="w-secCircle">
            
            <a href="https://nodejs.org/en/docs"><img src={NodeJs} alt="" /></a>
          </div>{" "}
          <div className="w-secCircle">
            
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={Css} alt="" /></a>
          </div>
          <div className="w-secCircle">
            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript"><img src={JavaScript} alt="" /></a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
