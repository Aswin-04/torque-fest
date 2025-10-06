'use client'

import { mainLogo, navLinks } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import openMenuIcon from '@/public/logos/open-menu.svg'
import closeMenuIcon from '@/public/logos/close-menu.svg'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav>
      <div className="fixed z-50 top-0 left-0 w-full pl-4 pr-10 py-2 text-primary border-b border-primary/20 text-lg backdrop-blur-xl">
        <div className="max-container flex justify-between items-center">
          <Link href={'/'} className='w-32 cursor-pointer'>
            <Image src={mainLogo} alt='main-logo'></Image>
          </Link>

          <div className="max-lg:hidden">
            <ul className="flex gap-12 font-medium">
              {navLinks.map((navLink) => (
                <li key={navLink.label} className={`cursor-pointer relative nav-item ${pathname == navLink.to ? 'active' : ''}`}>
                  <Link href={navLink.to}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Image src={isMenuOpen ? closeMenuIcon : openMenuIcon} alt="menu-icon" className={`${isMenuOpen ? 'rotate-90' : 'rotate-0'} w-8 h-8 cursor-pointer transition-all duration-500 ease-out`} ></Image>
            </button>
          </div>
        </div>
      </div>
      <div className={`backdrop-blur-sm lg:hidden fixed top-[113px] left-0 right-0 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-500 ease-out`}>
        <ul className="bg-secondary/1  text-xl pb-30 h-screen  font-medium flex flex-col justify-center items-center gap-16">
          {navLinks.map((navLink) => (
            <li key={navLink.label} className={`text-primary cursor-pointer relative nav-item ${pathname == navLink.to ? 'active' : ''}`}>
              <Link href={navLink.to} onClick={() => setIsMenuOpen(false)}>{navLink.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header