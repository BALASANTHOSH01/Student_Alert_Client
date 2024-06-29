import React from 'react'
import {Footer, HomeNavBar} from "../components/LayoutComponents/index.ts";
import {Hero} from "../components/Home/index.ts";

const Home = () => {
  return (
    <div className=' overflow-hidden font-nunito'>
      <HomeNavBar/>
      <div>
      <Hero/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home