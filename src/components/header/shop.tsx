import { Bag } from "@phosphor-icons/react";

export function Shop() {
  return(
    <button className="flex items-center justify-center p-2 size-10 rounded-xl text-slate-600 hover:bg-amber-500 hover:text-slate-50">
      <Bag className="text-2xl" />
    </button>
  )
}