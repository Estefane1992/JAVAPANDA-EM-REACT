import React from "react";



export const Contact = (props) => {

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000">Informações de contato</h2>
                
              </div>
              <div className="contact-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  <a href="tel: 5571993763244">{props.data ? props.data.phone : "loading"}</a>
                  
                </p>
              </div>
              <div className="contact-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> E-mail
                  </span>{" "}
                  <a  href="mailto:javapanda22@gmail.com ">{props.data ? props.data.email : "loading"}</a>
                  
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; Todos os direitos reservados
            
          </p>
        </div>
      </div>
    </div>
  );
};
