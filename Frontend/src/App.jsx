import { useState } from 'react'
import Header  from './components/Header';
import Button from 'react-bootstrap/Button';

import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';

import  {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  </Route>
  ))
function App() {

  return <RouterProvider router={router}/>
}

export default App
