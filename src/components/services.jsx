import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">Serviços</h2>
          
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img data-aos="flip-down" data-aos-duration="2000"  className="servico-imagem" src={d.imagem} alt=""
                  />
                  <div className="service-desc">
                    <h3 data-aos="fade-down"
                      data-aos-duration="3000"
                       >{d.name}
                    </h3>
                    
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
