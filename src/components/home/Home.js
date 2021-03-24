import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";


function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      
      <div>{/*Acá deberíamos poner la quote, con sus datos*/}</div>
    </div>
  );
}

export default Home;
