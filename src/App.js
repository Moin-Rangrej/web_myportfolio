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
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/sevices' element={<Sevices />}/>
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/test' element={<Testimonials />}/>
        <Route exact path='/portfolio' element={<Portfolio />}/>
      </Routes> 
    </>
  );
}

export default App;
