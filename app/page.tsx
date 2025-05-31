"use client"

import { useState } from "react"
import Link from "next/link"
import { Play, Users, Music, MessageSquare, TrendingUp, Eye, Headphones, Bell, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyVCommunity() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const platforms = [
    { name: "치지직", color: "bg-orange-500", count: 245 },
    { name: "숲", color: "bg-green-500", count: 189 },
    { name: "유튜브", color: "bg-red-500", count: 628 },
    { name: "기타", color: "bg-gray-500", count: 91 },
  ]

  const liveStreams = [
    { name: "아이네", platform: "치지직", viewers: 1234, category: "게임", isLive: true },
    { name: "징버거", platform: "치지직", viewers: 892, category: "잡담", isLive: true },
    { name: "릴파", platform: "치지직", viewers: 2156, category: "게임", isLive: true },
    { name: "주르르", platform: "치지직", viewers: 756, category: "노래", isLive: true },
  ]

  const musicChart = [
    {
      rank: 1,
      title: "Stay",
      artist: "아이네",
      originalArtist: "The Kid LAROI, Justin Bieber",
      views: "1.2M",
      type: "커버",
      uploadDate: "2024-05-28",
    },
    {
      rank: 2,
      title: "새로운 시작",
      artist: "이세계아이돌",
      originalArtist: null,
      views: "890K",
      type: "오리지널",
      uploadDate: "2024-05-25",
    },
    {
      rank: 3,
      title: "밤하늘의 별처럼",
      artist: "징버거",
      originalArtist: "경서",
      views: "756K",
      type: "커버",
      uploadDate: "2024-05-22",
    },
  ]

  const recommendedSongs = [
    {
      title: "Hype Boy",
      artist: "고세구",
      originalArtist: "NewJeans",
      thumbnail: "/placeholder.svg?height=120&width=120",
      mood: "신나는",
    },
    {
      title: "사랑은 늘 도망가",
      artist: "아이네",
      originalArtist: "임영웅",
      thumbnail: "/placeholder.svg?height=120&width=120",
      mood: "감성적인",
    },
    {
      title: "Dangerously",
      artist: "주르르",
      originalArtist: "Charlie Puth",
      thumbnail: "/placeholder.svg?height=120&width=120",
      mood: "몽환적인",
    },
    {
      title: "우리들의 블루스",
      artist: "이세계아이돌",
      originalArtist: null,
      thumbnail: "/placeholder.svg?height=120&width=120",
      mood: "청량한",
    },
  ]

  const communityPosts = [
    { title: "이번 주 추천 버튜버는?", author: "익명123", replies: 45, views: 892, time: "2시간 전" },
    { title: "치지직 vs 유튜브 어디가 더 좋나요?", author: "버튜버팬", replies: 23, views: 567, time: "4시간 전" },
    { title: "신인 버튜버 추천해주세요", author: "newbie", replies: 67, views: 1234, time: "6시간 전" },
  ]

  const notices = [
    { title: "사이트 업데이트 안내 (v2.1)", date: "2024-05-30", important: true },
    { title: "커뮤니티 이용 규칙 변경 안내", date: "2024-05-25", important: false },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                한국 버튜버의
                <br />
                모든 것을{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  한곳에서
                </span>
                <br />
                만나보세요!
              </h1>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-purple-400 text-sm font-medium">등록된</div>
                  <div className="text-purple-400 text-sm font-medium">버튜버 그룹</div>
                  <div className="text-4xl font-bold">91</div>
                </div>
                <div className="space-y-2">
                  <div className="text-purple-400 text-sm font-medium">등록된</div>
                  <div className="text-purple-400 text-sm font-medium">버튜버 개인</div>
                  <div className="text-4xl font-bold">1062</div>
                </div>
              </div>
            </div>

            {/* Enhanced 3D Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="w-36 h-36 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl transform rotate-12 shadow-2xl flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-36 h-36 bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl transform -rotate-6 shadow-2xl flex items-center justify-center">
                    <Music className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform -rotate-12 shadow-2xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-green-400 rounded-2xl transform rotate-45 shadow-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white transform -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Recommended Songs */}
      <section className="px-6 py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Headphones className="w-6 h-6 text-purple-400" />
              오늘은 뭐 듣지? 🎧
            </h2>
            <Button variant="ghost" size="sm" className="text-purple-400">
              더보기 <ChevronRightIcon className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedSongs.map((song, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="relative h-32">
                  <img
                    src={song.thumbnail || "/placeholder.svg"}
                    alt={`${song.title} by ${song.artist}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                    <Badge className="bg-purple-500 hover:bg-purple-600">{song.mood}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate">{song.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                  {song.originalArtist && <p className="text-xs text-gray-500 truncate">원곡: {song.originalArtist}</p>}
                </CardContent>
                <CardFooter className="p-0">
                  <Button variant="ghost" className="w-full rounded-none py-2 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" /> 들어보기
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">플랫폼별 버튜버 현황</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${platform.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                  <p className="text-2xl font-bold text-purple-400">{platform.count}</p>
                  <p className="text-sm text-gray-400">명의 버튜버</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="live" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger value="live" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                라이브 현황
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                음악 차트
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                커뮤니티
              </TabsTrigger>
              <TabsTrigger value="notices" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                공지사항
              </TabsTrigger>
            </TabsList>

            <TabsContent value="live" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">현재 라이브 중인 버튜버</h3>
                <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                  LIVE {liveStreams.length}
                </Badge>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {liveStreams.map((stream) => (
                  <Card key={stream.name} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{stream.name}</h4>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-red-400">LIVE</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">
                        {stream.platform} • {stream.category}
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{stream.viewers.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/live">
                  <Button variant="outline">전체 라이브 보기</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="music" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">이번 주 인기 음악</h3>
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  전체 차트 보기
                </Button>
              </div>
              <div className="space-y-4">
                {musicChart.map((song) => (
                  <Card key={song.rank} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-purple-400 w-8">{song.rank}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{song.title}</h4>
                            <Badge variant={song.type === "커버" ? "secondary" : "default"}>{song.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-400">
                            {song.artist}
                            {song.originalArtist && ` • 원곡: ${song.originalArtist}`}
                          </p>
                          <p className="text-xs text-gray-500">{song.uploadDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm">
                            <Eye className="w-4 h-4" />
                            <span>{song.views}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/music">
                  <Button variant="outline">전체 차트 보기</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">인기 게시글</h3>
                <Button variant="outline" size="sm">
                  글쓰기
                </Button>
              </div>
              <div className="space-y-4">
                {communityPosts.map((post, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{post.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{post.author}</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/community">
                  <Button variant="outline">전체 게시글 보기</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="notices" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">공지사항</h3>
              </div>
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {notice.important && <Badge className="bg-red-500 hover:bg-red-600">중요</Badge>}
                          <h4 className="font-semibold">{notice.title}</h4>
                        </div>
                        <div className="text-sm text-gray-400">{notice.date}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link href="/notices">
                  <Button variant="outline">전체 공지사항 보기</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
