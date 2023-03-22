import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Menu from './component/Menu';
import Picture from './component/Picture';
import Project from './component/Project';

function App() {
  return (
    <div className="App">

      <div className='navbar'>
        <ul className='nav'>
          <li className='li'><Link to='/' className='link'>HOME</Link></li>
          <li><Link to='/picture'>PICTURES</Link></li>
          <li><Link to='/myProject'>MY PROJECT</Link></li>
        </ul>
      </div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/picture' element={<Picture/>} />
        <Route path='/myProject' element={<Project/>}/>
      </Routes>

    </div>
  );
}

export default App;
