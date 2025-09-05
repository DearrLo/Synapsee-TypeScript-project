'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-sm bg-zinc-900/80 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold tracking-wider relative animate-pulse-logo transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 uppercase tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
            Synapsee
          </span>
          <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 opacity-20 blur-xl animate-spin-slow group-hover:opacity-30"></span>
        </Link>

        <div className="space-x-8 hidden md:flex">
          <Link href="/" className="relative text-sm uppercase font-medium tracking-widest text-zinc-300 transition-colors duration-300 hover:text-white group">
            <span className="relative z-10">Accueil</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/explorer" className="relative text-sm uppercase font-medium tracking-widest text-zinc-300 transition-colors duration-300 hover:text-white group">
            <span className="relative z-10">Explorer</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative text-sm uppercase font-medium tracking-widest text-zinc-300 transition-colors duration-300 hover:text-white group">
            <span className="relative z-10">À propos</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
