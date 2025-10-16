import Button  from '@/components/button'
import { OverviewProps } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import {ArrowRight} from 'lucide-react'
import Link from 'next/link'

const Overview = ({content}: {content: OverviewProps} ) => {
  return (
    <section className='max-container'>
      <div className='flex flex-col gap-8 lg:hidden'>
        <h2 className='h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary'>
          {content.title}
        </h2>
        <div className='bg-zinc-950/50 flex flex-col justify-center items-center rounded-xl p-4'>
          <Image src={content.img} alt={content.imgAlt} width={content.imgWidth} className='rounded-3xl'></Image>
          <p className='text-accent/80 text-center font-mono leading-8 max-lg:max-w-lg max-md:max-w-md mt-8'>
            {content.description}
          </p>
          <div className="inline-flex max-w-sm mx-auto mt-6">
            <Button>{content.linkLabel}</Button>
          </div>       
        </div>
      </div>

      <div className='bg-zinc-950/50 flex p-4   rounded-xl  max-lg:hidden'>
        <div className='min-w-[35%] flex justify-center items-center'>
          <Image src={content.img} alt={content.imgAlt} width={content.imgWidth} className='rounded-3xl'></Image>
        </div>
        <div className='flex flex-col items-center p-8'>
          <h2 className='h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary'>
            {content.title}
          </h2>
          <p className='text-accent/80 font-mono leading-8 max-lg:max-w-lg max-md:max-w-md mt-8'>
            {content.description}
          </p>   
          <div className="inline-flex max-w-sm mx-auto mt-6">
            <Link href={content.linkTo}>
              <Button>{content.linkLabel}</Button>
            </Link>
          </div>         
        </div>
      
      </div>

      <div>

      </div>
    </section>
  )
}

export default Overview