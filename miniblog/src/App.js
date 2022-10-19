import './App.css';
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"

//pages
import Home from './pages/Home/home';
import About from './pages/about/about';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './login/login';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
