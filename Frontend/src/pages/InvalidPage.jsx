import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const InvalidPage = () => {
  return (
   
      <div className='Auth-form-container'><section className='text-center flex flex-col justify-center items-center h-96'>
       <div className='Auth-form'>
    <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
    <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
    <p className='text-xl mb-5'>Gamers we are not cooking with this one.</p>
    <Button>
    <Link
      to='/'
      className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'>Go Back</Link>
    </Button>
   

</div>
  </section></div>
  )
}

export default InvalidPage