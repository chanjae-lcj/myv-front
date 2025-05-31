"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Clock, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface VTuber {
  id: string
  name: string
  group: string
  platform: string
  avatar: string
  followers: string
  tags: string[]
  description: string
}

interface SearchDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchDropdown({ isOpen, onClose }: SearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<VTuber[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState<string[]>(["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const vtubers: VTuber[] = [
    {
      id: "aine",
      name: "아이네",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "320K",
      tags: ["게임", "노래", "토크"],
      description: "이세계아이돌의 리더, 다양한 게임과 노래 방송",
    },
    {
      id: "jingburger",
      name: "징버거",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "290K",
      tags: ["노래", "게임", "ASMR"],
      description: "이세계아이돌 멤버, 감미로운 목소리의 소유자",
    },
    {
      id: "lilpa",
      name: "릴파",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "280K",
      tags: ["게임", "노래", "리액션"],
      description: "이세계아이돌 멤버, 귀여운 캐릭터와 목소리",
    },
    {
      id: "jururu",
      name: "주르르",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "275K",
      tags: ["노래", "게임", "토크"],
      description: "이세계아이돌 멤버, 파워풀한 보컬과 게임 실력",
    },
    {
      id: "gosegu",
      name: "고세구",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "310K",
      tags: ["게임", "노래", "댄스"],
      description: "이세계아이돌 멤버, 다재다능한 엔터테이너",
    },
    {
      id: "viichan",
      name: "비챤",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=32&width=32",
      followers: "270K",
      tags: ["게임", "토크", "ASMR"],
      description: "이세계아이돌 멤버, 차분하고 지적인 매력",
    },
  ]

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = vtubers.filter(
        (vtuber) =>
          vtuber.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vtuber.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vtuber.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() && !recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 4)])
    }
  }

  const handleVTuberClick = (vtuber: VTuber) => {
    if (!recentSearches.includes(vtuber.name)) {
      setRecentSearches([vtuber.name, ...recentSearches.slice(0, 4)])
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <div ref={dropdownRef} className="absolute top-full left-0 right-0 mt-2 z-50">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-hidden">
        {/* 검색 입력 */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="버튜버 통합 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
              autoFocus
            />
          </div>
        </div>

        <div className="overflow-y-auto max-h-80">
          {/* 검색 결과가 있을 때 */}
          {searchQuery && searchResults.length > 0 && (
            <div className="p-3">
              <h3 className="text-xs font-medium text-gray-500 mb-2 px-1">검색 결과</h3>
              <div className="space-y-1">
                {searchResults.slice(0, 5).map((vtuber) => (
                  <Link
                    key={vtuber.id}
                    href={`/vtubers/${vtuber.id}`}
                    onClick={() => handleVTuberClick(vtuber)}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={vtuber.avatar || "/placeholder.svg"}
                      alt={vtuber.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 text-sm truncate">{vtuber.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {vtuber.platform}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {vtuber.group} • {vtuber.followers}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 검색 결과가 없을 때 */}
          {searchQuery && searchResults.length === 0 && (
            <div className="p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">검색 결과가 없습니다</p>
            </div>
          )}

          {/* 검색어가 없을 때 - 기본 화면 */}
          {!searchQuery && (
            <div className="p-4 space-y-4">
              {/* 환영 메시지 */}
              <div className="text-center py-4">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">찾고 싶은 버튜버를</h3>
                <h3 className="text-sm font-bold text-gray-900 mb-1">검색해보세요!</h3>
                <p className="text-xs text-gray-500">이름, 그룹, 태그로 검색할 수 있습니다</p>
              </div>

              {/* 인기 검색어 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-3 h-3 text-gray-400" />
                  <h4 className="text-xs font-medium text-gray-700">인기 검색어</h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  {popularSearches.slice(0, 6).map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* 최근 검색어 */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <h4 className="text-xs font-medium text-gray-700">최근 검색어</h4>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.slice(0, 3).map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(term)}
                        className="block w-full text-left p-1 hover:bg-gray-50 rounded text-xs text-gray-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
