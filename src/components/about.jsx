import React, { useEffect } from "react";
import Lottie from 'lottie-react';
import developer from '../developer.json'
import AOS from 'aos';
import "aos/dist/aos.css";



export const About = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Quem somos</h2>
              <p data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000">{props.data ? props.data.paragraph : "loading..."}</p>
              
              
            </div>
          </div>
          
          <div className="col-xs-12 col-md-6 animation">
            {" "}
            <Lottie data-aos="fade-up" data-aos-duration="3000"  data-aos-delay="3000" animationData={developer} style={{ width: 300, height: 300}}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};
