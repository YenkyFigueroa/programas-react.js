import './App.css';
import Botton from './componentes/Botton';
import logoprueba from './imagenes/logo-prueba.png';
import Contador from  './componentes/Contador';
import { useState } from 'react';


function App() {

    const [numero, setNumero] = useState(0);


    const manejarClic = () => {
      setNumero(numero + 1);
    }

    const reiciciarContador = () => {
      setNumero(0);
    }
  

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
        src={logoprueba}
        alt='Logo de prueba' />
      </div>
      <div className='contenedor-principal'>

        <Contador clicNumber={numero} />

        <Botton 
          text='Clic'
          botondeclic={true}
          manejarClic={manejarClic}/>

        <Botton
          text='Reiniciar'
          botondeClic={false}
          manejarClic={reiciciarContador}/>
      </div>
    </div>
  );
}

export default App;
