import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/signup';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}

export default App;
