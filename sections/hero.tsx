import Image from 'next/image'
import { mainLogo } from '@/lib/constants'
import CountdownTimer from '@/components/countdown-timer'

const Hero = () => {
  return (
    <section className='max-container pt-[113px]'>
      <div className='flex flex-col-reverse justify-center items-center gap-6 lg:flex-row lg:gap-20' >
        <div className='max-w-lg text-center lg:text-start'>
          <p className='mb-2 text-white/80 text-lg font-mono'>Sri Sai Ram Engineering College Presents</p>
          <p className='font-mono gradient-primary font-bold text-xl text-primary'>SAIMECH'25</p>
          <h1 className='mb-2 h1 gradient-primary tracking-tighter ' >TorqueFest</h1>
          <p className='max-w-md font-mono leading-8 text-zinc-400/90'>A National Level Technical Symposium organized by Department of Mechanical Engineering, Sri Sai Ram Engineering College on 31/10/2025.</p>
        </div>
        <div>
          <Image src={mainLogo} alt='sympo-logo' width={600} height={600}></Image>
        </div>
      </div>
      <div className='mt-32 lg:mt-12'>
        <h2 className='mb-8 h2 gradient-primary text-center font-grotesk tracking-tighter'>COUNTDOWN</h2>
        <CountdownTimer></CountdownTimer>
      </div>
    </section>
  )
}

export default Hero