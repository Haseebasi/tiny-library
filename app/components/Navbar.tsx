"use client"

import Link from "next/link"
import Image from "next/image"
import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"
import TLLogo from "@/public/tinylibrary-logo.png"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="w-full bg-white">
      <nav className="flex items-center justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer flex items-center">
            <Image
              src={TLLogo}
              alt="Tiny Library Logo"
              className="h-25 w-auto object-contain"
              priority
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink href="/books" isActive={pathname.startsWith("/books")}>Books</NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
        </ul>
      </nav>
    </header>
  )
}