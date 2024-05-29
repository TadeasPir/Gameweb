import { useState } from 'react'
import Header  from './components/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
import "./App.css";

function App() {
  
  return (
    <div>
     <Header/>
      <Home/>
      <Footer/>    
    </div>
  )
}

export default App
