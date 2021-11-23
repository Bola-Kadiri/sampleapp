import Navbar from './Navbar/Navbar'
import  About from './pages/About'
import Home from './pages/Home'
import Intro from './pages/Intro';
import Cart from './pages/Cart'
import './App.css'
import {Route, Routes, } from 'react-router-dom';
const App = () => {
  return(
    
    <div className='container'>
        <Navbar/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/intro' element={<Intro />}/>
        <Route path='/Cart' element={<Cart/>} />
    </Routes>
    </div>
  )
}

export default App;