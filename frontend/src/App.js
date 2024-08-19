import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';



function App() {
  return (
    <div className="App">
        <Row className='p-0 m-0'>
          <Navbar/>
        <div className='p-3'>
          <News/>
        </div>
        </Row>
    </div>
  );
}

export default App;
