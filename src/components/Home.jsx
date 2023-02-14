import React  from 'react';
import hero from '../assets/hero.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full mr-auto'>
                <h2 className='text-white text-4xl sm:text-7xl font-bold'>
                    i am a frontend developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex totam eaque itaque quasi ullam minima repellat deserunt accusantium dolorem error tempore fuga iste quas, voluptatibus reiciendis minus iusto. Dicta, minima?
                </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} className='group text-white w-fit rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 flex items-center my-3'>
                        portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight className='group-hover:rotate-90 duration-300 mx-1' size={25}/>
                        </span>
                    </Link>
                </div>
            </div>
        <div ><img className='h-80 w-96 rounded-2xl mx-auto md:w-full' src={hero} alt="" /></div>
        </div>
    </div>
  )
}

export default Home
