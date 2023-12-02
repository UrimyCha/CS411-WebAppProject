import React from 'react'
import './index.css'
import Inputs from './assets/components/inputs.jsx'
import Card from './assets/components/moreinfo.jsx'

export default function Home() {
  return (
    <><Inputs /><h3 className="recommendation">You may also like:</h3><Card className="Card1"
      link="https://www.movoto.com/blog/best-counties-in-america/"
      image="/18805524786_d8e8aaa84c_k.jpg"
      description="10 best place to live in US" /><Card className="Card2"
        link="https://www.niche.com/places-to-live/search/best-counties/"
        image="/countryside-england-britain-fields-road-grass-wind-1080P-wallpaper.jpg"
        description="33 Best Fall Vacations in the US" /></>
  )
}

