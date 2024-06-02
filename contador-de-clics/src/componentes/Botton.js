import React from "react";
import '../hojas-de-estilo/Botton.css';

function Botton ({text, botondeClic,manejarClic}) {

    
    return(
        <button
        className={botondeClic? 'boton-clic' :'boton-reiciniar'}
        onClick={manejarClic}>
        {text}
        </button>
    );
}

export default Botton;
