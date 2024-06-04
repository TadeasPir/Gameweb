import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";

import  {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from "./pages/Profile";
import InvalidPage from './pages/InvalidPage';

import { useState, useEffect } from "react";
import HttpClient from "./components/HttpClient";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const resp = await HttpClient.get("//localhost:8080/@me");

        setUser(resp.data)
      } catch (e) {
      } 
    })();
  }, []);
  
  const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/downloads' element={<Downloads/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path="/profile" element={user ? <Profile /> : <InvalidPage/>} />
  <Route path='*' element={<InvalidPage/>}/>
  </Route>
  ))

  return <RouterProvider router={router} />;
}

export default App;
