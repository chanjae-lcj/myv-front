"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import SearchDropdown from "./search-dropdown"

export default function Navbar() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)

  const navItems = [
    { name: "버튜버 그룹", href: "/groups" },
    { name: "버튜버 도감", href: "/vtubers" },
    { name: "LIVE", href: "/live" },
    { name: "음악 차트", href: "/music" },
    { name: "커뮤니티", href: "/community" },
    { name: "공지사항", href: "/notices" },
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-black sticky top-0 z-40">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">my</span>
          <span className="text-purple-400">V</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="버튜버 통합 검색"
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64 cursor-pointer focus:bg-gray-700 focus:border-gray-600"
            onClick={() => setIsSearchDropdownOpen(true)}
            onFocus={() => setIsSearchDropdownOpen(true)}
            readOnly
          />
        </div>
        <SearchDropdown isOpen={isSearchDropdownOpen} onClose={() => setIsSearchDropdownOpen(false)} />
      </div>
    </nav>
  )
}
