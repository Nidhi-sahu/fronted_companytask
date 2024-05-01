import logo from './logo.svg';
import './App.css';
import Navbaar from './Component/Navbaar';
import { Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';

function App() {
  return (  
    <>
    <div>
     <Navbaar/>
    </div>

    <Routes>
    <Route path='/' element={<Dashboard/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>

    </Routes>

    </>
  );
}

export default App;
