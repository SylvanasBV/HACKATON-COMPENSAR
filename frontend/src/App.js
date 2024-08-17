import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Column';
import Container from 'react-bootstrap/Container';
import Navbar from './components/navbar/Navbar';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navbar></Navbar>
        </Row>
      </Container>
    </div>
  );
}

export default App;
