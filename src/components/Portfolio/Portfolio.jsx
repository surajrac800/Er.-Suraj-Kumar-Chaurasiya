import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Coffee from "../../img/coffee.png";
import Restaurant from "../../img/restaurant.png";
import Snps from "../../img/snps.png";
import Webdev from "../../img/webdev.png";
import Netflix from "../../img/netflix.png";
import Spotify from "../../img/spotify.png";
import Iblog from "../../img/iblog.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://coffeeshop-sn.vercel.app/"><img src={Coffee} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://web-development-sn.vercel.app/"><img src={Webdev} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://spoty-clone-sn.vercel.app/"><img src={Spotify} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://net-sn-clone.vercel.app/"> <img src={Netflix} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://restaurent-sn.vercel.app/"><img src={Restaurant} alt="" /></a>
        </SwiperSlide>  
        <SwiperSlide>
          <a href="https://snps-groups.vercel.app/"><img src={Snps} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bolg-sn.vercel.app/"><img src={Iblog} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
