import React from 'react'

interface CountdownCardProps {
  value: string,
  label: string
}

const CountdownCard = ({value, label}: CountdownCardProps) => {
  return (
    <div className='font-mono bg-zinc-950/50 border-1 border-primary/30 text-center text-primary rounded-lg backdrop-blur-lg px-4 padding-y-countdown'>
      <span className='h3'>{value}</span>
      <br/>
      <span className="text-[8px] xxs:text-[10px] xs:text-xs sm:text-sm md:text-base font-medium" >{label}</span>
    </div>
  )
}

export default CountdownCard