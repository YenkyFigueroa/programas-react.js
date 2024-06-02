import React from "react";
import '../hojas-de-estilo/Contador.css';

function Contador(props){
    return(
        <div className="contador">   
            {props.clicNumber}
        </div>
    );
}

export default Contador;