import { MagnifyingGlass } from "@phosphor-icons/react";

export function Search() {
  return (
    <div>
      <form className="flex items-center gap-2 rounded-lg h-10 px-4">
        <input
          className="flex-1 h-8 outline-none border-none bg-transparent"
          type="text"
          placeholder="Pesquise por um nome de comida"
        />
        <button type="submit">
          <MagnifyingGlass
            className="text-2xl"
            weight="thin"
          />
        </button>
      </form>
    </div>
  )
}