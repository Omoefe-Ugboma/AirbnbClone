import React from 'react'
import './Home.css'
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
        <Banner/>
        <div className='home__section'>
           <Card 
           src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           title="Online Experiences"
           description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/774042/pexels-photo-774042.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Online Experiences"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Online Experiences"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
        </div>
        <div className='home__section'>
        <Card 
           src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600"
           title="Online Experiences"
           description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/137090/pexels-photo-137090.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Online Experiences"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/895555/pexels-photo-895555.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Online Experiences"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
        </div>
    </div>
  )
}

export default Home