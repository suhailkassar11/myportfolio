import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Sociallinks = () => {
    const links=[
        {
            id:1,
            child:(<>LinkedIn<FaLinkedin size={30}/></>),
            href:'https://linkedin.com',
            
        },
        {
            id:2,
            child:(<>
                Github <FaGithub size={30}/>
            </>),
            href:'https://github.com',
        
        },
        {
            id:3,
            child:(<>
                Emial<HiOutlineMail size={30}/>
            </>),
            href:'mailto:sk1181408@gmail.com',
            
        },
        {
            id:4,
            child:( <>
                Resume<BsFillPersonLinesFill size={30}/>
            </>),
            href:'suhail_resume.pdf',
            download:true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
    {links.map(({id,child,href,download})=>(
        <li key={id} className='flex  justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-90px] hover:ml-[-10px] hover:rounded-2xl duration-300 hover:bg-gradient-to-r from-red-500 to-red-300-400 hover:text-xl font-bold'>
        <a href={href} className='flex justify-between items-center w-full text-white '
        download={download}
        target="_blank"
        rel="noreferrer">
            {child}
        </a>
    </li>
    ))}
               
      </ul>
    </div>
  )
}

export default Sociallinks
