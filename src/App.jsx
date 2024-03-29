import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import About from './pages/About'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/sign-in' element = {<Signin/>}></Route>
      <Route path='/sign-up' element = {<Signup/>}></Route>
      <Route path='/profile' element = {<Profile/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
