import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros visitantes.</h1>
        <Testimonio
          nombre="Emma Sebastian"
          pais= "Suecia"
          cargo= "Ingeniera de Software"
          imagen="1"
          empresa="Spotify"
          testimonio="Siempre he tenido problema para aprender javascript. He tomado muchos cursos
          pero el curso de freeeCodeCamp fue el que se quedo. Estudiar javascript. asi como estructura de datos
          y argoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de
          mis anelos como Ingeniera de software en Spotify."
        />
        <Testimonio
          nombre="Juan Carlos"
          pais="México"
          cargo="Desarrollador Frontend"
          imagen="3"  
          empresa="Google"  
          testimonio="He estado trabajando con React y Angular, pero no sabía cómo hacer un componente
          funcional. Ahora sé cómo se hace gracias a este curso. La explicación del profesor es clara y sencilla."
          />
          <Testimonio 
            nombre="María José"
            pais="Costa Rica" 
            cargo="Diseñadora Gráfica"
            imagen="2"
            empresa="P&G"
            testimonio= "Me gustó mucho el curso, me ayudó a comprender mejor los fundamentos del diseño gráfico y quiero seguir aprendiendo mas,para poder seguir escalando"
          />
      </div>
    </div>
  );
}

export default App;
