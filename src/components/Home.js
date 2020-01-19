import React from 'react';
import Slider from './Slider'
import Footer from './Footer'
import Games from './Games'
import Team from './Team'
import Sitelink from './Sitelinks';
const Home=()=>{
    return(
        <div>
            <Slider/>
            <Games/>
            <Team/>
            <Sitelink/>
            <Footer/>
        </div>
    )
}
export default Home