import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
const Experience = () => {
    const experience=[
        {
            id:1,
            src:css,
            title:'css',
            style:'shadow-blue-400',
        },
        {
            id:2,
            src:github,
            title:'github',
            style:'shadow-gray-300',
        },
        {
            id:3,
            src:graphql,
            title:'graphql',
            style:'shadow-pink-300',
        },
        {
            id:4,
            src:html,
            title:'html',
            style:'shadow-orange-300',
        },
        {
            id:5,
            src:javascript,
            title:'javascript',
            style:'shadow-yellow-300',
        },
        {
            id:6,
            src:nextjs,
            title:'nextjs',
            style:'shadow-gray-300',
        },
        {
            id:7,
            src:node,
            title:'node',
            style:'shadow-green-500',
        },
        {
            id:8,
            src:react,
            title:'react',
            style:'shadow-blue-400',
        },
        {
            id:9,
            src:tailwind,
            title:'tailwind',
            style:'shadow-blue-300',
        },
    ]
  return (
    <div name="Experience" className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-full'>
      <div className='flex flex-col max-w-screen-lg p-4 mx-auto justify-center  w-full h-full text-2xl text-white'>
        <div className='pb-8'>
            <p className='font-bold text-4xl inline border-b-4 border-gray-500 '>Experience</p>
            <p className='pt-8'>these are some technologies which i work on</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 space-x-8 space-y-8 text-center'>
            {experience.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md ${style} rounded-lg duration-200 hover:scale-105`}>
                <img src={src} alt=""className='rounded-md ' />
                <p className='mt-4'>{title}</p>
            </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Experience
