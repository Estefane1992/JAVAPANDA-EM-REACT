import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';


export const Gallery = (props) => {
  return (
    
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-down"
           data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-delay="1000">Projetos</h2>
          
        </div>
        <Swiper 
          id="mySwiper"
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{clickable:true}}
          autoplay={{delay: 5000}}
          slidesPerView="1"
          className="swiper-container">

          <SwiperSlide className="slide-item">
            <img src={require('../../src/portfolio/pagina-receitas.png')} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={require('../../src/portfolio/pagina-skate.png')} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={require('../../src/portfolio/site-pizzaria.png')} alt="" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};
