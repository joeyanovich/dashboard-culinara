'use client'

import { Search } from "./header/search";
import { Theme } from "./header/light-dark-theme";
import { Avatar } from "./header/avatar";
import { Shop } from "./header/shop";

export function Header() {
  return (
    <header className="flex items-center justify-around gap-20 px-16 py-12 w-full h-20">
      <div className="text-2xl">
        Olá, <span className="font-bold">John Doe</span>
      </div>
      <div className="flex-1 rounded-lg w-full h-10 bg-slate-50">
        <Search />
      </div>
      <div className="flex justify-end items-center max-w-full gap-8">
        <Theme />
        <Avatar />
        <Shop />
      </div>
    </header>
  )
}