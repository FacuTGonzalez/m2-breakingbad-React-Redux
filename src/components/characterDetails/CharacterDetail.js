import React, { useEffect } from "react";
import {emptyCharacterDetail, getCharacterDetail} from "../../actions";
import {connect} from "react-redux";
import Spinner from '../Spinner'
import "./CharacterDetail.css";

function CharacterDetail(props) {
  // Alternativa const {id} = useParams();
  //props.getCharacterDetail(props.match.params.id)
  }
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

