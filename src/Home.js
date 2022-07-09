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
           src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600"
           title="Online Experiences"
           description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Unique Stays"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
           <Card 
            src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Entire homes"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
           />
        </div>
        <div className='home__section'>
        <Card 
           src="https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?auto=compress&cs=tinysrgb&w=600"
           title="3 Bedroom Flat in with rest in heart"
           description="orem ipsum dolor sit amet consectetur adipisicing elit."
           price="$40/night"
           />
           <Card 
            src="https://images.pexels.com/photos/137090/pexels-photo-137090.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Penthouse in London"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
            price="$30/night"
           />
           <Card 
            src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="1 Bedroom apartment"
            description="orem ipsum dolor sit amet consectetur adipisicing elit."
            price="$49/night"
           />
        </div>
    </div>
  )
}

export default Home