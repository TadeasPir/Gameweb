import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';

import  {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Downloads from './pages/Downloads';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/downloads' element={<Downloads/>}/>
  </Route>
  ))
function App() {

  return <RouterProvider router={router}/>
}

export default App
