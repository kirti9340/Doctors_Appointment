import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div id='speciality' className='flex flex-col items-center'>
      <h2 className='text-3xl text-dark font-semibold leading-[100%] pb-4'>Top Doctors to Book</h2>
      <p className='flex text-center leading-tight'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 pt-10 gap-4'>
        {doctors.slice(0,10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className='border border-gray-200 rounded cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
          >
            <div className='flex flex-col items-center bg-blue-50'>
              <img className='flex items-center' src={item.image} alt=''/>
            </div>
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm font-medium'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => { navigate('/doctors'); scrollTo(0,0); }}
        className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
