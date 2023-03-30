import './App.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom';
import Sevices from './components/Sevices';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Sevices />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/test' element={<Testimonials />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes> 
    </>
  );
}

export default App;
