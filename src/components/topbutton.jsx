import React from "react";

export function Top() {
    function TopEvent() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
      }
      
      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          document.getElementById("topButton").style.visibility = "visible";
        } else {
          document.getElementById("topButton").style.visibility = "hidden";
        }
      }
      window.onscroll = function () {
        scrollFunction();
      };
      window.onload = function () {
        scrollFunction();
      }; 
      
      return (
        <button onClick={TopEvent} id="topButton" title="Go to top">
          <i className="fa fa-hand-o-up" aria-hidden="true"></i>
          
        </button>
      );
}