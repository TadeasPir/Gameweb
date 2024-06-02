import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Biscuits from '../components/Biscuits';
import posthog from 'posthog-js';


const MainLayout = () => {
  return (
    <>
     
     <Header/>
   
   <Outlet/>
   
   <Biscuits/>
   
   
   <Footer/>
 
    </>
  )
}

export default MainLayout