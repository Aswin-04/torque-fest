import React from 'react'
import { aboutClg, aboutDepartment, aboutSecMotorSports } from '@/lib/constants'
import DetailsRenderer from '@/components/details-renderer'

const About = () => {
  return (
    <main className='pt-[113px]' >
      <div className='max-container padding-x' >
        <div className='my-10' >
          <h2 className='h1 gradient-primary tracking-tight text-center' >About Us</h2>
        </div>
        <div className='padding-b' >
          <DetailsRenderer details={aboutClg} ></DetailsRenderer>
        </div>
        <div className='padding-b'>
          <DetailsRenderer details={aboutDepartment} ></DetailsRenderer>
        </div>      
        <div className='padding-b'>
          <DetailsRenderer details={aboutSecMotorSports} ></DetailsRenderer>
        </div>

      </div>
    </main>
  )
}

export default About