import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CharacterDetail.css";

function CharacterDetail(props) {
  const id= props.match.params.id; // Alternativa const {id} = useParams();
  
  
  console.log("Props", props);
  //props.getCharacterDetail(props.match.params.id)
  const [character, setCharacter] = useState({}); //Importante setearlo como objeto vacío

  useEffect(()=>{
    fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    .then((res)=>{return res.json()})
    .then((json)=>setCharacter(json[0]))
    console.log(character)
  },[id])
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
      <h1>Character Details</h1>
      <h3>{character.name}</h3>
       
      <img className="CharacterDetail__Photo" src={character.img} alt="" />
    </div>
  );
}

export default CharacterDetail;
