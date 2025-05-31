import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Eye, Clock, Calendar, Bell } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function LiveStreams() {
  const liveStreams = [
    {
      name: "아이네",
      title: "🎮 발로란트 같이 해요! | 오늘은 다이아 가능?",
      platform: "치지직",
      viewers: 12345,
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "1시간 전",
    },
    {
      name: "징버거",
      title: "🎵 노래 방송 | 신청곡 받아요~",
      platform: "치지직",
      viewers: 8921,
      category: "노래",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "2시간 전",
    },
    {
      name: "릴파",
      title: "🎮 마인크래프트 | 새로운 집 짓기 프로젝트",
      platform: "치지직",
      viewers: 7456,
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "30분 전",
    },
    {
      name: "주르르",
      title: "🎤 노래 연습 | 새 커버곡 준비중!",
      platform: "치지직",
      viewers: 9872,
      category: "노래",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "1시간 30분 전",
    },
    {
      name: "고세구",
      title: "🎮 스타크래프트 | 래더 한판씩 하자",
      platform: "치지직",
      viewers: 11234,
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "45분 전",
    },
    {
      name: "비챤",
      title: "🎧 ASMR | 편안한 밤 되세요~",
      platform: "치지직",
      viewers: 6543,
      category: "ASMR",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "3시간 전",
    },
    {
      name: "우왁굳",
      title: "🎮 로스트아크 | 일일 숙제 & 레이드",
      platform: "치지직",
      viewers: 15678,
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "2시간 15분 전",
    },
    {
      name: "뢴트게늄",
      title: "🎮 데드 바이 데이라이트 | 킬러 플레이",
      platform: "유튜브",
      viewers: 4321,
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "1시간 10분 전",
    },
  ]

  const upcomingStreams = [
    {
      name: "이세계아이돌",
      title: "🎤 이세계 콘서트 | 신곡 공개!",
      platform: "치지직",
      category: "노래",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "오늘 20:00",
    },
    {
      name: "비챤",
      title: "🎮 호러 게임 | 아웃라스트 2",
      platform: "치지직",
      category: "게임",
      thumbnail: "/placeholder.svg?height=180&width=320",
      startTime: "내일 19:00",
    },
  ]

  const platforms = ["전체", "치지직", "유튜브", "트위치", "기타"]
  const categories = ["전체", "게임", "노래", "토크", "ASMR", "리액션"]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">LIVE</h1>
            <p className="text-gray-400">현재 방송 중인 버튜버들을 확인하세요</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="방송 검색"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-red-500/20 text-red-400">
              LIVE {liveStreams.length}
            </Badge>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications" className="text-sm">
                알림 받기
              </Label>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Calendar className="w-4 h-4 mr-2" /> 방송 일정
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4 mr-2" /> 알림 설정
            </Button>
          </div>
        </div>

        <Tabs defaultValue="live" className="space-y-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="live" className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              현재 방송
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              예정된 방송
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="mr-2 text-sm text-gray-400">플랫폼:</div>
            {platforms.map((platform) => (
              <Badge key={platform} variant={platform === "전체" ? "default" : "outline"} className="cursor-pointer">
                {platform}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <div className="mr-2 text-sm text-gray-400">카테고리:</div>
            {categories.map((category) => (
              <Badge key={category} variant={category === "전체" ? "default" : "outline"} className="cursor-pointer">
                {category}
              </Badge>
            ))}
          </div>

          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveStreams.map((stream) => (
                <Card key={stream.name} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs">LIVE</span>
                    </div>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                      <Eye className="w-3 h-3" />
                      <span className="text-xs">{stream.viewers.toLocaleString()}</span>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{stream.startTime}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{stream.name}</h3>
                      <Badge variant="outline">{stream.platform}</Badge>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 line-clamp-2">{stream.title}</p>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {stream.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingStreams.map((stream, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">예정됨</span>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{stream.startTime}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{stream.name}</h3>
                      <Badge variant="outline">{stream.platform}</Badge>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 line-clamp-2">{stream.title}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {stream.category}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Bell className="w-3 h-3 mr-1" /> 알림 설정
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
