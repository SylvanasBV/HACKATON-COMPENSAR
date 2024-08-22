//Importaciones de estilos, bootstrap y propiedad de bootstrap:
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';

//Importancion del diseño integrado de tailwinds
import './index.css';

//Importacion de los componentes del Frontend
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Foros from './components/foros/Foros';
import Tienda from './components/tienda/Tienda';
import Loginform from './components/Formulariologin/Loginform';



function App() {
  return (
    // Llamados de los modulos de las importaciones de los componentes
    <div className="App">
        <Col className='p-0 m-0'>
          <Navbar/>
        <div className='p-3'>
          <section className='pb-4'>
            <News/>
          </section>
          <section className='pb-5'>
            <Foros/>
          </section>
          <section>
            <Tienda/>
          </section>
        </div>
        </Col>
        {/* SEGUNDA COLUMNA */}
        <Col>
        {/* Invocacion del modulo */}
        <Loginform />
        </Col>
    </div>
  );
}

export default App;
