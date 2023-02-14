import React from 'react'
const About = () => {
  return (
    <div name="about" className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-black
     to-gray-500'>
      <div className='max-w-screen-lg p-4 mx-auto justify-center flex flex-col w-full h-full text-2xl text-white'>
        <div className='pb-8' >
            <p className='text-4xl font-bold text-white inline border-b-4 border-gray-500 '>About</p>
        </div>
        <p className='mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam distinctio consequatur nobis, quibusdam modi perferendis praesentium sint nostrum aspernatur debitis temporibus ipsum eum, vel facere vero doloremque! Quam, voluptatibus?
        </p>
            <br />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et ad nihil sint accusantium cumque quaerat, quo perspiciatis repudiandae voluptatibus magni earum. Libero veniam culpa beatae eum quos velit dignissimos!
        
        </p>
      </div>
    </div>
  )
}

export default About

