import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import ptu from "../../img/ptu.png";
import mts from "../../img/mts.png";
const Testimonial = () => {
  const clients = [
    {
      img: ptu,
      College:" I. K. Gujral Punjab Technical University",
      course:"Bachelor of Technology",
      Stream:
        "Computer Science and Engineering",
       
        date: "2019-2023",
    
    },
    {
      img: mts,
      College:"Maa Tripur Sundari Public School, Lalapur",
      course:
        " Senior Secondary",
        Stream:"Science",
        date: "2016-2018",
    },
    {
      img: mts,
      College:"Maa Tripur Sundari Public School, Lalapur",
      Stream:
        "Secondary",
        date: "2015-2016",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Educational</span>
        <br />
        <span>Background</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.College}</span>
                <span>{client.course}</span>
                <span>{client.Stream}</span>
                <span>{client.date}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
