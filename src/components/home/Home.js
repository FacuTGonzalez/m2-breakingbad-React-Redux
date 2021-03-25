import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {addQuote} from "../../actions";
import {connect} from "react-redux";

function Home(props) {
  //console.log("LAS PROPS", props)  
  
  useEffect(()=>{
    props.addQuote();

    console.log(props.quote);
  },[])  

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      
      <div>{/*Acá deberíamos poner la quote, con sus datos*/}</div>

    <h3>{props.quote.quote}</h3>
    <p>{props.quote.author}</p>
    <p>From: {props.quote.series}</p>    
    
    </div>
  );
}


//Devolviendo un objeto, cuyo parámetro quote va a ser igual al quote del estado global
//Con connect ese objeto devuelto pasa a formar parte de las props

function mapStateToProps(state){
  return {
    quote : state.quote
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
