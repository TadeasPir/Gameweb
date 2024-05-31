import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';

import  {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Downloads from './pages/Downloads';
import Login from './pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/downloads' element={<Downloads/>}/>
  <Route path='/login' element={<Login/>}/>
  </Route>
  ))
function App() {

  return <RouterProvider router={router}/>
}

export default App
