import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Editior from './pages/Editior.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/signUp' element={<SignUp />} />  
       <Route path='/Login' element={<Login />} />
       <Route path='/editior/:projectID' element={<Editior />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App