import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <div className="f-icons">
         <a href="https://instagram.com/suraj_r00?igshid=MzNlNGNkZWQ4Mg=="> <Insta color="#3586ff" size={"2rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100009176339719"><Facebook color="#3586ff" size={"2rem"} /></a>
          <a href="https://github.com/surajrac800"><Github color="#3586ff" size={"2rem"} /></a> 
        </div> 
        <span>8009448518</span> 
         <span>Er. Suraj copyright &copy; 2022</span>
      </div>
    </div>
  );
};

export default Footer;
