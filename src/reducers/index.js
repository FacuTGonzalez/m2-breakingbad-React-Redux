import {ADD_QUOTE} from "../actions";// Equivale a "../actions/index"

//==== Setear Estado Global Inicial ======//

const initialState = {
    quote : {},
    characters: [],
    characterDetail: {}
}

/*
{
    type: ADD_QUOTE,
    payload: 
}
*/

//==== Setear Reducers ======//
function rootReducer(state = initialState, action){
    /*
    switch (action.type){
        case "ADD_QUOTE": return {...state, quote: action.payload};
        .....
        default : return state;
    }
    */
    if(action.type === ADD_QUOTE){
        console.log("Esto viene del reducer",action.payload)
        return {
            ...state,
            quote: action.payload
        }
    }
    if(action.type === "LOAD_CHARACTERS"){
        return {
            ...state,
            characters: action.payload
        }
    }

    return state;

}


export default rootReducer;
/*
Spread Operator : 
const array = [1,2,3,4];
const array2 = [...array,5] => [1,2,3,4,5]

*/