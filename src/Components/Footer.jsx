import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();
    

  return (
    <div>
        <div className='flex md:flex-row flex-col gap-5 justify-between mt-20 mb-10'>

            {/* --------left section------- */}
            <div className='md:w-[40%] w-full'>
                <img src={assets.logo} alt='' /><br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* ---------center section-------- */}
            <div>
                <p className='font-semibold text-xl leading-tight'>Company</p><br/>
                <ul>
                    <Link to='/home'>Home</Link><br/>
                    <Link to='/about'>About us</Link><br/>
                    <Link to='/contact'>Contact us</Link><br/>
                    <Link to='/privacy'>Privacy Policy</Link><br/>
                </ul>
            </div>

            {/* -------right Section------ */}
            <div>
                <p className='font-semibold color-blue-500 text-xl leading-tight'>GET IN TOUCH</p><br/>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* --------Copyright Text---------- */}
        <div className='flex flex-col items-center '>
            <hr className='w-full'/>
            <p className='my-5'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer