'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Download, Monitor, Shield, Zap, Github, Cpu, HardDrive, Wifi, LucideLink} from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section')
      const visibleSections = {}

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0
        visibleSections[section.id] = isVisible
      })

      setIsVisible(visibleSections)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <header className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300  ${isScrolled ? 'bg-white bg-opacity-80 shadow-lg backdrop-blur-md rounded-full' : ''} hidden lg:block `}>
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 transform hover:scale-110 transition-transform">IncreaseOS</div>
          <ul className="flex space-x-6">
            {['Features', 'Characteristics', 'Download', 'Contributors'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 transition-colors hover:underline transform hover:scale-110 transition-transform">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto mt-24 sm:mt-32 relative z-10">
        <section className={`text-center mb-24 transition-all duration-1000 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Experience the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Increase OS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A modern, secure, and lightning-fast operating system for all kind of gear.
          </p>
          <a href="#download" className="inline-block px-8 py-4 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white text-lg font-semibold hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 hover:shadow-xl transform hover:scale-105 backdrop-blur-sm bg-opacity-90 border border-white border-opacity-20">
            Download Now
          </a>
        </section>

        <section id="features" className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 transition-all duration-1000 transform ${isVisible['features'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: <Image src="https://www.svgrepo.com/show/353640/debian.svg" width={48} height={48} alt="Debian Logo" />, title: "Debian based", description: "Solid, reliable, debian based OS" },
            { icon: <Shield className="w-12 h-12 text-indigo-600" />, title: "Enhanced Security", description: "Advanced protection against threats" },
            { icon: <Zap className="w-12 h-12 text-indigo-600" />, title: "Lightning Fast", description: "Optimized for speed and performance, light as a feather" }
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold mt-6 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="characteristics" className={`mb-24 transition-all duration-1000 transform ${isVisible['characteristics'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Key Characteristics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="w-10 h-10 text-purple-600" />, title: "Powerful Performance", description: "Utilizes cutting-edge hardware acceleration for smooth operation" },
              { icon: <HardDrive className="w-10 h-10 text-purple-600" />, title: "Efficient Storage", description: "Advanced file system for quick access and data integrity" },
              { icon: <Wifi className="w-10 h-10 text-purple-600" />, title: "Seamless Connectivity", description: "Built-in support for the latest wireless standards" },
              { icon: <Shield className="w-10 h-10 text-purple-600" />, title: "Robust Security", description: "Multi-layered security architecture to protect your data" },
              { icon: <Monitor className="w-10 h-10 text-purple-600" />, title: "Customizable Interface", description: "Tailor the look and feel to your preferences" },
              { icon: <Zap className="w-10 h-10 text-purple-600" />, title: "Quick Boot", description: "Optimized startup process for instant productivity" }
            ].map((characteristic, index) => (
              <div key={index} className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                <div className="flex flex-col items-center text-center">
                  {characteristic.icon}
                  <h3 className="text-xl font-semibold mt-6 mb-4">{characteristic.title}</h3>
                  <p className="text-gray-600">{characteristic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="download" className={`text-center mb-24 transition-all duration-1000 transform ${isVisible['download'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Upgrade?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Download IncreaseOS and step into the future of computing. Choose the version that suits your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://sourceforge.net/projects/increaseos/files/IncreaseOS-core-24.1/IncreaseOS-core-24.1.iso" target="_blank" className="inline-flex items-center px-8 py-4 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transform hover:scale-105 backdrop-blur-sm bg-opacity-90 border border-white border-opacity-20">
              <Download className="w-6 h-6 mr-3" />
              Download Core
            </a>
            <a href="https://sourceforge.net/projects/increaseos/files/IncreaseOS-xfce-24.1/IncreaseOS-24-xfce-24.1.iso" target="_blank" className="inline-flex items-center px-8 py-4 rounded-full shadow-lg transition-all duration-300 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold hover:from-pink-600 hover:to-red-600 hover:shadow-xl transform hover:scale-105 backdrop-blur-sm bg-opacity-90 border border-white border-opacity-20">
              <Download className="w-6 h-6 mr-3" />
              Download XFCE4
            </a>
          </div>
        </section>

        <section id="contributors" className={`mb-24 transition-all duration-1000 transform ${isVisible['contributors'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Contributors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "CuerdOS", role: "Kernel provider for the OS core.", image: "https://avatars.githubusercontent.com/u/134963245?v=4?height=200&width=200", page: "https://cuerdos.github.io/" },
              { name: "Distro Tux", role: "Review and promotion for this product.", image: "https://yt3.googleusercontent.com/VYmJdBHzW4pikZjmiwznzBjhxvFDANrCIyvXJdr2xffEKFNzM2SDJ7kA1nMwWjgw0mPg2QgJVI8=s160-c-k-c0x00ffffff-no-rj", page: "https://www.youtube.com/@distritotux" },
             
            ].map((contributor, index) => (
              <div key={index} className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex flex-col items-center">
                <img src={contributor.image} alt={contributor.name} className="w-32 h-32 rounded-full mb-6 border-4 border-purple-500" />
                <h3 className="text-xl font-semibold mb-2">{contributor.name}</h3>
                <p className="text-gray-600 mb-4">{contributor.role}</p>
                <a href={contributor.page} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <LucideLink className="w-6 h-6" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-600 py-8 bg-white bg-opacity-40 backdrop-blur-md rounded-3xl mt-12 relative z-10">
        <p>&copy; {new Date().getFullYear()} IncreaseOS. All rights reserved.</p>
      </footer>

      {/* Particle effect */}
      <div className="absolute inset-0 z-0">
        <div className="particles">
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 20 + 10}s`,
                '--delay': `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}