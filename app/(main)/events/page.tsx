import React from 'react'
import { eventsData } from '@/lib/constants'
import EventCard from '@/components/event-card'

const Events = () => {
  return (
    <section className="pt-[133px]">
      <div className='padding-b max-container' >
        <h2 className='my-10 h1 gradient-primary tracking-tight text-center ' >Events</h2>
        <ul className='flex flex-wrap justify-center' >
          {eventsData.map((event) => (
            <li key={event.id}>
              <EventCard event={event} ></EventCard>
            </li>
          ))}
        </ul>
      </div>

    </section>  )
}

export default Events