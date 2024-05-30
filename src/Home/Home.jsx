import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from './components/Banner'
import Volunteer from './components/Volunteer'
import Stat from './components/Stat'
import Gallery from './components/Gallery'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const data = useLoaderData();

  return (
    <div className='space-y-32'>
      <Helmet>
        <title>HOME | VolunteerHub</title>
      </Helmet>
      <Banner/>
      <Volunteer data={data}/>
      <Stat/>
      <Gallery/>
    </div>
  )
}

export default Home