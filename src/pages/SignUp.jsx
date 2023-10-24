import { useState } from 'react';
import {Link} from 'react-router-dom';

//Manusera os input  
  const SignUp = () => {
    return (
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
        <from className='flex flex-col gap-4'>
          <input type='text' placeholder='username' className='border p-3 rounded-lg' id='isername'/>
          <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'/>
          <input type='passwor' placeholder='password' className='border p-3 rounded-lg' id='password' />
          <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
        </from>
        <div className='flex gap-2 mt-6'>
          <p className='font-bold'>Se estiver cadastrado!</p>
          <Link to='/sign-in'>
              <span className='text-blue-700'>Faça o login</span>
          </Link>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  

