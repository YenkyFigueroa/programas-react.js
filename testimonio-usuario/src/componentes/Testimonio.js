import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  return(
    <div className="contenedor-testimonios">
      <img 
      className="imagen-testimonio"
      src={require(`../imagenes/img-${props.imagen}.jpg`)}
       alt= 'foto de Emma'
         />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className="texto-testimonio">
          "{props.testimonio}"
          </p>
      </div>  
    </div>
    
  );
}

export default Testimonio;