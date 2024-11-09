// import React from 'react'

import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from "../components/Qualities"
import WhoAreWe from "../components/WhoAreWe"
import Team from '../components/Team'
import Reservation from "../components/Reservations"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default Home