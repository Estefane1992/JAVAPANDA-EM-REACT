import React from "react";

import Lottie from 'lottie-react';
import panda from '../panda.json'
export const Header = (props) => {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h1 className="intro" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1500">
                  {props.data ? props.data.title : "Loading"}</h1>
                  <p className="intro-paragrafo" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="2000">{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                  <Lottie data-aos="fade-down" data-aos-duration="3000"  data-aos-delay="3000" animationData={panda} style={{ width: 300, height: 300 }}/>
              </div>
					  </div>
          </div>
        </div>
      </div>
    </section>
  );
};
