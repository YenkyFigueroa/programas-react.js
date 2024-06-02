import React from "react"; 
import '../hojas-de-estilo/BottonClear.css'; 

const BottonClear = (props) => (
    <div className="boton-clear"
    onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BottonClear;