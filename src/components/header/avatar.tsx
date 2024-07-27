import { User } from "@phosphor-icons/react";
import * as DropdownMenu  from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export function Avatar() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center justify-center size-10 rounded-xl text-slate-600 hover:bg-amber-500 hover:text-slate-50">
          <User className="text-2xl" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex p-4 rounded-xl mt-1 bg-slate-50">
          <DropdownMenu.Item className="">
          <Link href="#" className="text-xs text-slate-600">New Tab</Link>
        </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}