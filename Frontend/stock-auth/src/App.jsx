// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import { ToastContainer } from 'react-toastify';
import ImgMediaCard from './components/card';

import ScrollToTop from './ScrollToTop';
import NavBar from './Navbar';



function App() {


  return (
    <>
      <div className="App"> 
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="dark" transition: Bounce> </ToastContainer>
        <BrowserRouter>
        <NavBar/>
        <ScrollToTop/>
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          {/* <Route path='/login' element={<Login/>}></Route> */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/card' element={<ImgMediaCard/>}> </Route>
        </Routes>
        
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
