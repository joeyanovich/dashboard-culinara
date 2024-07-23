'use client'

import { At, BookOpenText, CalendarHeart, Fire, Images, SquaresFour } from "@phosphor-icons/react";
import { Button } from "@radix-ui/themes";
import { Rubik_Mono_One } from "next/font/google";
import { useState } from "react";
import { NavItem } from "./nav-item";

const rubik = Rubik_Mono_One({
  weight: ['400'],
  subsets: ["latin"]
});

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <aside className={`${isMenuOpen ? 'w-72' : 'w-24'} flex flex-col items-start gap-20 h-full rounded-r-2xl p-5 bg-slate-50 transition-width duration-500`}>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-1">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-amber-100 transition-hover duration-300"
          >
            <Fire weight="fill" className="size-12 text-amber-500"/>
          </Button>

          {isMenuOpen && <p className={`${rubik.className} text-xl`}>culinara<span className="text-amber-500">.</span></p>}
        </div>
      </div>
      <nav>
        <ul className="flex flex-col justify-center gap-4">
          <NavItem icon={SquaresFour} tooltip="Visão Geral" href="#" isMenuOpen={isMenuOpen} />
          <NavItem icon={BookOpenText} tooltip="Cardápio" href="#" isMenuOpen={isMenuOpen} />
          <NavItem icon={CalendarHeart} tooltip="Temática" href="#" isMenuOpen={isMenuOpen} />
          <NavItem icon={Images} tooltip="Galeria" href="#" isMenuOpen={isMenuOpen} />
          <NavItem icon={At} tooltip="Contato" href="#" isMenuOpen={isMenuOpen} />
        </ul>
      </nav>
    </aside>
  )
}