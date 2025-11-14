import React from 'react'
import Header from '../Components/Header'
import SpecialityMenu from '../Components/SpecialityMenu'
import TopDoctors from '../Components/TopDoctors'
import BannerAppointment from '../Components/BannerAppointment'

function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <BannerAppointment />
    </div>
  )
}

export default Home