import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import JobdetailPage from './JobdetailPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { HashRouter as Router } from "react-router-dom"

function App() {
 

  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route path = "/job/:id" element = {<JobdetailPage/>}/>
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
