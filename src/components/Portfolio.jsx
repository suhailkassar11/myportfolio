import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import usestate from '../assets/portfolio/usestate.jpg'
const Portfolio = () => {
    const portfolio=[
        {
            id:1,
            src:arrayDestruct
        },
        {
            id:2,
            src:installNode
        },
        {
            id:3,
            src:navbar
        },
        {
            id:4,
            src:reactParallax
        },
        {
            id:5,
            src:reactSmooth
        },
        {
            id:6,
            src:reactWeather
        },
        {
            id:7,
            src:usestate
        },
    ]
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-full'>
      <div className='flex flex-col max-w-screen-lg p-4 mx-auto justify-center  w-full h-full text-2xl text-white'>
        <div className='pb-8'>
            <p className='font-bold text-4xl inline border-b-4 border-gray-500 '>Portfolio</p>
            <p className='pt-8'>check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 space-x-8 space-y-8'>
            {portfolio.map(({id,src})=>(
                <div key={id} className='shadow-md shadow-gray-300 rounded-lg '>
                <img src={src} alt=""className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center' >
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl bg-blue-400' >demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl bg-blue-400'>code</button>
                </div>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
