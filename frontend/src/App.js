import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Foros from './components/foros/Foros';
import Tienda from './components/tienda/Tienda';



function App() {
  return (
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
    </div>
  );
}

export default App;
