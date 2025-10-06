'use client'
import React, { useEffect, useState } from 'react'
import CountdownCard from './countdown-card'

const CountdownTimer = () => {
  const expiryDate = "31 oct 2025 09:30:00"
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "0",
    countdownHours: "0",
    countdownMinutes: "0",
    countdownSeconds: "0"
  })

  useEffect(() => {
    const eventTime = new Date(expiryDate).getTime()
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime()
      const remainingTime = eventTime - currentTime

      if(remainingTime > 0) {
        const totalDays = Math.floor(remainingTime/(1000 * 60 * 60 * 24))
        const totalHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const totalMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000* 60))
        const totalSeconds = Math.floor((remainingTime % (1000*60)) / 1000)

        setCountdownTime({
          countdownDays: String(totalDays).padStart(2, "0"),
          countdownHours: String(totalHours).padStart(2, "0"),
          countdownMinutes: String(totalMinutes).padStart(2, "0"),
          countdownSeconds: String(totalSeconds).padStart(2, "0")
        })
      } 
      else {
          setCountdownTime({
            countdownDays: "00",
            countdownHours: "00",
            countdownMinutes: "00",
            countdownSeconds: "00"
        })
      }
    })
    return () => clearInterval(timerInterval)
  }, [])

  return (
    <div className='grid grid-cols-[repeat(4,minmax(60px,1fr))] w-full md:max-w-3xl justify-center items-center mx-auto gap-4'>
      <CountdownCard label="Days   " value={countdownTime.countdownDays}></CountdownCard>
      <CountdownCard label="Hours  " value={countdownTime.countdownHours}></CountdownCard>
      <CountdownCard label="Minutes" value={countdownTime.countdownMinutes}></CountdownCard>
      <CountdownCard label="Seconds" value={countdownTime.countdownSeconds}></CountdownCard>
    </div>
  )
}

export default CountdownTimer