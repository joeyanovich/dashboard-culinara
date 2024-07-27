import { Sun } from "@phosphor-icons/react";

export function Theme() {
  return (
    <button className="flex items-center justify-center p-2 size-10 rounded-xl text-slate-600 hover:bg-amber-500 hover:text-slate-50">
      <Sun className="text-2xl" />
    </button>
  )
}