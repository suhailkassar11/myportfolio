import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {TbLayoutNavbar} from 'react-icons/tb'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav,setnav]=useState(false)
  const links=
  [
    {
    id:1,
    link:"home"
    },
    {
    id:2,
    link:"about"
    },
    {
    id:3,
    link:"portfolio"
    },
    {
    id:4,
    link:"experience"
    },
    {
    id:5,
    link:"contact"
    },
  ]
  return (
    <div className='flex justify-between items-center w-full
     h-20 text-white bg-black fixed duration-300 px-4 mt-[-42px] hover:mt-[-1px]'>
      <div>
        <h1 className='font-signature text-4xl ml-2 '>Suhail</h1>
        <div>
        <TbLayoutNavbar size={10}/>
        </div>
      </div>
      <ul className='space-x-5 hidden md:flex'>
        {links.map(({id,link})=>(
            <li key={id} className='cursor-pointer text-gray-500 hover:scale-105 duration-200 font-medium capitalize'><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
      <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={()=>setnav(!nav)}>
          {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black  to-gray-500'>
        {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={()=>setnav(!nav)} to='link' smooth duration={500}>{link}</Link></li>
        ))}
      </ul>)}
    </div>
  )
}

export default Navbar

