import { BrowserRouter, Route, Routes} from 'react-router-dom';

import React from 'react'

import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
     </Routes>
    </BrowserRouter>
  )
}
