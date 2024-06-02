import './App.css';
import logoCalcu from './imagenes/calcu.png';
import Botton from './Componentes/Botton';
import Pantalla from './Componentes/Pantalla';
import BottonClear from  "./Componentes/BottonClear";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setPantalla] = useState('');

  const agregarInput = valor => {
    setPantalla(input + valor);
  }

  const calcularResultado = () => {
    setPantalla(evaluate(input));
  }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        src={logoCalcu} 
        className='logo-calculadora' 
        alt="Logotipo"/>
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla  input={input}/>

          <div className='fila'>
            <Botton manejarClic={agregarInput}>1</Botton>
            <Botton manejarClic={agregarInput}>2</Botton>
            <Botton manejarClic={agregarInput}>3</Botton>
            <Botton manejarClic={agregarInput}>+</Botton>
          </div>
          <div className='fila'>
            <Botton manejarClic={agregarInput}>4</Botton>
            <Botton manejarClic={agregarInput}>5</Botton>
            <Botton manejarClic={agregarInput}>6</Botton>
            <Botton manejarClic={agregarInput}>-</Botton>
          </div>
          <div className='fila'>
            <Botton manejarClic={agregarInput}>7</Botton>
            <Botton manejarClic={agregarInput}>8</Botton>
            <Botton manejarClic={agregarInput}>9</Botton>
            <Botton manejarClic={agregarInput}>*</Botton>
          </div>
          <div className='fila'>
            <Botton manejarClic={calcularResultado}>=</Botton>
            <Botton manejarClic={agregarInput}>0</Botton>
            <Botton manejarClic={agregarInput}>.</Botton>
            <Botton manejarClic={agregarInput}>/</Botton>
          </div>
          <div className='fila'>
              <BottonClear manejarClear={()=> setPantalla('')}>
                clear</BottonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
