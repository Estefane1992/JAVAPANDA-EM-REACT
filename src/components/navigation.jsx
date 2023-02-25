import React, { useState, useEffect } from "react";
import emoji from "react-easy-emoji";




export const Navigation = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
 
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      
      <div className="container">
        < div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={toggleDarkMode}
            />

            <span className="slider round">
              <span className="emoji">{isDarkMode ? emoji("🌜") : emoji("☀️")}</span>
            </span>
          </label>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <a href="#about" className="page-scroll">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
