import React from 'react'

function Header() {
  return (
   <>
   <header>
    <div className='flex justify-between'>
    <h1 className='font-bold text-xl sm:text-xl flex flex-wrap  '>
        <span className='text-slate-500 '>Global</span>
        <span className='text-slate-700 pl-3'>Estates</span>
    </h1>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text"
        placeholder='Search...' 
        className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <i class="fa-solid fa-magnifying-glass"></i>
    </form>
   <ul className='flex gap-4'>
    <li>Home</li>
    <li>About</li>
    <li>SignIn</li>
   </ul>

    </div>
   
   </header>
   </>
  )
}

export default Header