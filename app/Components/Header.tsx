'use client';
import React from 'react'

const Header = () => {
  return (
    <div className='sm:flex justify-around items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h1 className='cursor-pointer' ><i className='text-2xl font-bold'>//Daily News//</i></h1>
      <ul className='py-4 w-2/6 flex items-center   justify-between '>
        <li className="mx-3 text-white text-xl font-bold cursor-pointer">Home</li>
        <li className="mx-3 text-white text-xl font-bold cursor-pointer">About</li>
        <li className="mx-3 text-white text-xl font-bold cursor-pointer">Contect</li>
      </ul>
      <select name="" id="" className='hidden sm:hidden lg:block' >
        <option value="Entertainment">Entertainment</option>
        <option value="Environment">Environment</option>
        <option value="Festival">Festival</option>
      </select>
      <div className='hidden sm:hidden lg:block'>
        <input type='text' placeholder='e.g. sports' className='h-10 p-1 rounded'/>
        <button className='h-10 p-1 cursor-pointer bg-blue-500 rounded ml-2'>Search</button>
      </div>
    </div>
  )
}

export default Header
