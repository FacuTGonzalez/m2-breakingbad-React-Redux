import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";

function Characters() {

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then((res)=>{return res.json()})
    .then((json)=>setCharacters(json))
    .then(()=>setIsLoading(false))
    

    console.log(characters);
  },[query])
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */

  const handleChange = (q) => {
    setQuery(q);
  } 
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Characters">
      <h1>List of Characters</h1>
      
      <section>
        <form className="form-control" onSubmit={(e)=>handleSubmit(e)}>
          <input
          type="text"
          placeholder="Search"
          onChange={(e)=>handleChange(e.target.value)}/>
        </form>
      </section>
      
        
      

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {isLoading ? (
          <Spinner />
        ) :      
          characters.map((c) => 
          <li key={c.char_id}>
            <Link to={`/characters/${c.char_id}`}>
              {c.name}
            </Link>
          </li>
          )
      
        }
      </ul>
    </div>
  );
}

export default Characters;
