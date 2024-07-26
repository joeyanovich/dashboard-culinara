import { MagnifyingGlass } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-10 w-full h-20 bg-red-200 ">
      <form className="">
        <input
          className="w-96 h-10 rounded-lg border-none"
          type="text"
          placeholder="pesquise por um nome de comida"
        />
        <button>
          <MagnifyingGlass size={32} weight="thin" />
        </button>
      </form>
      <div className="flex items-center justify-center gap-8">
        <div>
          dark
        </div>
        <div>
          avatar
        </div>
        <div>
          cart
        </div>
      </div>
    </header>
  )
}