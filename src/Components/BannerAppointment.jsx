import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const BannerAppointment = () => {

  const navigate = useNavigate();

  return (
    <div className='h-full bg-blue-500 flex md:flex-row flex-col justify-between mt-20 items-center px-10 md:px-20 gap-5  rounded-[10px]'>
        <div className='flex flex-col items-start py-10 '>
            <h2 className='text-[25px] md:text-[35px] lg:text-[45px] font-medium text-white leading-Normal '>Book Appointment <br/> With 100+ Trusted Doctors</h2><br/>
            <button onClick={()=>navigate('/login')} className='px-8 py-3 bg-white text-blue rounded-full font-regular'>Create Account</button>
        </div>
        <div className='flex items-end lg:pr-10 pr-0 relative hidden md:block'>
            <img className='w-full h-full md:h-[500px] mt-[-40px] ' src={assets.appointment_img} alt=''/>
        </div>
    </div>
  )
}

export default BannerAppointment