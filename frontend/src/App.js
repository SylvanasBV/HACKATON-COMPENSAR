import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/navbar/Navbar';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Row className='p-0 m-0'>
          <Navbar/>
        </Row>
    </div>
  );
}

export default App;
