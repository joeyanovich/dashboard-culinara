'use client'

import { Anton } from "next/font/google";
import { useState } from "react";

const anton = Anton({
  weight: ['400'],
  subsets: ["latin"]
});

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <aside className={`bg-gray-800 text-white ${isMenuOpen ? 'w-64' : 'w-16'} transition-width duration-300 h-full`}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-4 focus:outline-none"
      >
        {isMenuOpen ? 'Close' : 'Open'}
      </button>
      {isMenuOpen && (
        <nav className="mt-4">
          <header>
            <h2 className={`text-2xl ${anton.className}`}>culinara</h2>
          </header>
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Home</a></li>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">About</a></li>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}
    </aside>
  )
}