export const ADD_QUOTE = "ADD_QUOTE";

export function addQuote() {
    return function(dispatch) {
        //fetchear la Api en la ruta de las quotes random
        return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
        //despachar el objeto al reducer
        .then(json => {
            dispatch({type: ADD_QUOTE, payload: json[0]})
        })
    }
}

export function getCharacterDetails(num){
    
}


/*
const data = await axios.get(...)

*/