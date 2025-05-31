"use client"

import { useState, useEffect } from "react"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<VTuber[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState<string[]>(["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"])

  const vtubers: VTuber[] = [
    {
      id: "aine",
      name: "아이네",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "320K",
      tags: ["게임", "노래", "토크"],
      description: "이세계아이돌의 리더, 다양한 게임과 노래 방송",
    },
    {
      id: "jingburger",
      name: "징버거",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "290K",
      tags: ["노래", "게임", "ASMR"],
      description: "이세계아이돌 멤버, 감미로운 목소리의 소유자",
    },
    {
      id: "lilpa",
      name: "릴파",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "280K",
      tags: ["게임", "노래", "리액션"],
      description: "이세계아이돌 멤버, 귀여운 캐릭터와 목소리",
    },
    {
      id: "jururu",
      name: "주르르",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "275K",
      tags: ["노래", "게임", "토크"],
      description: "이세계아이돌 멤버, 파워풀한 보컬과 게임 실력",
    },
    {
      id: "gosegu",
      name: "고세구",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
      followers: "310K",
      tags: ["게임", "노래", "댄스"],
      description: "이세계아이돌 멤버, 다재다능한 엔터테이너",
    },
    {
      id: "viichan",
      name: "비챤",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=40&width=40",
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* 검색 헤더 */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="버튜버 통합 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-black placeholder-gray-400 text-lg"
            autoFocus
          />
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            취소
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
          {/* 검색 결과가 있을 때 */}
          {searchQuery && searchResults.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">검색 결과</h3>
              <div className="space-y-2">
                {searchResults.map((vtuber) => (
                  <Link
                    key={vtuber.id}
                    href={`/vtubers/${vtuber.id}`}
                    onClick={() => handleVTuberClick(vtuber)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={vtuber.avatar || "/placeholder.svg"}
                      alt={vtuber.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{vtuber.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {vtuber.platform}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500">
                        {vtuber.group} • {vtuber.followers} 팔로워
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 검색 결과가 없을 때 */}
          {searchQuery && searchResults.length === 0 && (
            <div className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-500">다른 키워드로 검색해보세요</p>
            </div>
          )}

          {/* 검색어가 없을 때 - 기본 화면 */}
          {!searchQuery && (
            <div className="p-4 space-y-6">
              {/* 환영 메시지 */}
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">찾고 싶은 버튜버를</h3>
                <h3 className="text-xl font-bold text-gray-900 mb-2">검색해보세요!</h3>
                <p className="text-gray-500">이름, 그룹, 태그로 검색할 수 있습니다</p>
              </div>

              {/* 인기 검색어 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <h4 className="text-sm font-medium text-gray-700">인기 검색어</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* 최근 검색어 */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <h4 className="text-sm font-medium text-gray-700">최근 검색어</h4>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(term)}
                        className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-lg text-left transition-colors"
                      >
                        <span className="text-gray-700">{term}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setRecentSearches(recentSearches.filter((_, i) => i !== index))
                          }}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
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
