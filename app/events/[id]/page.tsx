import EventDetailsRenderer from '@/components/event-details-renderer'
import { eventsData } from '@/lib/constants';
import { notFound } from 'next/navigation';
import React from 'react'

const Page = async ({params}: {params: Promise<{id: string}>}) => {
  
  const { id } = await params

  const event = eventsData.find((event) => event.id.toString() === id);
  if (!event) return notFound();
  
  return (
    <div className='' >
      <EventDetailsRenderer event={event} ></EventDetailsRenderer>
    </div>
  )
}

export default Page