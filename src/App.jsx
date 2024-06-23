import React from 'react'
import logo from './assets/headshot-image.png'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='flex justify-center align-center text-4xl font-semibold p-2'>
        <h1>Web Application Programming and Hacking</h1>
      </div>
      <div className='flex justify-center align-center text-4xl font-normal p-2'>
        <h2>Front-end Web Development Lab</h2>
      </div>
      <div className='flex justify-center align-center text-4xl font-light p-2'>
        <h3>Instructor: Dr. Phu Phung</h3>
      </div>

     <div className='grid grid-cols-2 auto-rows-[300px] my-4'>
      <div className='flex justify-center w-3/4  bg-stone-300'>
        Student: Amaan Bilwar
      <img src={logo} alt="headshot"  className='w-40 h-40'/>
      </div>
      
      <div className='flex justify-center bg-zinc-300'>
      A simple HTML page with
      <div className='ml-2 '>
        <ul>
          <li>
            <a href="https://react.dev/" target='_blank' className='rounded-lg bg-grey-50 text-decoration-line: no-underline hover:underline decoration-blue-400'>REACT framework</a>
          </li>
          <li>
            <a href="https://www.javascript.com/" target='_blank' className='rounded-lg bg-grey-50 text-decoration-line: no-underline hover:underline decoration-orange-400'>Javascript</a>
          </li>
          <li>
            <a href="https://jquery.com/" target='_blank' className='rounded-lg bg-grey-50 text-decoration-line: no-underline hover:underline decoration-slate-400'>JQuery</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target='_blank' className='rounded-lg bg-grey-50 text-decoration-line: no-underline hover:underline decoration-blue-600'>Tailwindcss :))</a>
          </li>
        </ul>
        </div>
      </div>
     </div>
      <hr />
      
    </>
  )
}

export default App
